# Process Improvement Demo
This demonstrates using webhooks to tie together processes

## Setup
You can create trial accounts for Gitlab Cloud and Jira Cloud for the easiest way to prove this out rather than hosting it yourself. The hosting requires extensive setup and is not worth doing given the time constraint in my case.

In this case, all that was needed was:

1. Setup and run [ngrok](https://ngrok.com/) to point to this instance and note external ngrok address
1. Setup free trial [Gitlab Cloud](https://gitlab.com/)
1. Setup webooks [how to](https://docs.gitlab.com/ee/user/project/integrations/webhooks.html)using ngrok address and check all boxes
1. Get a Personal Access token for [Gitlab API](https://docs.gitlab.com/ee/api/rest/index.html)
1. Setup free trial [Jira Cloud](https://www.atlassian.com/try/cloud/signup?bundle=jira-software&edition=free&signupSource=skipBundles)
1. Setup token in Jira Cloud for [basic auth API access](https://developer.atlassian.com/cloud/jira/platform/basic-auth-for-rest-apis/) and [reference API](https://developer.atlassian.com/cloud/jira/platform/rest/v3/api-group-issues/#api-group-issues)
1. In the Node.js project, set the env variables using the `.env.example`
1. Run the provided project locally `npm install && npm start`

## Testing
1. 

### Automatically link the gitlab MR to a Jira Ticket
1. Setup an issue on the Jira Board
1. Create a branch in GitLab then make another branch off of that
1. Make an MR against the branch with the title of the MR having #[jira ticket name]: describe the MR
1. Go back to the Jira issue and you should see it automatically link
1. The Jira issue should also be moved to "in progress" from "todo"


## Note
Jira in general has all of its services integrated. BitBucket for example has similar functionality as gitlab but is already integrated as a unit with Jira software.