import { useLoaderData, useParams } from "react-router-dom";
import { IssueResponse } from "../Issues/components/IssueCard";

export default function Issue() {
  let { issueId } = useParams();
  const issue = useLoaderData() as IssueResponse;
  return (
    <main>
      <h2>{issueId}</h2>
    </main>
  )
}
