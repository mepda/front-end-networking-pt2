function a(){
  console.log("Study");
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve("Studied enough. Sweet!")
    }, 2000);
  })
}

function b(){
  return new Promise(function(resolve, reject){
    // reject("Dang, couldn't find any applicable jobs")
    console.log("Job hunt");

  })
}

function c(){
  console.log("Interview");
}

a().then(function(data){
  console.log(data)
  b()
}).then(c)

//important thing is that promises are thenable
