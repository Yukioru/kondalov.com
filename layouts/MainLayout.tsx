import type { FC } from 'react';

import { Container } from '../components/Container';
import { Portrait } from '../components/Portrait';
import styles from '../styles/Layout.module.css';

export const MainLayout: FC = ({ children }) => (
  <div className={styles['grid']}>
    <aside className={styles['aside']}>
      <Portrait />
    </aside>
    <header className={styles['header']}>
      <Container>
        Header here
      </Container>
    </header>
    <main className={styles['main']}>
      <Container>
        {children}
      </Container>
    </main>
    <footer className={styles['footer']}>
      <Container>
        Footer here
      </Container>
    </footer>
  </div>
);
