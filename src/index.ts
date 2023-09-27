import dotenv from 'dotenv'
dotenv.config()

import express from 'express'
import gitLabWebhooks from './gitlab/webhooks'
import jiraWebhooks from './jira/webhooks'

const app = express()
const port = 6000

app.use(express.json())

app.post('/gitlab', gitLabWebhooks)
app.post('/jira', jiraWebhooks)
// todo: app.post('/teams', teamsWebhooks)
// todo: app.post('/slack', slackWebhooks)
// etc

app.listen(port, () => {
  console.log(`Process Improvement app listening on port ${port}`)
})
