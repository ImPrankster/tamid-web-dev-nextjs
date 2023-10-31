import "@/styles/globals.css";

export default function App({ Component, pageProps }) {
  return (
    <>
      <nav>
        <a href="/" className="navbtn">
          Counter
        </a>
        <a href="/todo" className="navbtn">
          Todos
        </a>
        <a href="/frameworks" className="navbtn">
          Frameworks
        </a>
      </nav>
      <Component {...pageProps} />
    </>
  );
}
