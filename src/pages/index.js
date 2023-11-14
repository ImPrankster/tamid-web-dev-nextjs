import Head from "next/head";
import { useState } from "react";

export default function Home() {
  const [number, setNumber] = useState(0);

  function addToNumber() {
    setNumber(number + 1);
  }

  function subToNumber() {
    setNumber(number - 1);
  }

  return (
    <>
      <Head>
        <title>Create Next App</title>
      </Head>
      <main className="main-container">
        <h1>Hello World !</h1>
        <div className="counter">
          <button onClick={subToNumber}>-</button>
          <div>{number}</div>
          <button onClick={addToNumber}>+</button>
        </div>
      </main>
    </>
  );
}
