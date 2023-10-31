const Frameworks = [
  {
    name: "Next.js",
    url: "https://nextjs.org/",
    img: "https://blog.appsignal.com/_next/image?url=%2Fimages%2Fblog%2F2022-11%2Fnextjs-13.png&w=3840&q=50",
  },
  {
    name: "Svelte",
    url: "https://svelte.dev/",
    img: "https://miro.medium.com/v2/resize:fit:1400/1*G9fzmaoymDGy7scbkgpC7A.png",
  },
  {
    name: "Ember",
    url: "https://emberjs.com/",
    img: "https://lh3.googleusercontent.com/xiJT_JYT1wV86sw7nZl-H4EekNRj798Fa6rdGpbM5ky4wJno3YRhupT3nxekDI5vIoNTOeQZdT0gCSBRgsG3hx_BJTQ_EBxhbB5P6-6JuqxrCqR5BT1SDmYzIa8QabodFs03oWj8",
  },
  {
    name: "Preact",
    url: "https://preactjs.com/",
    img: "https://swansoftwaresolutions.com/wp-content/uploads/2018/04/preact-2.png",
  },
  {
    name: "Solid",
    url: "https://www.solidjs.com/",
    img: "https://i0.wp.com/css-tricks.com/wp-content/uploads/2021/08/solidjs.png?fit=1800%2C900&ssl=1",
  },
  {
    name: "Vue",
    url: "https://vuejs.org/",
    img: "https://img-b.udemycdn.com/course/750x422/5157066_66bb.jpg",
  },
  {
    name: "Angular",
    url: "https://angular.io/",
    img: "https://res.cloudinary.com/practicaldev/image/fetch/s--iJZBBAvk--/c_imagga_scale,f_auto,fl_progressive,h_420,q_auto,w_1000/https://dev-to-uploads.s3.amazonaws.com/uploads/articles/6doxxhpppvzoxdbv0do6.png",
  },
];

const FrameworksPage = () => {
  return (
    <main className="main-container">
      <h1>Famous Web Frameworks</h1>
      <p>
        There are a lot of different web frameworks out there, what should I
        choose?
      </p>
      <p>
        If you want a well-supported, performent, and well-documented framework,
        you can't go wrong with
      </p>
      <span className="framework-card">
        <img src={Frameworks[0].img} alt={Frameworks[0].name} />
        <div className="framework-info">
          <p>{Frameworks[0].name}</p>
          <a href={Frameworks[0].url}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </span>
      <p>
        If you want a web framework with a cute mascot, amber has a cute hamster
      </p>
      <span className="framework-card">
        <img src={Frameworks[2].img} alt={Frameworks[2].name} />
        <div className="framework-info">
          <p>{Frameworks[2].name}</p>
          <a href={Frameworks[2].url}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="lucide lucide-arrow-right"
            >
              <path d="M5 12h14" />
              <path d="m12 5 7 7-7 7" />
            </svg>
          </a>
        </div>
      </span>

      <h1>Web Frameworks:</h1>
      <div className="framework-grid">
        {Frameworks.map((framework, i) => {
          return (
            <span className="framework-card" key={i}>
              <img src={framework.img} alt={framework.name} />
              <div className="framework-info">
                <p>{framework.name}</p>
                <a href={framework.url}>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="24"
                    height="24"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="currentColor"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                    class="lucide lucide-arrow-right"
                  >
                    <path d="M5 12h14" />
                    <path d="m12 5 7 7-7 7" />
                  </svg>
                </a>
              </div>
            </span>
          );
        })}
      </div>
    </main>
  );
};

export default FrameworksPage;
