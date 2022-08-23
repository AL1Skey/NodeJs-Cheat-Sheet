const url = require('url');

const myUrl = new URL('https://mywebsite.com:9000/hello.html?id=100&status=active');

// Serialized URL
console.log(myUrl.href);
console.log(myUrl.toString());

// Host(root domain)
console.log(myUrl.host);
// Host(Without port)
console.log(myUrl.hostname);
// Pathname
console.log(myUrl.pathname);
// Serialized Query
console.log(myUrl.search);
// Param Object
console.log(myUrl.searchParams);
// Add Param
myUrl.searchParams.append('Fine',"Reat");
console.log(myUrl.searchParams);
// Loop through param
myUrl.searchParams.forEach((name,value)=>{
console.log(`${name}:${value}`);}) 