import { LoaderFunctionArgs } from "react-router-dom";
import { IssueResponse } from "../pages/Issues/components/IssueCard";

export async function todoLoader({
  params,
}: LoaderFunctionArgs): Promise<IssueResponse> {
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
  // let issue = getIssues(); Request here
  let issue = data.find((issue) => issue.id === Number(params.issueId));

  if (!params.issueId) {
    throw new Error("Expected params.id");
  }
  if (!issue) {
    throw new Error(`Uh oh, I couldn't find a todo with id "${params.issueId}"`);
  }
  return issue;
}
