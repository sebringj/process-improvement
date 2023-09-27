import { Request, Response} from 'express'
import Jira from './Jira'

const jiraCache: {
  [key: string]: any
} = {}

// caches / assigns transition ids to enum mapping
const assignTransitions = async () => {
  jiraCache.transitions = await Jira.getTransitions('JAS-1')
}
assignTransitions()

export default async (req: Request, res: Response) => {  
  console.log(req)

  res.send('ok')
}