import { Outlet } from 'react-router-dom';
import styles from './entry.module.css'

export function Entry() {
  return (
    <main id={styles["main-entry"]}>
      <Outlet />
    </main>
  );
}
