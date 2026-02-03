import React from "react";

import styles from "./Contact.module.css";
import emailIcon from '../../../assets/contact/emailicon.png';
import linkedinIcon from '../../../assets/contact/linkedIn.png';
import githubIcon from '../../../assets/contact/github.png';

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <div className={styles.text}>
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </div>
      <ul className={styles.links}>
        <li className={styles.link}>
          <img src={emailIcon} alt="Email icon" />
          <a href="mailto:alee100931@gmail.com">alee100931@gmail.com</a>
        </li>
        <li className={styles.link}>
          <img
            src={linkedinIcon}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/asia-lee-06736120a/">linkedin.com/asia-lee</a>
        </li>
        <li className={styles.link}>
          <img src={githubIcon} alt="Github icon" />
          <a href="https://www.github.com/myname">github.com/alee100931</a>
        </li>
      </ul>
    </footer>
  );
};