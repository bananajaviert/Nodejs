import URL from 'url';
import { dirname } from 'path';

const __filename = URL.fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

import path from 'path'

// Base file name

console.log(path.basename(__filename));


// Directory name
console.log(path.dirname(__filename));

// File extension
console.log(path.extname(__filename));

// Create path object
console.log(path.parse(__filename).base);

//Concatenate paths
console.log(path.join(__dirname, 'test', 'hello.html'));