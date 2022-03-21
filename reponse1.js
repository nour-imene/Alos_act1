var unirest = require("unirest")
var req1 = unirest("GET" , "http://localhost:3000/posts?_limit=10")
 
req1.headres({

  "cache-control": "no-cache",
  
})

req1.end(function (res1) => {

    console.log("les 10 premiers utilisateurs ( malade & medecin) sont:",res1.body);
    console.log(" \n\n ");
    
  })
  
