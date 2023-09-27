import Jira from '../jira/Jira'

export default async (ev: {
  commits: {
    id: string;
    message: string;
    title: string;
  }[]
}) => {
  const issues = Jira.extractJiraIssues(ev.commits[0].message + ' ' + ev.commits[0].title)
  const issueDetails = await Promise.all(issues.map(issue => Jira.getIssue(issue)))
  
}