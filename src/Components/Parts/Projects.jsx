import React from 'react';
import Title from '../Layout/Title';

import styles from './Projects.module.css';
import { projects } from '../../data/projects';
import Project from '../Project';

const Projects = () => {
  return (
    <div className={styles.container} id='projects'>
      <Title text='Projects' />
      <div className={styles.wrapper}>
        <a
          className={styles.link}
          target='_blank'
          rel='noreferrer'
          href='https://github.com/kronosGR/Projects'>
          Visit Github Projects
        </a>
        {projects.map((project) => (
          <Project project={project} key={project.id} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
