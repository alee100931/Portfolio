import React from "react";

import styles from "./About.module.css";
import compGif from '../../../assets/about/comp.gif';
import frontEnd from '../../../assets/about/frontEnd.png';
import backEnd from '../../../assets/about/backEnd.png';
import uiImage from '../../../assets/about/ui.png';

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <img
          src={compGif}
          alt="Cursor icon"
        />
        <ul className={styles.aboutItems}>
          <li className={styles.aboutItem}>
            <img src={frontEnd} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Development</h3>
              <p>
                I have experience building websites with React, HTML, CSS, and
                JavaScript.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={backEnd} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Experience</h3>
              <p>
                I have experience with Microsoft SQL within SirsiDynix Horizon and integrating Node.js backends with frontend
                frameworks such as React.
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={uiImage} alt="UI icon" />
            <div className={styles.aboutItemText}>
              <h3>UI Design</h3>
              <p>
                I have experience with the Adobe Suite for designing additional graphics for websites
                and applications. I've done previous graphic design work for independent Twitch partners.
              </p>
            </div>
          </li>
        </ul>
      </div>
    </section>
  );
};