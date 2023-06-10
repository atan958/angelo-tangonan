import AngeloProfile from '../../../assets/angelo-profile.png'
import EmailIcon from '../../../icons/EmailIcon'
import GitHubIcon from '../../../icons/GitHubIcon'
import LinkedInIcon from '../../../icons/LinkedInIcon'
import PhoneIcon from '../../../icons/PhoneIcon'

const AboutMe = () => {
  return (
    <section>
      <div className="about-me">

        <div className="intro">
          <div className="left">
            <img src={AngeloProfile}/>
          </div>
          <div className="right">
            <div className="header">
              <p className="name">Angelo Rojas Tangonan</p>
              <p className="occupation">Software Engineering Student</p>
              <p className="company">The University of Auckland</p>
            </div>
          </div>
        </div>
        <div className="bio">
          <p>Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo. Quis autem vel eum iure reprehenderit qui in ea voluptate velit esse quam.</p>
        </div>

        <div className="socials">
          <EmailIcon fill="white"/>
          <PhoneIcon fill="white"/>
          <GitHubIcon fill="white"/>
          <LinkedInIcon fill="white"/>
        </div>

        <div className="placeholder">

        </div>
      </div>
    </section>
  )
}

export default AboutMe