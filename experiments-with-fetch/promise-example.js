function a(){
  console.log("Study");
  return new Promise(function(resolve, reject){
    setTimeout(function(){
      resolve()
    }, 2000);
  })
}

function b(){
  console.log("Job hunt");
}

function c(){
  console.log("Interview");
}

a().then(b).then(c)

//important thing is that promises are thenable
