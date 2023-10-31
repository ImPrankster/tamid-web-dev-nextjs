import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="main-container">
        <h1>Hello World !</h1>
        <div className="counter">
          <button>-</button>
          <div>0</div>
          <button>+</button>
        </div>
      </main>
    </>
  );
}
