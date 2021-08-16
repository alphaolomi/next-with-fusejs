import Head from "next/head";

interface Props {
  children: React.ReactNode;
}

const PageLayout: React.FC<Props> = ({children}) => {
  return (
    <div>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      {children}
    </div>
  );
};

export default PageLayout;