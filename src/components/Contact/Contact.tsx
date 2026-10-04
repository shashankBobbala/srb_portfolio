import React from 'react';
import styles from './Contact.module.css';

const Contact: React.FC = () => {
  const shadow = [styles.btn1,styles.outerShadow, styles.hoverInShadow]
  return(
  <section id="contact" className={styles.Contact} data-testid="Contact">
     <div className={styles.ContactTitle}>
            <h2 data-heading='contact info'>Contact Me</h2>
          </div>
          <div className={styles.row}> 
          <div className={styles.container}> 
          <a href="https://mail.google.com/mail/?view=cm&fs=1&to=shashank.kf314%40gmail.com" target="_blank" rel="noopener noreferrer" aria-label="Say Hello (opens Gmail in a new tab)" className={shadow.join(' ')}> Say Hello </a>
           </div>
          </div>
  </section>
)};

export default Contact;
