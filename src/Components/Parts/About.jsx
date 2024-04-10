import React from 'react';
import Title from '../Layout/Title';

import styles from './About.module.css';
import Skills from '../Skills';

const About = () => {
  return (
    <div id='about' className={styles.container}>
      <Title text='About' />
      <div className={styles.wrapper}>
        <img className={styles.image} src='/images/me.jpg' alt='kronos' />
        <span className={styles.intro}>
          Hi, I am Georgios Katsanakis, a Full-Stack++ Developer
        </span>

        <span className={styles.details}>
          I am passionate on everything I do and I give 100%. I love to create and solve
          problems. In my free time I enjoy spending time with my family, improving myself
          by practicing and learning new technologies
        </span>
        <span className={styles.quote}>"Never stop learning"</span>
        <span className={styles.quote}>
          "It is the definition of paranoia to do the same thing and expect a different
          result. "
        </span>
        <Skills />
      </div>
    </div>
  );
};

export default About;
