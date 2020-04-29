
const fs = require('fs');

 fs.readFile('medium.txt', 'utf8', (err, data) => {
     if(err){
         return console.log(err)
     } 
     console.log(data);
 })
