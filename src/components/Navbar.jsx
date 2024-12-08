import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import styles from './Navbar.module.css';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbarContainer}>
        <Link to="/" className={styles.navbarLogo}>
          MeuPortfólio
        </Link>
        <button className={styles.hamburger} onClick={toggleMenu}>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
          <span className={styles.hamburgerLine}></span>
        </button>
        <div
          className={`${styles.navbarLinks} ${
            isMenuOpen ? styles.navbarLinksActive : ''
          }`}
        >
          <Link to="/" className={styles.navbarLink}>
            Home
          </Link>
          <Link to="/about" className={styles.navbarLink}>
            About
          </Link>
          <Link to="/Contact" className={styles.navbarLink}>
            Contact
          </Link>
          <Link to="/skills" className={styles.navbarLink}>
            Skills
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
