import dynamic from "next/dynamic";
import PageLayout from "@/layouts/PageLayout";

const DynamicComponentWithCustomLoading = dynamic(() => import("@/components/Search"), {
  loading: () => <p>Loading...</p>,
});

// import Search from "@/components/Search";

const Home: React.FC = () => {
  return (
    <>
      <PageLayout>
        <h1>React With Fuse Demo</h1>
        {/* <Search /> */}
        <DynamicComponentWithCustomLoading />
      </PageLayout>
    </>
  );
};

export default Home;
