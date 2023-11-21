import Typed from "typed.js";
import { useEffect, useRef} from "react";
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";




const Home = () =>{
    const el = useRef(null);
    const particlesInit = async (main) => {
        console.log(main);
        await loadFull(main);
      };
    useEffect(() => {
        const typed = new Typed(el.current, {
          strings: ["Front-End Web Development", "JavaScript", "HTML", "CSS", "REACT", "BOOTSTRAP"],
          typeSpeed: 80,
          backSpacing: 90,
          startDelay: 5,
          showCursor: false,
          loop: true,
          loopCount:  Infinity,
          fadeOutClass: 'typed-fade-out',
          fadeOutDelay: 500,
        });

        return () => {
          typed.destroy();
        };
      }, []);

      return (
        <div className="Home">
                  <Particles id="tsparticles" init={particlesInit} options={{
         "fullScreen": {
          "enable": true,
          "zIndex": 1
        },
      "particles": {
          "number": {
              "value": 30,
              "density": {
                  "enable": false,
                  "value_area": 800
              }
          },
          "color": {
              "value": "#f9ad00"
          },
          "shape": {
              "type": "circle",
              "stroke": {
                  "width": 6,
                  "color": "#f9ab00"
              }
          },
          "opacity": {
              "value": 0.8,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 1,
                  "opacity_min": 0.1,
                  "sync": false
              }
          },
          "size": {
              "value": 4,
              "random": false,
              "anim": {
                  "enable": false,
                  "speed": 40,
                  "size_min": 0.1,
                  "sync": false
              }
          },
          "rotate": {
              "value": 0,
              "random": true,
              "direction": "clockwise",
              "animation": {
                  "enable": true,
                  "speed": 5,
                  "sync": false
              }
          },
          "line_linked": {
              "enable": true,
              "distance": 200,
              "color": "#f9ad00",
              "opacity": 0.4,
              "width": 2
          },
          "move": {
              "enable": true,
              "speed": 2,
              "direction": "none",
              "random": false,
              "straight": false,
              "out_mode": "out",
              "attract": {
                  "enable": false,
                  "rotateX": 600,
                  "rotateY": 1200
              }
          }
      },
      "interactivity": {
          "events": {
              "onhover": {
                  "enable": true,
                  /* "mode": ["grab"] */
              },
              "onclick": {
                  "enable": false,
                  "mode": "bubble"
              },
              "resize": true
          },
          "modes": {
              "grab": {
                  "distance": 400,
                  "line_linked": {
                      "opacity": 1
                  }
              },
              "bubble": {
                  "distance": 400,
                  "size": 40,
                  "duration": 2,
                  "opacity": 8,
                  "speed": 3
              },
              "repulse": {
                  "distance": 200
              },
              "push": {
                  "particles_nb": 4
              },
              "remove": {
                  "particles_nb": 2
              }
          }
      },
      "retina_detect": true,
      "background": {
          "color": "none",
          "image": "",
          "position": "50% 50%",
          "repeat": "no-repeat",
          "size": "cover"
      }
      }}
      />
            <div className="header-text">
                <h1>I am a Front End Web Developer</h1>
            </div>
            <div className="button">
              <button className="contact-button">contact me</button>
            </div>
           <span className="typed" ref={el} />
        </div>
      );
    }

export default Home;