function ID(selector){
  return document.getElementById(selector);
}

function CL(selector){
  return document.getElementsByClassName(selector);
}

let sliderImage = ID("box").firstChild.nextSibling;
let modalImage = ID("img-12");

let images = ["Dota2.jpg", "Luna.jpg", "Axe.jpg", "ChaosKnight.jpg", "Pudge.jpg", "Mirana.jpg", "WraithKing.jpg", "Juggernaut.jpg"];

let n = 0;

function nextImg() {
    if (n < images.length - 1){
      n = n + 1;
    }
    else {
      n = 0;
    }

    sliderImage.src = images[n];
    ID("name").innerText = images[n].slice(0,-4);
    modalImage.src = images[n];
}

function prevImg(){
  if (n > 0){
    n = n - 1;
  }
  else {
    n = images.length - 1;
  }

  sliderImage.src = images[n];
  ID("name").innerText = images[n].slice(0,-4);
  modalImage.src = images[n];
}

function leftRight(){
  document.onkeydown = function(e){
    if (e.key === "ArrowLeft"){
      prevImg();
    }
    else if (e.key === "ArrowRight"){
      nextImg();
    }
  }
}

function doNothing(){
  document.onkeydown = function(e){
    if (e.key === "ArrowLeft"){
    }
    else if (e.key === "ArrowRight"){
    }
  }
}

ID("img-1").addEventListener("mouseover", function(event){
    if (event.target.id = "img-1"){
      leftRight();
    }
});

ID("img-1").addEventListener("mouseout", function(event){
  if (event.target.id = "img-1"){
    doNothing();
  }
});

ID("img-1").addEventListener("click", function (){
  ID("simpleModal").style.display = "block";
});

ID("closeBtn").addEventListener("click", function (){
  ID("simpleModal").style.display = "none";
});

ID("img-12").addEventListener("mouseover", function(event){
  if (event.target.id = "img-12"){
    leftRight();
  }
});

ID("img-12").addEventListener("mouseout", function(event){
if (event.target.id = "img-12"){
  doNothing();
}
});