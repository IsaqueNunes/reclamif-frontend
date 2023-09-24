import { useLoaderData } from "react-router-dom";
import { IssueResponse } from "../Issues/components/IssueCard";
import { Avatar } from "../../components/Avatar";

import styles from './issue.module.css';
import { MdModeEditOutline, MdNewReleases } from "react-icons/md";

export default function Issue() {
  const issue = useLoaderData() as IssueResponse;

  const transformDate = (date: string) => {
    const dateObject = new Date(date);
    const day = dateObject.getDate().toString().padStart(2, '0');
    const month = (dateObject.getMonth() + 1).toString().padStart(2, '0');
    const year = dateObject.getFullYear();

    const hours = dateObject.getHours().toString().padStart(2, '0');
    const minutes = dateObject.getMinutes().toString().padStart(2, '0');

    return `${day}/${month}/${year} - ${hours}:${minutes}`;
  }

  return (
    <main id={styles["issue-main"]}>
      <div id={styles["issue-container"]}>
        <div id={styles["issue-heading"]}>
          <Avatar />
          <div id={styles["issue-details"]}>
            <h1>{issue.title}</h1>
            <span>{issue.claimant.name}</span>
            <div id={styles["datetime-info"]}>
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
        </div>
        <p>{issue.description}</p>
        </div>
      <div id={styles["message-container"]}>
        {issue.Message.map((message) => (
          <div key={message.id} className={styles["message-card"]}>
            <div className={styles["message-heading"]}>
              <Avatar />
              <div className={styles["message-info"]}>
                <span className={styles["message-author"]}>{message.claimant.name}</span>
              </div>
            </div>
            <p className={styles["message-content"]}>{message.message}</p>
          </div>
        ))}
      </div>
    </main>
  )
}
