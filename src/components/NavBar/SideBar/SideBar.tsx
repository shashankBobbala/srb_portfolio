import React from 'react';
import styles from './SideBar.module.css';

interface sideBarProps{
  sideBar:Boolean; 
  sideBarShow:any;
}

const SideBar: React.FC<sideBarProps> = ({sideBar,sideBarShow}) => { 

  let drawerClasses= [styles.SideBar]
  if(sideBar){
  drawerClasses= [styles.SideBar,styles.open]

  }

  return(
  <div className={drawerClasses.join(' ')} data-testid="SideBar"> 
   <header className={styles.header}>
     <nav>
       <ul className={styles.nav_links}>
       <li><a href="#home" onClick={sideBarShow}>Home</a></li>
       <li><a href="#about" onClick={sideBarShow}>About</a></li>
       <li><a href="#experience" onClick={sideBarShow}>Experience</a></li>
       <li><a href="#contact" onClick={sideBarShow}>Contact</a></li>
       </ul>
     </nav>
     {/* <a className='cta'href=''><button>Contact</button></a> */}
   </header>
  </div>
)};

export default SideBar;
