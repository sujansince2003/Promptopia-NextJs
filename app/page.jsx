import Feed from "@components/Feed";
function Home() {
  return (
    <>
      <section className="w-full flex-center flex-col">
        <h1 className="head_text text-center">
          Discover and share AI prompts
          <br className="max-md:hidden" />
          <span className="orange_gradient text-center">
            AI Powered Prompts
          </span>
        </h1>
        <p className="desc text-center">
          {" "}
          website to get AI prompts.get hands on this also share this app
        </p>
        {/* feed */}
        <Feed />
      </section>
    </>
  );
}

export default Home;
