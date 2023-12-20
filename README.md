# nexm-test-01
The program is built using pure javascript.

## Requirements
If you use the built binary file (index file), you need to prepare data folders:
- folder data (organizations.json, tickets.json, users.json)
- folder config (default.toml)
- file README.md (I have provided this file in the project.)

## Environment
Recommend:
- node version: >14
- npm version: >6

## Setup
- npm install
## Run
- node index.js

Some examples of running the project:
1. To view fields in the table, please enter keyword: describe + table. The program will return the fields in the table.
- Example 1:
input: describe organizations
- Example 2:
input: describe tickets 

2. To return any users with tag name Woodlands in the users table
- Example 1:
input: table users tags=Woodlands
- Example 2:
input: table tickets status=pending

3. To return any users with tag name Foxworth in the users table
- Example 1:
input: search users tags=Foxworth

- Example 2:
input: search users alias=Miss Coffey