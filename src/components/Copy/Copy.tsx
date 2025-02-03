import "./Copy.css";

function Copy() {
  return (
    <div className="copy-container">
      <p>
        Welcome to my website, where I have way too much copy. I should work on
        shorter paragraphs with lots of links.
      </p>
      <p>
        Some links are definitely useful. Here is a link to my{" "}
        <a
          href="https://github.com/OldEphraim"
          target="_blank"
          rel="noreferrer"
        >
          GitHub profile
        </a>
        . Here is another one to{" "}
        <a href="https://alanmgarber.com" target="_blank" rel="noreferrer">
          my beautiful old website
        </a>
        . A third potentially useful one is to my{" "}
        <a
          href="https://www.linkedin.com/in/alan-garber-659063112/"
          target="_blank"
          rel="noreferrer"
        >
          LinkedIn profile
        </a>
        .
      </p>
      <p>
        I'm currently learning to be a better engineer at{" "}
        <a href="https://fractalbootcamp.com" target="_blank" rel="noreferrer">
          Fractal Bootcamp
        </a>
        . Enroll in the next cohort!
      </p>
    </div>
  );
}

export default Copy;
