import React, { useEffect, useState } from 'react';
import Title from '../Layout/Title';
import Project from '../Project';

import styles from './Projects.module.css';
import { getProjects } from '../../data/data';

const Projects = () => {
  const [projects, setProjects] = useState(null);

  const getData = async () => {
    const temp = JSON.parse((await getProjects())[0].data);
    setProjects(temp);
  };

  useEffect(() => {
    getData();
  }, []);

  // useEffect(() => {
  //   console.log(projects);
  // }, [projects]);

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
        {projects &&
          projects.map((project) => <Project project={project} key={project.id} />)}
      </div>
    </div>
  );
};

export default Projects;
