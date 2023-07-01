import React from 'react';

import styles from './Navbar.module.css';
import NavProfile from './NavProfile';
import Spacer from '../Layout/Spacer';
import NavItem from './NavItem';
import ExternalLink from './ExternalLink';

const Navbar = () => {
  return (
    <>
      <input type='checkbox' className={styles.hamb} id='hamb' />
      <label htmlFor='hamb' className={styles.hamb_icon}>
        &#9776;
      </label>
      <div className={styles.container}>
        <NavProfile />
        <Spacer size='2rem' />
        <h1>Georgios Katsanakis</h1>
        <span>Full-Stack++ Developer</span>

        <ul className={styles.navmenu}>
          <NavItem name='Home' link='#home' />
          <NavItem name='About' link='#about' />
          <NavItem name='Projects' link='#projects' />
          {/* <NavItem name='Contact' link='#contact' /> */}
        </ul>
        <ExternalLink
          icon='/icons/linkedin.svg'
          url='https://www.linkedin.com/in/kronosgr/'
          title='LinkedIn'
        />
        <ExternalLink
          icon='/icons/github.svg'
          url='https://github.com/kronosGR'
          title='Github'
        />
        <a
          href='mailto:geo.elgeo@gmail.com'
          target='_blank'
          rel='noreferrer'
          className={styles.link}>
          geo.elgeo@gmail.com
        </a>
      </div>
    </>
  );
};

export default Navbar;
