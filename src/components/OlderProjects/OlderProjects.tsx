import "./OlderProjects.css";

import MTGIcon from "../../assets/mtg-banner.jpg";
import QuizIcon from "../../assets/ready-for-a-quiz.jpeg";
import GoogleIcon from "../../assets/google-maps-icon.jpg";
import WordleIcon from "../../assets/wordle-clone.png";

const OlderProjects = () => {
  return (
    <>
      <div className="older-projects-header">
        <p>
          Please note that the projects in this section have not been
          consistently maintained since summer 2022, and they reflect the level
          of quality I produced before gaining professional experience. Some are
          better than others, but the Tarot Project is the best reflection of
          where my skills are right now.
        </p>
      </div>
      <div className="older-projects" id="OlderProjects">
        <div className="cards">
          <img className="older-projects-img" src={MTGIcon} alt="Magic: The Gathering Lookup Project" />
          <div className="project-explanation">
            <li>Magic: The Gathering card lookup website</li>
            <li>Built with Angular and MTG Developers API</li>
            <li>
              Showcases use of routing, state, dependency injection, and pipes
              in Angular
            </li>
          </div>
          <div className="button-container">
            <a
              href="https://alanmgarber.com/Magic-The-Gathering"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE PROJECT</strong>
              </button>
            </a>
            <a
              href="https://github.com/OldEphraim/Magic-The-Gathering"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE GITHUB</strong>
              </button>
            </a>
            <a
              href="https://oldephraimlearnstocode.wordpress.com/2024/06/06/magic-the-gathering-card-lookup-site-code-review/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE BLOGPOST</strong>
              </button>
            </a>
          </div>
        </div>
        <div className="cards">
          <img className="older-projects-img" src={GoogleIcon} alt="Google Maps API Project" />
          <div className="project-explanation">
            <li>Travel advisory website</li>
            <li>Shows hotels, restaurants, and attractions near you</li>
            <li>Built with React, Google Maps API, and Travel Advisor API</li>
          </div>
          <div className="button-container">
            <a
              href="https://alanmgarber.com/Google-Travel-Advisory"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE PROJECT</strong>
              </button>
            </a>
            <a
              href="https://github.com/OldEphraim/Google-Travel-Advisory"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE GITHUB</strong>
              </button>
            </a>
            <a
              href="https://oldephraimlearnstocode.wordpress.com/2022/05/25/travel-advisory-project-code-review/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE BLOGPOST</strong>
              </button>
            </a>
          </div>
        </div>
        <div className="cards">
          <img className="older-projects-img" src={WordleIcon} alt="Wordle Clone Project" />
          <div className="project-explanation">
            <li>Swordle; clone of popular Internet phenomenon Wordle</li>
            <li>Built with React and CSS</li>
            <li>Showcases knowledge of React hooks</li>
          </div>
          <div className="button-container">
            <a
              href="https://alanmgarber.com/React-Wordle"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE PROJECT</strong>
              </button>
            </a>
            <a
              href="https://github.com/OldEphraim/React-Wordle"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE GITHUB</strong>
              </button>
            </a>
            <a
              href="https://oldephraimlearnstocode.wordpress.com/2022/05/26/swordle-code-review/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE BLOGPOST</strong>
              </button>
            </a>
          </div>
        </div>
        <div className="cards">
          <img className="older-projects-img" src={QuizIcon} alt="Quiz Project" />
          <div className="project-explanation">
            <li>Word association game</li>
            <li>Features multiple choice questions</li>
            <li>Built with React, CSS, and Word Quiz API</li>
          </div>
          <div className="button-container">
            <a
              href="https://alanmgarber.com/Word-Quiz"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE PROJECT</strong>
              </button>
            </a>
            <a
              href="https://github.com/OldEphraim/Word-Quiz"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE GITHUB</strong>
              </button>
            </a>
            <a
              href="https://oldephraimlearnstocode.wordpress.com/2022/05/27/word-quiz-code-review/"
              target="_blank"
              rel="noreferrer"
            >
              <button className="spooky-button">
                <strong>SEE BLOGPOST</strong>
              </button>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default OlderProjects;
