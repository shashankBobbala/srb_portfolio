import React from 'react';
import styles from './NavBar.module.css';
import SideBarButton from './SideBar/SideBarButton';

interface navBarProps{
  sideBarShow:any
}

const NavBar: React.FC<navBarProps> = ({sideBarShow}) => {

  return(
    <div>
  <div className={styles.NavBar} data-testid="NavBar"> 
 
   <header className={styles.header}>
   <h1 className={styles.logo}>SRBPortfolio</h1>
     <nav>
       <ul className={styles.nav_links}>
       <li><a href="#home" className={styles.nav_linksChild}>Home</a></li>
       <li><a href="#about" className={styles.nav_linksChild}>About</a></li>
       <li><a href="#experience" className={styles.nav_linksChild}>Experience</a></li>
       <li><a href="#contact" className={styles.nav_linksChild}>Contact</a></li>
       </ul>
     </nav>
     {/* <a className='cta'href=''><button>Contact</button></a> */}
     <div className={styles.sideBarButtonBar}>
   <SideBarButton sideBarShow={sideBarShow} />
   </div>
   </header>
  
   </div>
  </div>

  )};

export default NavBar;
