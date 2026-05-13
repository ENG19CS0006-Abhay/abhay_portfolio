const fs = require('fs');
const path = require('path');

// Get the access key from environment variable
const accessKey = process.env.WEB3_ACCESS_KEY;

if (!accessKey) {
    console.error('Error: WEB3_ACCESS_KEY environment variable is not set');
    process.exit(1);
}

// Create config.js with the environment variable
const configContent = `// Auto-generated config file - DO NOT EDIT
const CONFIG = {
    web3formsAccessKey: '${accessKey}'
};
`;

// Write the file
fs.writeFileSync(path.join(__dirname, 'config.js'), configContent);
console.log('✓ config.js generated successfully from environment variable');
