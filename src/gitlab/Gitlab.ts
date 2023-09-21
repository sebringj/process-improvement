export default class {
  
  public static fetchIt(verb: 'GET' | 'POST' | 'PUT' | 'PATCH' |'DELETE', path: string, body?: object) {
    return fetch(`${process.env.JIRA_API_ENDPOINT}${path}`, {
      method: verb,
      headers: {
        'Authorization': `Bearer ${process.env.GITLAB_ACCESS_TOKEN}`,
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: body && JSON.stringify(body)
    })
  }
}