var unirest = require("unirest")

var req1 = unirest("GET" , "http://localhost:3000/posts/")
var req2 = unirest("GET" , "http://localhost:3000/posts?_limit=10")
 
req1.headres({

  "cache-control": "no-cache",
  
})
req2.headres({

  "cache-control": "no-cache",
  
})

//reponse 1
req2.end(function (res1) => {

    console.log("les 10 premiers utilisateurs ( malade & medecin) sont:",res1.body);
    console.log(" \n\n ");
    
  })
  
//reponse 2
req2.end(function (res2) {

  console.log(" les utilisateurs qui commencent leurs nom avec M sont ",res2.body.filter((posts) => name.sex.startsWith("m")))
  
})

*/
reponse 3
Cache-Control: no-cacheest généralement utilisé dans un en-tête de requête pour forcer la validation de la ressource dans les proxys intermédiaires.
Si le client n'envoie pas cette requête au serveur, les proxys intermédiaires renverront une copie du contenu s'il est frais .
ordonne à ces mandataires de revalider la copie même si elle est récente.
*/
