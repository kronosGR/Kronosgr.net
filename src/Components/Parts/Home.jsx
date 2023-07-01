import React from 'react';

import styles from './Home.module.css';

const Home = () => {
  return (
    <div id='home' className={styles.container}>
      <span className={styles.title}>Hi I am Georgios</span>
      <span className={styles.work}>
        ... a Full-Stack++ Developer
      </span>
      <span className={styles.love}>
        ... with passion for problem solving and creation
      </span>
    </div>
  );
};

export default Home;
