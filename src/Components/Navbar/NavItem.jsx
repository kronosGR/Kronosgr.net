import React from 'react';

import styles from './NavItem.module.css';

const NavItem = ({ name, link }) => {
  return (
    <li>
      <a className={styles.item} href={link}>
        {name}
      </a>
    </li>
  );
};

export default NavItem;
