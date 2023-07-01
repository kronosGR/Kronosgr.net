import React from 'react';

import styles from './ExternalLink.module.css';

const ExternalLink = ({ icon, url, title }) => {
  return (
    <a href={url} target='blank' className={styles.container}>
      <img src={icon} alt={title} className={styles.image} />
      {title}
    </a>
  );
};

export default ExternalLink;
