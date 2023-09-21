import Jira, { TRANSITIONS } from '../jira/Jira'

export default async (ev: {
  action: 'open' | 'close' | 'reopen' | 'update' |
  'approved' | 'unapproved' | 'approval' | 'unapproval' |
  'merge',
  last_commit: {
    title: string;
    message: string;
    author: {
      name: string;
      email: string;
    }
  }
}) => {
  switch (ev.action) {
    case 'reopen':
    case 'open': { // dev completed, in review
      const tickets = Jira.extractJiraIssues(ev.last_commit.title + ' ' + ev.last_commit.message)
      await Promise.all(
        tickets.map(jiraIssue => Jira.transitionIssue(jiraIssue, (TRANSITIONS.InReview)))
      )
      break;
    }
    case 'close':
      break;
    case 'merge': { // should run pipeline
      const tickets = Jira.extractJiraIssues(ev.last_commit.title + ' ' + ev.last_commit.message)
      await Promise.all(
        tickets.map(jiraIssue => Jira.transitionIssue(jiraIssue, (TRANSITIONS.QAPending)))
      )
      break;
    } case 'approved': break;
    case 'unapproval': break;
    case 'update': break;
  }
}