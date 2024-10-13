import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import styles from "./Experience.module.css";
import skills from "../../data/skills.json";
import history from "../../data/history.json";
import { getImageUrl } from "../../utils";

export const Experience = () => {
  return (
    <section className={styles.container} id="experience">
      <h2 className={styles.title}>Experience</h2>
      <div className={styles.content}>
        <motion.div
          className={styles.skills}
          initial={{ opacity: 0, x: -100 }} // Start from the left
          whileInView={{ opacity: 1, x: 0 }} // Move to original position
          transition={{ duration: 0.8 }} // Transition duration
        >
          {skills.map((skill, id) => {
            return (
              <div key={id} className={styles.skill}>
                <div className={styles.skillImageContainer}>
                  <img src={getImageUrl(skill.imageSrc)} alt={skill.title} />
                </div>
                <p>{skill.title}</p>
              </div>
            );
          })}
        </motion.div>
        <motion.ul
          className={styles.history}
          initial={{ opacity: 0, x: 100 }} // Start from the right
          whileInView={{ opacity: 1, x: 0 }} // Move to original position
          transition={{ duration: 0.8, delay: 0.2 }} // Transition duration with delay
        >
          {history.map((historyItem, id) => {
            return (
              <li key={id} className={styles.historyItem}>
                <img
                  src={getImageUrl(historyItem.imageSrc)}
                  alt={`${historyItem.organisation} Logo`}
                />
                <div className={styles.historyItemDetails}>
                  <h3>{`${historyItem.role}, ${historyItem.organisation}`}</h3>
                  <p>{`${historyItem.startDate} - ${historyItem.endDate}`}</p>
                  <ul>
                    {historyItem.experiences.map((experience, id) => {
                      return <li key={id}>{experience}</li>;
                    })}
                  </ul>
                </div>
              </li>
            );
          })}
        </motion.ul>
      </div>
    </section>
  );
};
