import React from 'react';

import styles from './NavProfile.module.css';

const NavProfile = () => {
  return (
    <a href='#' title='Home'>
      <img src='/images/me.jpg' alt='kronos image' className={styles.image} />
    </a>
  );
};

export default NavProfile;
