import React, { useState } from "react";
import Fuse from "fuse.js";

// const Fuse = (await import('fuse.js')).default

// Courtesy of https://github.com/dariusk/corpora
import dogs from "@/data/dogs.json";

const fuse = new Fuse(dogs);

function searchWithBasicApproach(query: string): string[] {
  if (!query) {
    return [];
  }

  return dogs.filter((dog) => dog.toLowerCase().includes(query.toLowerCase()));
}

function searchWithFuse(query: string): string[] {
  if (!query) {
    return [];
  }

  return fuse.search(query).map((result) => result.item);
}

interface SearchProps {
  results: string[];
}

const SearchResults: React.FC<SearchProps> = ({ results }) => {
  if (!results) {
    return null;
  }

  if (!results.length) {
    return <p>There are no results for your query.</p>;
  }

  return (
    <ol>
      {results.map((result) => (
        <li key={result}>{result}</li>
      ))}
    </ol>
  );
};

const Search = () => {
  const [searchResults, setSearchResults] = useState<string[]>([]);

  return (
    <div className="center">
      
      <form
        onSubmit={(event: React.FormEvent<HTMLFormElement>) => {
          event.preventDefault();

          const target = event.target as typeof event.target & {
            query: { value: string };
            fuse: { checked: boolean };
          };

          const query = target.query.value;
          const useFuse = target.fuse.checked;

          setSearchResults(
            useFuse ? searchWithFuse(query) : searchWithBasicApproach(query)
          );
        }}
      >
        <>
          <label htmlFor="query">Search for a dog breed:</label>{" "}
          <input type="search" id="query" />
          <br />
        </>

        <>
          <label htmlFor="fuse">
            Use <a href="https://fusejs.io/">Fuse.js</a>{" "}
          </label>
          <input type="checkbox" name="fuse" />
        </>
        <button>Search</button>
      </form>

      <SearchResults results={searchResults} />
    </div>
  );
};

export default Search;
