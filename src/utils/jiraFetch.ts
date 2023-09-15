export default (verb: 'GET' | 'POST' | 'PUT' | 'PATCH' |'DELETE', path: string, body: object) => {
  return fetch(`${process.env.JIRA_API_ENDPOINT}${path}`, {
    method: verb,
    headers: {
      'Authorization': `Basic ${Buffer.from(
        `${process.env.JIRA_USERNAME}:${process.env.JIRA_TOKEN}`
      ).toString('base64')}`,
      'Accept': 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify(body)
  })
}