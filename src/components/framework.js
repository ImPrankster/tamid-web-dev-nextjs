const Framework = ({ name, url, img }) => {
  return (
    <span className="framework-card">
      <img src={img} alt={name} />
      <div className="framework-info">
        <p>{name}</p>
        <a href={url}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
            fill="none"
            stroke="currentColor"
            strokeWidth="2"
            strokeLinecap="round"
            strokeLinejoin="round"
            className="lucide lucide-arrow-right"
          >
            <path d="M5 12h14" />
            <path d="m12 5 7 7-7 7" />
          </svg>
        </a>
      </div>
    </span>
  );
};

export default Framework;
