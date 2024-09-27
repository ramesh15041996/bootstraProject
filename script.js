var hole = document.getElementById("hole");
var game = document.getElementById("game");


//hole to be placed on random places on the wall everytime
hole.addEventListener("animationiteration", RanHole)
//access result element
var result = document.getElementById("result");
var text =  document.getElementById("text");
var score=0;
var jumping = 0;

function RanHole(){
    var random = -((Math.random()*350)+150)
    hole.style.top = random+"px";
}

var fall = setInterval(function(){
    //access bird top value
    var birdTop = parseInt(window.getComputedStyle(bird).getPropertyValue("top"));
    if(jumping == 0){
        //bird top value is 100px and 2px will be added to bird top 
        //after every 10ms
        bird.style.top = (birdTop+2)+"px";
    }
    var blockLeft = parseInt(window.getComputedStyle(block).getPropertyValue("left"));
    var holeTop =parseInt(window.getComputedStyle(hole).getPropertyValue("top"));
    var hTop = (500+holeTop);
    //if birdTop > 450 means bird touching the ground
    //if blockleft < 50 and > -50 means bird is colliding with block
    //if birdTop < hTop bird touching the holeTop
    //birdTop >hTop + 100  bird is colliding with upper part of block
    if((birdTop > 450) || (blockLeft<50) && (birdTop < hTop) ||(birdTop >hTop + 100)){
        result.style.display = "block";
        text.innerText = `your final score is : ${score}`;
        game.style.display = "none";
        score=0;
    }
},10)