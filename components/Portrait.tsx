import type { FC } from 'react';

import styles from '../styles/Portrait.module.css';

export const Portrait: FC = () => (
  <picture className={styles['picture']}>
    <source
      media="(max-width: 767px)"
      type="image/webp"
      srcSet="/images/portrait/portrait@w420.webp"
    />
    <source
      media="(max-width: 767px)"
      type="image/png"
      srcSet="/images/portrait/portrait@w420.png"
    />
    <source
      media="(min-width: 768px)"
      type="image/webp"
      srcSet="/images/portrait/portrait@h768.webp 1024w,
          /images/portrait/portrait@h1080.webp 1920w,
          /images/portrait/portrait@h1440.webp 2560w,
          /images/portrait/portrait@h2160.webp 3840w"
    />
    <source
      media="(min-width: 768px)"
      type="image/png"
      srcSet="/images/portrait/portrait@h768.png 1024w,
          /images/portrait/portrait@h1080.png 1920w,
          /images/portrait/portrait@h1440.png 2560w,
          /images/portrait/portrait@h2160.png 3840w"
    />
    <img
      className={styles['img']}
      src="/images/portrait/portrait.png"
      alt="Andrey Kondalov"
    />
  </picture>
);
