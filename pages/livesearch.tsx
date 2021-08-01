import React from 'react'

const names = ['Tim', 'Joe', 'Bel', 'Max', 'Lee']

const SearchPage = () => {
    const [results, setResults] = React.useState<string[]>([])

    return (
      <div>
        <input
          type="text"
          placeholder="Search"
          onChange={async (e) => {
            const { value } = e.currentTarget
            // Dynamically load fuse.js
            const Fuse = (await import('fuse.js')).default
            const fuse = new Fuse(names)
            
            setResults( fuse.search(value).map((result) => result.item) )
          }}
        />
        <pre>Results: {JSON.stringify(results, null, 2)}</pre>
      </div>
    )
}

export default SearchPage
