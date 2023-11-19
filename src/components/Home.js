import Typed from "typed.js";
import { useEffect, useRef} from "react";




const Home = () =>{
    const el = useRef(null);
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Front-End", "JavaScript", "HTML", "CSS", "REACT", "BOOTSTRAP"],
          typeSpeed: 80,
          backSpacing: 90,
          startDelay: 5,
          showCursor: false,
          loopCount: 10,
          fadeOutClass: 'typed-fade-out',
          fadeOutDelay: 500,
        });

        return () => {
          typed.destroy();
        };
      }, []);

      return (
        <div className="Home">
            <div className="header-text">
                <h1>I am a Front End Web Developer</h1>
            </div>
            <div className="button">
          <button className="contact-button">contact me</button>
          </div>
          <span ref={el} />
          
        </div>

      );
    }

export default Home;