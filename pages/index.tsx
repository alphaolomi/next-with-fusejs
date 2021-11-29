/* eslint-disable react/display-name */
import dynamic from "next/dynamic";
import PageLayout from "@/layouts/PageLayout";
import Loading from "@/components/Loading";

// DynamicComponentWithCustomLoading
const SearchPageComponent = dynamic(() => import("@/components/Search"), {
  loading: () => <Loading />,
});



const Home: React.FC = () => {
  return (
    <>
      <PageLayout>
        <h1>React With Fuse Demo</h1>

        <SearchPageComponent />
      </PageLayout>
    </>
  );
};

export default Home;
