const axios = require('axios');
const jwt = require('jsonwebtoken');
const fs = require('fs');

// Configuration
const INTEGRATION_KEY = 'YOUR_INTEGRATION_KEY'; // Your application integration key (client ID)
const USER_ID = 'YOUR_USER_ID'; // Subject's userId to impersonate
const PRIVATE_KEY = fs.readFileSync('path/to/your/private.key'); // Your RSA private key
const AUTH_SERVER = "https://account.docusign.com"; // Production environment
// const AUTH_SERVER = "https://account-d.docusign.com"; // For demo environment use this line
// const AUTH_SERVER = "https://account-d.docusign.com"; // For demo environment use this line

// code for implementation for JWT grant flow.
