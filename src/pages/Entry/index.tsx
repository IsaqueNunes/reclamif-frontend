import { Outlet } from 'react-router-dom';
import styles from './entry.module.css'

export default function Entry() {
  return (
    <main id={styles["main-entry"]}>
      <Outlet />
    </main>
  );
}
