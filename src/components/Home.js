import Articles from "./Articles";

const Home = ({ loading, setLoading }) => {
  return (
    <>
      <Articles loading={loading} setLoading={setLoading} />
    </>
  );
};

export default Home;
