import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import styles from "./About.module.css";
import { getImageUrl } from "../../utils";

export const About = () => {
  return (
    <section className={styles.container} id="about">
      <h2 className={styles.title}>About</h2>
      <div className={styles.content}>
        <motion.img
          src={getImageUrl("about/aboutImage.png")}
          alt="Me sitting with a laptop"
          className={styles.aboutImage}
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to original position
          transition={{ duration: 0.8 }} // Increased transition duration
        />
        <motion.ul
          className={styles.aboutItems}
          initial={{ opacity: 0, x: -100 }} // Start from the left
          whileInView={{ opacity: 1, x: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.2 }} // Increased duration and delay
        >
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/cursorIcon.png")} alt="Cursor icon" />
            <div className={styles.aboutItemText}>
              <h3>Frontend Developer</h3>
              <p>
                I'm a frontend developer with experience in building responsive
                and optimized sites
              </p>
            </div>
          </li>
          <li className={styles.aboutItem}>
            <img src={getImageUrl("about/serverIcon.png")} alt="Server icon" />
            <div className={styles.aboutItemText}>
              <h3>Backend Developer</h3>
              <p>
                I have experience developing fast and optimised back-end systems
                and APIs
              </p>
            </div>
          </li>
        </motion.ul>
      </div>
    </section>
  );
};
