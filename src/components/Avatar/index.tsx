import { FaUser } from 'react-icons/fa';
import styles from './avatar.module.css'

type AvatarProps = {
  url?: string;
}

export function Avatar ({ url }: AvatarProps) {
  // verify if url is not null
  return (
    <>
      {url ? (
        <img src={url} alt="Avatar" />
        ) : (
        <span className={styles["avatar"]}>
          <FaUser size={"100%"} />
        </span>
        )}
    </>
  )
}
