import React from "react";
import { motion } from "framer-motion"; // Import framer-motion
import styles from "./Contact.module.css";
import { getImageUrl } from "../../utils";

export const Contact = () => {
  return (
    <footer id="contact" className={styles.container}>
      <motion.div
        className={styles.text}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
      >
        <h2>Contact</h2>
        <p>Feel free to reach out!</p>
      </motion.div>
      <motion.ul
        className={styles.links}
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay: 0.1 }}
      >
        <motion.li
          className={styles.link}
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3 }}
        >
          <img src={getImageUrl("contact/emailIcon.png")} alt="Email icon" />
          <a href="mailto:myemail@email.com">benabbouzineb1@gmail.com</a>
        </motion.li>
        <motion.li
          className={styles.link}
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.1 }}
        >
          <img
            src={getImageUrl("contact/linkedinIcon.png")}
            alt="LinkedIn icon"
          />
          <a href="https://www.linkedin.com/in/zineb-benabbou-235066241/">linkedin.com/benabbouzineb</a>
        </motion.li>
        <motion.li
          className={styles.link}
          initial={{ scale: 0.95 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: 0.2 }}
        >
          <img src={getImageUrl("contact/githubIcon.png")} alt="Github icon" />
          <a href="https://github.com/Zinebbenabou">github.com/Zinebbenabou</a>
        </motion.li>
      </motion.ul>
    </footer>
  );
};
