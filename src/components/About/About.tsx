import React from 'react';
import styles from './About.module.css';
import image from '../../assets/shashank-photo.jpeg'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLinkedin } from '@fortawesome/free-brands-svg-icons';

const About: React.FC = () => {
  let about = [styles.aboutSection, styles.section]
  let imgDiv = [styles.imgBoxDiv, styles.innerShadow]
  let img = [styles.imgBox, styles.outerShadow]
  let socialLinkIcons = [styles.outerShadow, styles.hoverInShadow, styles.socialIcon]

  return (
    <section id="about" className={about.join(' ')} data-testid="About">
      <div className={styles.container}>
        <div className={styles.row}>
          <div className={styles.sectionTitle}>
            <h2 data-heading='main info'>About Me</h2>
          </div>
        </div>
        <div className={styles.row}>
          <div className={styles.aboutImage}>
            <div className={imgDiv.join(' ')}>
              <img className={img.join(' ')} src={image} alt='profile-pic'></img>
            </div>
            <div className={styles.socialLinks}>
              <a href='https://www.linkedin.com/in/shashankbobbala' target='_blank' rel='noopener noreferrer' aria-label='LinkedIn profile (opens in a new tab)' className={socialLinkIcons.join(' ')}>
                <FontAwesomeIcon icon={faLinkedin} />
              </a>
            </div>
          </div>
          <div className={styles.aboutInfo}>
            <p>I’m a Full-Stack Software Engineer with 10+ years of experience building enterprise web and desktop applications. My primary experience is with React, TypeScript, JavaScript, Node.js, and AWS. I’ve worked on real-time applications, cloud infrastructure, APIs, and distributed systems using technologies such as WebSockets, AWS Lambda, DynamoDB, CloudFront, and Terraform. I enjoy understanding how systems work end to end and continuously learning new technologies to become a better engineer.</p>
            <h3 className={styles.technologiesTitle}>Technologies</h3>
            <ul className={styles.skillContainer}>
              <li className={styles.skillContainerItem}>JavaScript (ES6+)</li>
              <li className={styles.skillContainerItem}>TypeScript</li>
              <li className={styles.skillContainerItem}>React</li>
              <li className={styles.skillContainerItem}>Angular</li>
              <li className={styles.skillContainerItem}>Node.js</li>
              <li className={styles.skillContainerItem}>HTML5 &amp; CSS3</li>
              <li className={styles.skillContainerItem}>REST APIs &amp; GraphQL</li>
              <li className={styles.skillContainerItem}>WebSockets</li>
              <li className={styles.skillContainerItem}>AWS</li>
              <li className={styles.skillContainerItem}>Terraform</li>
              <li className={styles.skillContainerItem}>Docker &amp; Kubernetes</li>
              <li className={styles.skillContainerItem}>Git &amp; CI/CD</li>
            </ul>
            <a
              href={`${process.env.PUBLIC_URL}/srbResumeF.docx`}
              download="srbResumeF.docx"
              className={styles.resumeDownload}
            >
              Download Resume (.docx)
            </a>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
