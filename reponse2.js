var unirest = require("unirest")

var req2 = unirest("GET" , "http://localhost:3000/posts/")
 

req2.headres({

  "cache-control": "no-cache",
  
})


req2.end(function (res2) {

  console.log(" les utilisateurs qui commencent leurs nom avec M sont ",res2.body.filter((posts) => name.sex.startsWith("m")))
  
})

