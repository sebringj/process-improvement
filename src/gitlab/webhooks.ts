import mergeHandler from "./mergeHandler";
import pushHandler from "./pushHandler";
import { Request, Response} from 'express'

export default async (req: Request, res: Response) => {
  validateRequestFromGitlab(req as unknown as Request)

  switch(req.body.event_name) {
    case 'push':
      await pushHandler(req.body);
      break
    case 'merge_request':
      await mergeHandler(req.body)
      break;
  }

  console.log(req.body)

  res.send('ok')
}

function validateRequestFromGitlab(req: Request) {
  // @ts-ignore
  if (req.headers['x-gitlab-token'] === process.env.X_GITLAB_TOKEN) {
    throw new Error('invalid request')
  }
  return false
}