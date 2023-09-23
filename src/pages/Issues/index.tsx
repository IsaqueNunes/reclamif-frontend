import { Suspense, useRef } from 'react';
import { Await, useLoaderData } from 'react-router-dom';

import { IssueCard, IssueResponse } from './components/IssueCard';

import styles from './issues.module.css'
import { Button } from '../../components/Button';

type LoaderData = {
  issues: IssueResponse[];
};

export default function Issues() {
  const data: IssueResponse[] = [
    {
      "id": 15,
      "title": "Ventiladores barulhentos",
      "description": "Os ventiladores da sala A104 estão fazendo muito barulho, principalmente quando estão em maior potência.",
      "createdAt": "2023-09-22T17:32:20.016Z",
      "editedAt": '',
    },
    {
      "id": 16,
      "title": "Computadores não funcionando",
      "description": "Os computadores com o código de barras XXXXX, YYYYY e ZZZZZZ não estão funcionando corretamente. Eles estão apresentando carregamento infinito do sistema operacional.",
      "createdAt": "2023-09-22T17:34:08.826Z",
      "editedAt": '',
    },
    {
      "id": 17,
      "title": "Porta não fecha",
      "description": "A porta da sala B109 não está fechando",
      "createdAt": "2023-09-22T17:49:47.624Z",
      "editedAt": '',
    }
  ]
  const { issues } = useLoaderData() as LoaderData;

  const searchInputRef = useRef<HTMLInputElement>(null);

  return (
    <main id={styles["main-issues"]}>
      <div className="search">
        <input id="search-input" type='search' placeholder="Search..." ref={searchInputRef} />
        <Button id='search-button' variation='solid'>Search</Button>
      </div>
      <ul id={styles["issue-list"]}>
        {/* <Suspense fallback={
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
        </Suspense> */}
        {
          data.map((issue: IssueResponse) =>
            (<IssueCard key={issue.id} issue={issue} />)
          )
        }
      </ul>
    </main>
  );
}
