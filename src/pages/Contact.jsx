import React from 'react'
import styles from '../pages/Contact.module.css';
import { FaLinkedin, FaFacebook, FaInstagram, FaEnvelope } from 'react-icons/fa'; // Importação dos ícones
const Contact = () => {
  return (


<div className={styles.iconContainer}>
     
      <a  href="https://www.linkedin.com/in/jonatan-gomes-floriano-5b45172a0/" target="_blank" rel="noopener noreferrer" className={styles.icon}>
        <FaLinkedin />
      </a>
    
      <a href="mailto:jonatan.jc1919@gmail.com" className={styles.icon}>
        <FaEnvelope />
      </a>
    </div>  )
}

export default Contact