import { useState } from "react";

async function getRandomEventAsync() {
  const response = await fetch("https://www.boredapi.com/api/activity");
  const data = await response.json();
  return data;
}

function getRandomEventCallback() {
  let response;
  fetch("https://www.boredapi.com/api/activity")
    .then((res) => res.json())
    .then((data) => (response = data));

  return response;
}

const RandomPage = () => {
  const [event, setEvent] = useState("");
  return (
    <main className="main-container">
      <h1>Random Page</h1>
      <h2 className="text-center">Random Event:</h2>
      <p>{event}</p>
      <button
        onClick={async () => {
          const data = await getRandomEventAsync();
          setEvent(data.activity);
        }}
      >
        Get Random Event
      </button>
    </main>
  );
};

export default RandomPage;
