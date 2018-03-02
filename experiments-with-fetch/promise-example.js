let study = function(){
  return new Promise(function(resolve, reject){
    console.log("studying...");
    resolve("studied a lot");
  })
}

let jobHunt = function(message){
  return new Promise(function(resolve, reject){
    console.log("looking through classifieds...");
    resolve("found something interesting");
  })
}

let interview = function(message){
  return new Promise(function(resolve, reject){
    console.log("interviewing with potential employer...");
    resolve("got hired");
  })
}

study().then(function(result){
  jobHunt(result);
}).then(function(result){
  interview(result);
})
