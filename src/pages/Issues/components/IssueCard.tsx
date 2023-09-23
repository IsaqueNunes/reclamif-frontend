import { useCallback } from 'react';

import { AiOutlineHeart } from 'react-icons/ai'
import { BiComment } from 'react-icons/bi'
import { FaUser } from 'react-icons/fa'
import { MdNewReleases, MdModeEditOutline } from 'react-icons/md'

import styles from './styles.module.css'

type ClaimType = "SUGGESTION"
  | "PROBLEM"
  | "WAITING_FOR_RESPONSE"
  | "NOT_ENOUGH_INFORMTION"
  | "DUPLICATE"
  | "DENIED";

export type IssueResponse = {
  id: number;
  title: string;
  description: string;
  createdAt: string;
  editedAt: string;
};

export type IssueCardProps = {
  issue: IssueResponse;
};

function getRandom(min: number, max: number) {
  min = Math.ceil(min);
  max = Math.floor(max);
  return Math.floor(Math.random() * (max - min + 1) + min); // The maximum is inclusive and the minimum is inclusive
}


export function IssueCard({ issue }: IssueCardProps) {
  const transformDate = (date: string) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();

    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  };

  return (
    <li key={issue.id} className={styles["issue"]}>
      <span className={styles["profile-icon"]}>
        <FaUser size={"100%"}/>
      </span>
      <div className={styles["issue-info"]}>
        <h2>{issue.title}</h2>
        {/* <p>{issue.description}</p> */}
        <div className={styles["datetime-info"]}>
          <div className={styles["datetime"]}>
            <MdNewReleases size={"1em"} />
            <p>{transformDate(issue.createdAt)}</p>
          </div>
          {issue.editedAt &&
            <div className={styles["datetime"]}>
              <MdModeEditOutline size={"1em"} />
              <p>{transformDate(issue.createdAt)}</p>
            </div>
          }
        </div>
      </div>
      <div className={styles["issue-numbers"]}>
        <span className={styles["comments"]}>
          <BiComment size={"1em"} />
          <p>{getRandom(0, 10)}</p>
        </span>
        <span className={styles["likes"]}>
          <AiOutlineHeart size={"1em"} />
          <p>{getRandom(0, 10)}</p>
        </span>
      </div>
    </li>
  );
}
