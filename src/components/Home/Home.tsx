import React from 'react';
import styles from './Home.module.css';
import image from '../../assets/shashank-photo.jpeg'
//import image from '../../logo.svg'


const Home: React.FC = () => {
  let homeSection = [styles.homeSection,styles.section]
  let row = [styles.row,styles.fullScreen]
  let imgDiv = [styles.imgBox,styles.outerShadow]
  let effectDiv = [styles.effect,styles.effect1]
  let effectDiv2 = [styles.effect,styles.effect2]
  let effectDiv3 = [styles.effect,styles.effect3]
  let effectDiv4 = [styles.effect,styles.effect4]
  let effectDiv5 = [styles.effect,styles.effect5]

  return(
  <div className={styles.Home} data-testid="Home">

    <section id="home" className={homeSection.join(' ')} >
      <div className={styles.effectWrap}>
      <div className={effectDiv.join(' ')}> 
       </div>   
       <div className={effectDiv2.join(' ')}>
         <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div />
         <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div /> <div />
       </div> 
       <div className={effectDiv3.join(' ')}>
       </div> 
       <div className={effectDiv4.join(' ')}>
       </div>
       <div className={effectDiv5.join(' ')}>
         <div />   <div />   <div />   <div />   <div />   <div />   <div />   <div />   <div />   <div />
       </div>
      </div>
      <div className={styles.container}>
        <div className = {row.join(' ')}>
        <div className={styles.homeText}>
          <p>Hello</p>
          <h2>I'm Shashank</h2>
          <h1>FrontEnd Developer  </h1>
        </div>
        <div className={styles.homeImg}>
          <div className={imgDiv.join(' ')}>
            <img  className={styles.innerShadow} src={image} alt='profile-pic'></img>
            </div>
        </div>
        </div>
      </div>
    </section>
  </div>
)};

export default Home;
