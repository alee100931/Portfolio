import React from "react";

import styles from "./Hero.module.css";
import heroImage from '../../../assets/Hero/heroImage.png';

export const Hero = () => {
  return (
    <section className={styles.container}>
      <div className={styles.content}>
        <h1 className={styles.title}>Hi, I'm Asia</h1>
        <p className={styles.description}>
          I'm an IT graduate with specialization in Web Design. Reach out if you'd like to learn more!
        </p>
        <a href="mailto:asiaplee@yahoo.com" className={styles.contactBtn}>
          Contact Me
        </a>
      </div>
      <img
        src={heroImage}
        alt="image of me"
        className={styles.heroImg}
      />
      <div className={styles.topBlur} />
      <div className={styles.bottomBlur} />
    </section>
  );
};