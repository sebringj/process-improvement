export type JiraWatcher = {
  self: string;
  accountId: string;
  displayName: string;
  active: boolean;
}

export type JiraAuthor = {
  self: string;
  key: string;
  accountId: string;
  accountType: string;
  name: string;
  avatarUrls: {
    "48x48": string;
    "24x24": string;
    "16x16": string;
    "32x32": string;
  };
  displayName: string;
  active: boolean;
}

export type JiraAttachment = {
  id: number;
  self: string;
  filename: string;
  author: JiraAuthor;
  created: string;
  size: number;
  mimeType: string;
  content: string;
  thumbnail: string;
}

export type JiraSubTask = {
  id: string;
  type: {
    id: string;
    name: string;
    inward: string;
    outward: string;
  },
  outwardIssue: {
    id: string;
    key: string;
    self: string;
    fields: {
      status: {
        iconUrl: string;
        name: string;
      }
    }
  }
}

export type JiraTo = {
  self: string;
  description: string;
  iconUrl: string;
  name: string;
  id: string;
  statusCategory: {
    self: string;
    id: number;
    key: string;
    colorName: string;
    name: string;
  }
}

export type JiraTransition = {
  id: string;
  name: string;
  to: JiraTo;
  hasScreen: boolean;
  isGlobal: boolean;
  isInitial: boolean;
  isAvailable: boolean;
  isConditional: boolean;
  isLooped: boolean;
}

/*
export type Issue = {
  id: string;
  self: string;
  key: string;
  fields: {
    watcher: {
      self: string;
      isWatching: boolean;
      watchCount: number;
      watchers: [
        {
          self: string;
          accountId: string;
          displayName: string;
          active: boolean;
        }
      ]
    },
    attachment: Attachment[];
    'sub-tasks': SubTask[];
    description: {
      type: string;
      "version": 1,
      "content": [
        {
          "type": "paragraph",
          "content": [
            {
              "type": "text",
              "text": "Main order flow broken"
            }
          ]
        }
      ]
    },
    "project": {
      "self": "https://your-domain.atlassian.net/rest/api/3/project/EX",
      "id": "10000",
      "key": "EX",
      "name": "Example",
      "avatarUrls": {
        "48x48": "https://your-domain.atlassian.net/secure/projectavatar?size=large&pid=10000",
        "24x24": "https://your-domain.atlassian.net/secure/projectavatar?size=small&pid=10000",
        "16x16": "https://your-domain.atlassian.net/secure/projectavatar?size=xsmall&pid=10000",
        "32x32": "https://your-domain.atlassian.net/secure/projectavatar?size=medium&pid=10000"
      },
      "projectCategory": {
        "self": "https://your-domain.atlassian.net/rest/api/3/projectCategory/10000",
        "id": "10000",
        "name": "FIRST",
        "description": "First Project Category"
      },
      "simplified": false,
      "style": "classic",
      "insight": {
        "totalIssueCount": 100,
        "lastIssueUpdateTime": "2023-09-20T08:53:14.756+0000"
      }
    },
    "comment": [
      {
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/10010/comment/10000",
        "id": "10000",
        "author": {
          "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
          "accountId": "5b10a2844c20165700ede21g",
          "displayName": "Mia Krystof",
          "active": false
        },
        "body": {
          "type": "doc",
          "version": 1,
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Pellentesque eget venenatis elit. Duis eu justo eget augue iaculis fermentum. Sed semper quam laoreet nisi egestas at posuere augue semper."
                }
              ]
            }
          ]
        },
        "updateAuthor": {
          "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
          "accountId": "5b10a2844c20165700ede21g",
          "displayName": "Mia Krystof",
          "active": false
        },
        "created": "2021-01-17T12:34:00.000+0000",
        "updated": "2021-01-18T23:45:00.000+0000",
        "visibility": {
          "type": "role",
          "value": "Administrators",
          "identifier": "Administrators"
        }
      }
    ],
    "issuelinks": [
      {
        "id": "10001",
        "type": {
          "id": "10000",
          "name": "Dependent",
          "inward": "depends on",
          "outward": "is depended by"
        },
        "outwardIssue": {
          "id": "10004L",
          "key": "PR-2",
          "self": "https://your-domain.atlassian.net/rest/api/3/issue/PR-2",
          "fields": {
            "status": {
              "iconUrl": "https://your-domain.atlassian.net/images/icons/statuses/open.png",
              "name": "Open"
            }
          }
        }
      },
      {
        "id": "10002",
        "type": {
          "id": "10000",
          "name": "Dependent",
          "inward": "depends on",
          "outward": "is depended by"
        },
        "inwardIssue": {
          "id": "10004",
          "key": "PR-3",
          "self": "https://your-domain.atlassian.net/rest/api/3/issue/PR-3",
          "fields": {
            "status": {
              "iconUrl": "https://your-domain.atlassian.net/images/icons/statuses/open.png",
              "name": "Open"
            }
          }
        }
      }
    ],
    "worklog": [
      {
        "self": "https://your-domain.atlassian.net/rest/api/3/issue/10010/worklog/10000",
        "author": {
          "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
          "accountId": "5b10a2844c20165700ede21g",
          "displayName": "Mia Krystof",
          "active": false
        },
        "updateAuthor": {
          "self": "https://your-domain.atlassian.net/rest/api/3/user?accountId=5b10a2844c20165700ede21g",
          "accountId": "5b10a2844c20165700ede21g",
          "displayName": "Mia Krystof",
          "active": false
        },
        "comment": {
          "type": "doc",
          "version": 1,
          "content": [
            {
              "type": "paragraph",
              "content": [
                {
                  "type": "text",
                  "text": "I did some work here."
                }
              ]
            }
          ]
        },
        "updated": "2021-01-18T23:45:00.000+0000",
        "visibility": {
          "type": "group",
          "value": "jira-developers",
          "identifier": "276f955c-63d7-42c8-9520-92d01dca0625"
        },
        "started": "2021-01-17T12:34:00.000+0000",
        "timeSpent": "3h 20m",
        "timeSpentSeconds": 12000,
        "id": "100028",
        "issueId": "10002"
      }
    ],
    "updated": 1,
    "timetracking": {
      "originalEstimate": "10m",
      "remainingEstimate": "3m",
      "timeSpent": "6m",
      "originalEstimateSeconds": 600,
      "remainingEstimateSeconds": 200,
      "timeSpentSeconds": 400
    }
  }
}
*/