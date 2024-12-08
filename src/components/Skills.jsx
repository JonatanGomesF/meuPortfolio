import React from 'react';
import styles from './Skills.module.css';

const skillsData = [
  { skill: 'HTML', level: 90 },
  { skill: 'CSS', level: 85 },
  { skill: 'JavaScript', level: 80 },
  { skill: 'React', level: 75 },
  { skill: 'Node.js', level: 70 },
  { skill: 'MySQL', level: 65 },
  { skill: 'PHP', level: 60 },
];

const Skills = () => {
  return (
    <div className={styles.skillsContainer}>
      <h2 className={styles.skillsTitle}>Minhas Skills</h2>
      <div className={styles.skillsList}>
        {skillsData.map((item, index) => (
          <div key={index} className={styles.skillItem}>
            <span className={styles.skillLabel}>{item.skill}</span>
            <div className={styles.skillBar}>
              <div
                className={styles.skillLevel}
                style={{ width: `${item.level}%` }}
              >
                <span className={styles.skillPercentage}>{item.level}%</span>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Skills;
