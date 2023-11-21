
import bg from "../blue-laptop.png";
const About = () => {
    return(
        <section id="intro">
            <div className="introContent">
                <span className="hello">Hello,</span>
                <span className="introText"> I'm <span className="introName">Tiesha</span><br/>Font-End Developer</span>
                <p className="introPara">I am a skilled and curious Web Developer. I found my passion for coding in 2021 and havn't looked back since.<br/> I love the feeling of figuring a problem out while debugging. coding is like finding pieces to a puzzle. </p>
                <div className="button-2">
                  <button className="hire-button">Hire me</button>
                </div>
                <img src={bg} alt="" className="bg"/>
            </div>
        </section>
    )
}

export default About;