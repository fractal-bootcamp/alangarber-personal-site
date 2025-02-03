import { useState } from "react";
import "./Body.css";
import ProfilePicture from "../../assets/me-may-2022.jpg";
import TypeWriterEffect from "react-typewriter-effect";

function Body() {
  const [typewriterOff, setTypewriterOff] = useState(true);

  return (
    <>
      <div className="body">
        <div className="body-left">
          {typewriterOff ? (
            <div>Hi, my name is Alan!</div>
          ) : (
            <TypeWriterEffect
              textStyle={{ fontFamily: "Oxanium", fontSize: "1.5em", color: "black", fontWeight: "normal", textShadow: "#FC0 1px 0 10px" }}
              startDelay={100}
              typeSpeed={50}
              cursorColor="black"
              multiText={["Hi, my name is Alan!", "Hi, my name is Alan!"]}
              multiTextLoop={true}
              multiTextDelay={400}
            />
          )}
          {typewriterOff ? (
            <div>
              I am experimenting with multiple lines of text in this container.
            </div>
          ) : (
            <TypeWriterEffect
            textStyle={{ fontFamily: "Oxanium", fontSize: "1.5em", color: "black", fontWeight: "normal", textShadow: "#FC0 1px 0 10px" }}
            startDelay={100}
              typeSpeed={50}
              cursorColor="black"
              multiText={[
                "I am experimenting with multiple lines of text in this container.",
                "I am experimenting with multiple lines of text in this container.",
              ]}
              multiTextLoop={true}
              multiTextDelay={400}
            />
          )}
          {typewriterOff ? (
            <div>You should hire me.</div>
          ) : (
            <TypeWriterEffect
            textStyle={{ fontFamily: "Oxanium", fontSize: "1.5em", color: "black", fontWeight: "normal", textShadow: "#FC0 1px 0 10px" }}
            startDelay={100}
              typeSpeed={50}
              cursorColor="black"
              multiText={["You should hire me.", "You should hire me."]}
              multiTextLoop={true}
              multiTextDelay={400}
            />
          )}
          <div className="button-container">
            <button>
              <a
                href="https://alanmgarber.com"
                target="_blank"
                rel="noreferrer"
              >
                Show My Work!
              </a>
            </button>
            <button>
              <a href="mailto:a8garber@yahoo.com">Hire Me!</a>
            </button>
            <button onClick={() => setTypewriterOff(!typewriterOff)}>
              {typewriterOff
                ? "Typewriter Effect To The Max"
                : "No, Stop the Typewriter, Please"}
            </button>
          </div>
          <div></div>
        </div>
        <div className="body-right">
          <img
            src={ProfilePicture}
            alt="This is me in May 2022 at 18th Avenue Library at Ohio State."
            className="body-right-img"
            style={{ "clipPath": "circle()"}}
          ></img>
        </div>
      </div>
    </>
  );
}

export default Body;
