import { useState } from "react";

async function sayHelloAsync(text) {
  const response = await fetch("/api/hello", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ name: text }),
  });
  const data = await response.json();
  return data;
}

const HelloPage = () => {
  const [text, setText] = useState("");
  const [received, setReceived] = useState("");

  return (
    <main className="main-container">
      <h1>Hello Page</h1>
      <div>
        <p>Received:</p>
        <p>{received}</p>
      </div>
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
            const { msg } = await sayHelloAsync(text);
            setReceived(msg);
          }}
        >
          Say hello
        </button>
      </div>
    </main>
  );
};

export default HelloPage;
