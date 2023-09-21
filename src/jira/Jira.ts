import { JiraTransition } from "../types"

export enum TRANSITIONS {
  ToDo = 'Todo',
  DevPending = 'Dev Pending',
  InReview = 'In Review',
  QAPending = 'QA Pending'
}

export default class Jira {
  public static async fetchIt<T>(verb: 'GET' | 'POST' | 'PUT' | 'PATCH' |'DELETE', path: string, body?: object) {
    console.log({
      verb,
      path: `${process.env.JIRA_API_ENDPOINT}${path}`,
      body,
      token: `${process.env.JIRA_USERNAME}:${process.env.JIRA_TOKEN}`
    })
    const response = await fetch(`${process.env.JIRA_API_ENDPOINT}${path}`, {
      method: verb,
      headers: {
        'Authorization': `Basic ${Buffer.from(
          `${process.env.JIRA_USERNAME}:${process.env.JIRA_REST_API_TOKEN}`
        ).toString('base64')}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(body)
    })
    return response.json() as Promise<T>
  }

  public static getIssue(issueId: string) {
    return this.fetchIt<{

    }>('GET', `/3/issue/${issueId}`)
  }

  public static getTransitions(issueId: string) {
    return this.fetchIt<{
      expand: 'transitions',
      transitions: JiraTransition[]
    }>('GET', `/3/issue/${issueId}/transitions`)
  }

  public static transitionIssue(issueId: string, transitionId: string) {
    return this.fetchIt('POST', `/3/issue/${issueId}/transitions`, {
      transition: {
        id: transitionId
      }
    })
  }

  public static extractJiraIssues(text: string): string[] {
    const regex = new RegExp(`\\bjira-issue:([a-z0-9_-]+)\\b`, 'gi');
    let match;
    const matches = [];
    while ((match = regex.exec(text)) !== null) {
      matches.push(match[1]);
    }
    return matches
  }
}