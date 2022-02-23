import type { FC } from 'react';

import styles from '../styles/Container.module.css';

export const Container: FC = ({ children }) => (
  <div className={styles['container']}>
    {children}
  </div>
);
