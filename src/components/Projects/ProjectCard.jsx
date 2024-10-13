import React from "react";
import { motion } from "framer-motion";
import styles from "./ProjectCard.module.css";
import { getImageUrl } from "../../utils";

export const ProjectCard = ({
  project: { title, imageSrc, description, skills, demo, source },
}) => {
  return (
    <motion.div
      className={styles.container}
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      viewport={{ once: true }} // Card will animate only once when it enters the viewport
    >
      <motion.img
        src={getImageUrl(imageSrc)}
        alt={`Image of ${title}`}
        className={styles.image}
        initial={{ scale: 0.95 }}
        whileHover={{ scale: 1.05 }}
        transition={{ type: "spring", stiffness: 300 }}
      />
      <motion.h3
        className={styles.title}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Start animation when in view
        transition={{ duration: 0.3, delay: 0.1 }}
      >
        {title}
      </motion.h3>
      <motion.p
        className={styles.description}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Start animation when in view
        transition={{ duration: 0.3, delay: 0.2 }}
      >
        {description}
      </motion.p>
      <motion.ul
        className={styles.skills}
        initial={{ y: 10, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }} // Start animation when in view
        transition={{ duration: 0.3, delay: 0.3 }}
      >
        {skills.map((skill, id) => (
          <motion.li
            key={id}
            className={styles.skill}
            initial={{ scale: 0.9 }}
            whileInView={{ scale: 1 }} 
            transition={{ duration: 0.2, delay: id * 0.1 }}
          >
            {skill}
          </motion.li>
        ))}
      </motion.ul>
      <div className={styles.links}>
        <motion.a
          href={demo}
          className={styles.link}
          whileHover={{ scale: 1.05 }}
          transition={{ type: "spring", stiffness: 300 }}
        >
          Demo
        </motion.a>
      </div>
    </motion.div>
  );
};
