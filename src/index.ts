import dotenv from 'dotenv'

dotenv.config()

import express from 'express'
import * as gitlabHandlers from './gitlab'

import Jira from './jira/Jira'

const test = async () => {
  const results = await Jira.getTransitions('JAS-1')
  console.log(JSON.stringify(results, null, 2))
}

test()


const app = express()
const port = 6000

function validateRequestFromGitlab(req: Request) {
  // @ts-ignore
  if (req.headers['x-gitlab-token'] === process.env.X_GITLAB_TOKEN) {
    throw new Error('invalid request')
  }
  return false
}

app.use(express.json())

app.post('/gitlab', async (req, res) => {
  validateRequestFromGitlab(req as unknown as Request)

  switch(req.body?.event_name) {
    case 'push':
      await gitlabHandlers.pushHandler(req.body);
      break;
    case 'merge_request':
      await gitlabHandlers.mergeHandler(req.body)
      break;
  }

  console.log(req.body)

  res.send('ok')
})

app.post('/jira', (req, res) => {  
  console.log(req)

  res.send('ok')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})