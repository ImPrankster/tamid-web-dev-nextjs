import "@/styles/globals.css";
import Link from "next/link";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <Link href="/" className="navbtn">
          Counter
        </Link>
        <Link href="/todo" className="navbtn">
          Todos
        </Link>
        <Link href="/frameworks" className="navbtn">
          Frameworks
        </Link>
        <Link href="/random" className="navbtn">
          Randomizer
        </Link>
        <Link href="/hello" className="navbtn">
          Hello
        </Link>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
