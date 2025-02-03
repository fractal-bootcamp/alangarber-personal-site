import './Body.css';
import ProfilePicture from '../../assets/me-may-2022.jpg';

function Body () {

  return (
    <>
    <div className="body">
        <div className="body-left">
<div>Hi, my name is Alan!</div>
<div>I am experimenting with multiple lines of text in this container.</div>
<div>You should hire me.</div>
<div className="button-container"><button>Show My Work!</button><button>Hire Me!</button><button>Typewriter Effect To The Max</button></div>
<div></div>
        </div>
        <div className="body-right"><img src={ProfilePicture} alt="This is me in May 2022 at 18th Avenue Library at Ohio State."></img></div>
        </div>
    </>
  )
}

export default Body;