# nexm-test-01
The program is built using pure javascript.

## Env
If you use the built binary file (index file), you need to prepare data folders:
- folder data
(organizations.json, tickets.json, users.json)
- folder config
+ default.toml
- file README.md (I have provided this file in the project.)
Recommend:
- node version: >14
- npm version: >6

## Setup
npm install
node index.js

Some examples of running the project:
1. To view fields in the table, please enter keyword: describe + table. The program will return the fields in the table.
Example 1:
input: describe organizations
output:
_id
url
external_id
name
domain_names
created_at
details
shared_tickets
tags

Example 2:
input: describe tickets
output:
_id
url
external_id
created_at
type
subject
description
priority
status
submitter_id
assignee_id
organization_id
tags
has_incidents
due_at
via

2. To return any users with tag name Woodlands in the users table
Example 1:
input: table users tags=Woodlands
output: 
│─────────│──────────────│───────────│────────│───────────│─────────────────────────│──────────────│───────────────────────│──────────────────────│───────│──────────────│───────────────────│────────────────────────│
│ ID (1)  │     NAME     │   ALIAS   │ ACTIVE │ TIME ZONE │          EMAIL          │    PHONE     │       SIGNATURE       │         TAGS         │ ROLE  │ ORGANIZATION │ SUBMITTED TICKETS │    ASSIGNED TICKETS    │
│─────────│──────────────│───────────│────────│───────────│─────────────────────────│──────────────│───────────────────────│──────────────────────│───────│──────────────│───────────────────│────────────────────────│
│ 2        │ Cross Barlow  │ Miss Joni  │ Yes    │ Armenia   │ jonibarlow@flotonic.com  │ 9575-552-585  │ Don't Worry Be Happy!│ Foxworth, Woodlands, Herlong, Henrietta│ admin  │ Qualitern     │                    │                         │
│─────────│──────────────│───────────│────────│───────────│─────────────────────────│──────────────│───────────────────────│──────────────────────│───────│──────────────│───────────────────│────────────────────────│

Example 2:
input: table tickets status=pending
output:
│─────────│──────────────│───────────│────────│───────────│─────────────────────────│──────────────│───────────────────────│──────────────────────│───────│──────────────│───────────────────│────────────────────────│
│ ID (1)  │     NAME     │   ALIAS   │ ACTIVE │ TIME ZONE │          EMAIL          │    PHONE     │       SIGNATURE       │         TAGS         │ ROLE  │ ORGANIZATION │ SUBMITTED TICKETS │    ASSIGNED TICKETS    │
│─────────│──────────────│───────────│────────│───────────│─────────────────────────│──────────────│───────────────────────│──────────────────────│───────│──────────────│───────────────────│────────────────────────│
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Zentry        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Noralex       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Netur         │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Andershun     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Plasmos       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Multron       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │               │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Limozen       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Zentry        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Bitrex        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Koffee        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Speedbolt     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Qualitern     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Kindaloo      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Zentry        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Nutralab      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Terrasys      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Noralex       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Qualitern     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Quilk         │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Bitrex        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Limozen       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Möreganic     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Koffee        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Terrasys      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Nutralab      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Geekfarm      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Terrasys      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Xylar         │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Bitrex        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Koffee        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Kindaloo      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Limozen       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Möreganic     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Isotronic     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Andershun     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Bitrex        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Zentry        │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Limozen       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Geekfarm      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Nutralab      │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Enthaze       │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Möreganic     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Qualitern     │                    │                         │
│ 436bf9b0-1147-4c0a-8439-6f79833bff5b│               │            │ No     │           │                          │               │                      │ Ohio, Pennsylvania, American Samoa, Northern Mariana Islands│        │ Strezzö       │                    │                         │
│─────────│──────────────│───────────│────────│───────────│─────────────────────────│──────────────│───────────────────────│──────────────────────│───────│──────────────│───────────────────│────────────────────────│
3. To return any users with tag name Foxworth in the users table
Example 1:
input: search users tags=Foxworth
output:
{
  "number_of_result": 1,
  "search_result": [
    {
      "0": {
        "_id": 2,
        "url": "http://initech.tokoin.io.com/api/v2/users/2.json",
        "external_id": "c9995ea4-ff72-46e0-ab77-dfe0ae1ef6c2",
        "name": "Cross Barlow",
        "alias": "Miss Joni",
        "created_at": "2016-06-23T10:31:39 -10:00",
        "active": true,
        "verified": true,
        "shared": false,
        "locale": "zh-CN",
        "timezone": "Armenia",
        "last_login_at": "2012-04-12T04:03:28 -10:00",
        "email": "jonibarlow@flotonic.com",
        "phone": "9575-552-585",
        "signature": "Don't Worry Be Happy!",
        "organization_id": 106,
        "tags": [
          "Foxworth",
          "Woodlands",
          "Herlong",
          "Henrietta"
        ],
        "suspended": false,
        "role": "admin"
      },
      "organization_name": "Qualitern",
      "submitted_tickets": [],
      "assigned_tickets": [
        "A Catastrophe in Bermuda",
        "A Problem in Svalbard and Jan Mayen Islands"
      ]
    }
  ]
}

Example 2:
input: search users alias=Miss Coffey
output:
{
  "number_of_result": 1,
  "search_result": [
    {
      "0": {
        "_id": 1,
        "url": "http://initech.tokoin.io.com/api/v2/users/1.json",
        "external_id": "74341f74-9c79-49d5-9611-87ef9b6eb75f",
        "name": "Francisca Rasmussen",
        "alias": "Miss Coffey",
        "created_at": "2016-04-15T05:19:46 -10:00",
        "active": true,
        "verified": true,
        "shared": false,
        "locale": "en-AU",
        "timezone": "Sri Lanka",
        "last_login_at": "2013-08-04T01:03:27 -10:00",
        "email": "coffeyrasmussen@flotonic.com",
        "phone": "8335-422-718",
        "signature": "Don't Worry Be Happy!",
        "organization_id": 119,
        "tags": [
          "Springville",
          "Sutton",
          "Hartsville/Hartley",
          "Diaperville"
        ],
        "suspended": true,
        "role": "admin"
      },
      "organization_name": "Multron",
      "submitted_tickets": [
        "A Nuisance in Kiribati",
        "A Nuisance in Saint Lucia"
      ],
      "assigned_tickets": [
        "A Problem in Russian Federation",
        "A Problem in Malawi"
      ]
    }
  ]
}