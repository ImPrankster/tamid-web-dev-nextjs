import { useState } from "react";

async function sayHelloAsync(text) {
  const response = await fetch("/api/hello", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: text }),
  });
  const data = await response.json();
  if (!response.ok) {
    return {
      code: response.status,
      error: await data.error,
    };
  }
  return {
    code: response.status,
    msg: data.msg,
  };
}

const HelloPage = () => {
  const [text, setText] = useState("");
  const [received, setReceived] = useState({
    code: null,
    msg: null,
    error: null,
  });

  return (
    <main className="main-container">
      <h1>Hello Page</h1>
      {received.msg && (
        <div className="bg-green-700 text-white p-2 m-2">
          <p>{received.code} Received:</p>
          <p>{received.msg}</p>
        </div>
      )}
      {received.error && (
        <div className="bg-red-700 text-white p-2 m-2">
          <p>{received.code} Error:</p>
          <p>{received.error}</p>
        </div>
      )}
      <div className="input-group">
        <input
          type="text"
          placeholder="Send a greeting"
          onChange={(event) => {
            setText(event.target.value);
          }}
        />
        <button
          onClick={async () => {
            const data = await sayHelloAsync(text);
            setReceived(data);
          }}
        >
          Say hello
        </button>
      </div>
    </main>
  );
};

export default HelloPage;
