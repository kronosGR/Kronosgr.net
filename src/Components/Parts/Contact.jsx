import React from 'react';

import styles from './Contact.module.css';
import Title from '../Layout/Title';
import Spacer from '../Layout/Spacer';

const Contact = () => {
  return (
    <div className={styles.container} id='contact'>
      <Title text='Contact' />
      <div className={styles.wrapper}>
        <div className={styles.social}>
          <a href='https://github.com/kronosGR' target='_blank' rel='noreferrer'>
            <img
              src='icons/github.svg'
              alt='github account'
              className={styles.contact_img}
            />
          </a>
          <a
            href='https://www.linkedin.com/in/kronosgr/'
            target='_blank'
            className={styles.contact_img}
            rel='noreferrer'>
            <img src='icons/linkedin.svg' alt='linkedIn account' />
          </a>
        </div>
        <Spacer size='2rem' />
        <a
          href='mailto:geo.eleo@gmail.com'
          target='_blank'
          className={styles.contact_link}
          rel='noreferrer'>
          geo.elgeo@gmail.com
        </a>
      </div>
    </div>
  );
};

export default Contact;
