fetch('https://upload.wikimedia.org/wikipedia/commons/c/cf/05.2010_l%C3%B6wenzahn_3.jpg')
.then(res=> res.blob())
.then(function(myBlob){
  let objUrl = URL.createObjectURL(myBlob);
  let dandelion = document.querySelector('#dandelion');
  dandelion.src = objUrl;
})

fetch('https://upload.wikimedia.org/wikipedia/commons/6/6d/Moondust-carnation.JPG')
.then(res=>res.blob())
.then(function(myBlob){
  let objUrl = URL.createObjectURL(myBlob);
  let carnation = document.createElement('img');
  carnation.setAttribute("id", "carantion");
  let flowers = document.querySelector('.flowers');
  carnation.src = objUrl;
  flowers.appendChild(carnation);
})

fetch("https://upload.wikimedia.org/wikipedia/commons/a/ab/Cypripedium_reginae_Orchi_004.jpg")
.then(function(res){
  console.log(res)
  return Promise.resolve(res)
})
.then(res=>res.blob())
.then(function(myBlob){
  let objUrl = URL.createObjectURL(myBlob);
  let ladySlipper = document.createElement('img');
  ladySlipper.setAttribute("id", "lady-slipper");
  ladySlipper.setAttribute("alt", "a flower native to New England")
  let flowers = document.querySelector('.flowers');
  ladySlipper.src = objUrl;
  flowers.appendChild(ladySlipper);
})
// Why can't we do this below? Because of CORS settings on the server
// fetch("https://en.wikipedia.org/wiki/Cypripedium_reginae")
// .then(res => res.text())
// .then(function(res){console.log(res)})

fetch("./flower-descriptions.json")
.then(res => res.json())
.then(function(data){
  console.log(data.carnation[0].description)
})

/*
  TODO: Find two more flowers and add their descriptions to the json file
  TODO: Add one of flowers picture to the site by fetching it and then
        adding its URL to a picture element
  TODO: Add the other flower through creating an img element in Javascript 
*/
