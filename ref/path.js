//PATH ARE BUILT IN NODE MODULE. IT RETURN PATH OF DIR / FILENAME
const path = require('path');

// Base file name
console.log("filename:",path.basename(__filename)," \n");

// Directory name
console.log("dirname:",path.dirname(__dirname)," \n");

// File Extension
console.log("extension:",path.extname(__filename)," \n");

// Create path object 
console.log("path object:",path.parse(__filename));

// Concatenate path
console.log("imaginary path:",path.join(__dirname,'test','what the hex.ccc'));