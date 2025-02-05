
import "./Hero.css"
import { profile11 } from '../../assets/images'
import Points from "./Points"
import Partners from "./Partners"

const Hero = () => {
  return (
    <section id='home'>
      <div className="stroke__text intro__text">HELLO</div>
      <div className="container full__height blur-effect">
         <div className="info__container">
            <div className="user__profile">
               <div className=" photo__container">
                <img src={profile11} alt="profile_picture" />
               </div>
            </div>
            <div className="details__container">
              <h3>Hello there! I'm <span className="color__primary">Shema Leandre</span></h3>
              <h1 className="title">
                <span className="text__gradient">Fullstack Developer</span>
              </h1>
              <h3>Working remotely from Rwanda</h3>
              <p className="text__muted description">
              passionate about crafting exceptional digital experiences. I thrive on tackling complex challenges and delivering innovative solutions. My journey in the tech industry has enabled me to collaborate with professionals worldwide, translating ideas into reality. Throughout my career, I've honed my skills through various projects, each one contributing to my growth and expertise in the domain. I'm driven by a commitment to excellence and a relentless pursuit of mastery in my craft.
              </p>
              <Points/>
             </div>
         </div>
         <Partners/>
      </div>
    </section>
  )
}

export default Hero
