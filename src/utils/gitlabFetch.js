"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (verb, path, body) => {
    return fetch(`${process.env.JIRA_API_ENDPOINT}${path}`, {
        method: verb,
        headers: {
            'Authorization': `Bearer ${process.env.GITLAB_ACCESS_TOKEN}`,
            'Accept': 'application/json',
            'Content-Type': 'application/json'
        },
        body: body && JSON.stringify(body)
    });
};
