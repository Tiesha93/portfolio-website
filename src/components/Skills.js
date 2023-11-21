import html from "../html5.png";
import css from "../css3.png";
import jvs from "../javascript.png";
import rt from "../react.png";
import boot from "../boot.png";
import git from "../git.png";

const Skills = () => {
    return(
        <div className="container">
            <div className="header">
               <p class="h1">Experience</p>
            </div>
            <div className="sub-header">
               <h5>
                 Skills &
                <small class="text-muted"> Tools</small>
              </h5>
           </div>
           <div class="container">
             <div class="row row-cols-3">
               <div class="col">
                 <img src={html} alt="" className="html"/>
                 <p className="title">HTML</p>
               </div>
               <div class="col">
                 <img src={css} alt="" className="css"/>
                <p className="title">CSS</p>
               </div>
               <div class="col">
                 <img src={jvs} alt="" className="jvs"/>
                 <p className="title">JavaScript</p>
               </div>
               <div class="col">
                 <img src={rt} alt="" className="rt"/>
                 <p className="title">React</p>
               </div>
               <div class="col">
                 <img src={boot} alt="" className="boot"/>
                 <p className="title">Bootstrap</p>
               </div>
               <div class="col">
                 <img src={git} alt="" className="git"/>
                 <p className="title">Git</p>
               </div>
             </div>
          </div>
        </div>
    )
}

export default Skills;