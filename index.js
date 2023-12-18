
const fs = require('fs');
const readline = require('readline');
const ORGANIZATIONS = require('./data/organizations.json');
const TICKETS = require('./data/tickets.json');
const USERS = require('./data/users.json');

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

// Display fields in table
function describeEntity(params) {
  const { entityType } = params
  const entity = entityType === 'organizations' ? ORGANIZATIONS[0] : entityType === 'users' ? USERS[0] : TICKETS[0]
  console.log(Object.keys(entity).join('\n'));
}

// Function to search organizations
function searchOrganizations(results) {
  // Enhance the search results with tickets and users information
  const enhancedResults = results.map(org => {
    const matchingTickets = TICKETS.filter(ticket => ticket.organization_id === org._id).map(ticket => ticket.subject);
    const matchingUsers = USERS.filter(user => user.organization_id === org._id).map(user => user.name);

    return {
      ...org,
      tickets: matchingTickets,
      users: matchingUsers,
    };
  });

  return enhancedResults;
}

// Helper functions to get related data
function getUserName(userId) {
  const user = USERS.find(user => user._id === userId);
  return user ? user.name : null;
}
function getSubmittedTickets(userId) {
  return TICKETS.filter(ticket => ticket.submitter_id === userId).map(ticket => ticket.subject);
}

function getAssignedTickets(userId) {
  return TICKETS.filter(ticket => ticket.assignee_id === userId).map(ticket => ticket.subject);
}

function getOrganizationName(orgId) {
  const organization = ORGANIZATIONS.find(org => org._id === orgId);
  return organization ? organization.name : null;
}

// Function to search users
function searchUsers(results) {
  // Enhance the search results with tickets and organizations information
  const enhancedResults = results.map(result => {
    const resultObject = { ...results }
    resultObject.organization_name = getOrganizationName(result.organization_id);
    resultObject.submitted_tickets = getSubmittedTickets(result._id);
    resultObject.assigned_tickets = getAssignedTickets(result._id);
    return resultObject;
  })
  return enhancedResults;
}

// Function to search tickets
function searchTickets(results) {
  // Enhance the search results with organizations and users information
  const enhancedResults = results.map(result => {
    const resultObject = { ...results }
    resultObject.assignee_name = getUserName(result.assignee_id);
    resultObject.submitter_name = getUserName(result.submitter_id);
    resultObject.organization_name = getOrganizationName(result.organization_id);
    return resultObject;
  })
  return enhancedResults;
}

// Get related other table by id
function getEnhancedResults(entityType, results) {
  let enhancedResults;
  switch (entityType) {
    case 'users':
      enhancedResults = searchUsers(results);
      break;
    case 'tickets':
      enhancedResults = searchTickets(results);
      break;
    default:
      enhancedResults = searchOrganizations(results);
      break;
  }
  return enhancedResults
}

// Search entity valid
function searchEntity(entityType, entity, field, value, format) {
  const results = entity.filter(item => {
    if (Array.isArray(item[field])) {
      return item[field].includes(value);
    } else {
      return item[field] === value;
    }
  });

  if (format === 'table') return results

  // Enhance the search results with tickets and users information
  const enhancedResults = getEnhancedResults(entityType, results);
  return enhancedResults;
}

// Search and display entity
function searchAndDisplay(params) {
  const {
    entityType,
    field,
    value,
    format
  } = params
  const entity = entityType === 'organizations' ? ORGANIZATIONS : entityType === 'users' ? USERS : TICKETS;
  const results = searchEntity(entityType, entity, field, value, format);
  console.log(JSON.stringify({
    number_of_result: results.length,
    search_result: results,
  }, null, 2));
}

// Display table
function displayTable(params) {
  const {
    entityType,
    field,
    value,
    format
  } = params
  const entity = entityType === 'organizations' ? ORGANIZATIONS : entityType === 'users' ? USERS : TICKETS;
  const results = searchEntity(entityType, entity, field, value, format);
  // Function to pad strings for consistent column width
  function padString(str, width) {
    str = str || ''; // Set str to an empty string if it's undefined
    const padLength = width - str.length;
    return str + ' '.repeat(padLength > 0 ? padLength : 0);
  }
  // Function to print a line in the table
  function printLine() {
    console.log('│─────────│──────────────│───────────│────────│───────────│─────────────────────────│──────────────│───────────────────────│──────────────────────│───────│──────────────│───────────────────│────────────────────────│');
  }

  // Function to print a row in the table
  function printRow(user) {
    const tags = Array.isArray(user['0'].tags) ? user['0'].tags.join(', ') : '';
    const submittedTickets = Array.isArray(user.submitted_tickets) ? user.submitted_tickets.join(', ') : '';
    const assignedTickets = Array.isArray(user['0'].assigned_tickets) ? user['0'].assigned_tickets.join(', ') : '';

    const organizationTags = user.organization_name && user.organization_name.tags
      ? Array.isArray(user.organization_name.tags)
        ? user.organization_name.tags.join(', ')
        : ''
      : '';

    console.log(`│ ${padString(user['0']._id.toString(), 9)}│ ${padString(user['0'].name, 14)}│ ${padString(user['0'].alias, 11)}│ ${padString(user['0'].active ? 'Yes' : 'No', 7)}│ ${padString(user['0'].timezone, 10)}│ ${padString(user['0'].email, 25)}│ ${padString(user['0'].phone, 14)}│ ${padString(user['0'].signature, 21)}│ ${padString(tags, 21)}│ ${padString(user['0'].role, 7)}│ ${padString(user.organization_name, 14)}│ ${padString(submittedTickets, 19)}│ ${padString(assignedTickets, 24)}│ ${padString(organizationTags, 21)}│`);
  }

  // Print table header
  printLine();
  console.log('│ ID (1)  │     NAME     │   ALIAS   │ ACTIVE │ TIME ZONE │          EMAIL          │    PHONE     │       SIGNATURE       │         TAGS         │ ROLE  │ ORGANIZATION │ SUBMITTED TICKETS │    ASSIGNED TICKETS    │');
  printLine();
  // Print user data
  results.forEach(printRow);
  // Print table footer
  printLine();
}

// Run command
rl.question('Enter your command: ', (command) => {
  console.log("command", command)
  if (command === 'help') {
    // Read the content of the readme.md file
    fs.readFile('readme.md', 'utf8', (err, data) => {
      if (err) {
        console.error('Error reading the file:', err);
      }
      // Log the content to the console
      console.log('Content of readme.md:');
      console.log(data);
      return;
    });
  }

  const [action, entityType, ...conditionParts] = command.split(' ');
  const condition = conditionParts.join(' ');
  const [field, value] = condition.split('=').map(part => part.trim());

  switch (action) {
    case 'describe':
      describeEntity({ entityType });
      break;
    case 'table':
      displayTable({ entityType, field, value, action });
      break;
    case 'search':
      searchAndDisplay({ entityType, field, value, action });
      break;
    default:
      console.log('Invalid command. Please refer to how to run the program using the "help" command.');
  }
  rl.close();
});