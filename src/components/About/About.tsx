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

  console.log('about.join',styles)

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
            <p><span></span> I have seven (7) years of experience in analysis, 
            design, development, testing and implementation expertise in internet and client/server applications.
            Inspired JavaScript developer and highly passionate and curious about new Front-End development technologies
            and has ability in mastering them with a keen awareness of new industry developments.


         </p>
         <ul>
            <div className={styles.skillContainer}>
                <li className={styles.skillContainerItem}> Javascript(Es6+)</li>
                <li className={styles.skillContainerItem}> HTML5 & CSS3</li>
                <li className={styles.skillContainerItem}>Angular </li>
                <li className={styles.skillContainerItem}>React </li>
                <li className={styles.skillContainerItem}>Typescript</li>
                <li className={styles.skillContainerItem}>Node.js</li>
            </div>
        </ul>
          </div>
        </div>
      </div>
    </section>
  )
};

export default About;
