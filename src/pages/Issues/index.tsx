import { Suspense, useRef } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { IssueCard, IssueResponse } from './components/IssueCard';

import styles from './issues.module.css'
import { Button } from '../../components/Button';

type LoaderData = {
  issues: IssueResponse[];
};

export default function Issues() {
  const { issues } = useLoaderData() as LoaderData;

  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <main id={styles["main-issues"]}>
      <div className="search">
        <input id="search-input" type='search' placeholder="Search..." ref={searchInputRef} />
        <Button id='search-button' variation='solid'>Search</Button>
      </div>
      <ul id={styles["issue-list"]}>
        <Suspense fallback={
          <span>Loading</span>
        }>
          <Await
            resolve={issues}
            errorElement={<span>Something went wrong</span>}
          >
            {(resolvedIssues: IssueResponse[]) => {
              return resolvedIssues.map((issue: IssueResponse) => {
                return (
                  <IssueCard key={issue.id} issue={issue} />
                );
              });
            }}
          </Await>
        </Suspense>
      </ul>
    </main>
  );
}
