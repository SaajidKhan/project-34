//Create variables here
var dog,happydog;
var database;
var dogImg,happydogImg;

function preload()
{   dogImg=loadImage('images/doglmg.png');
    happydogImg=loadImage('images/doglmg1.png');
  //load images here
  
}

function setup() {
  database=firebase.database();
  console.log(database);

  createCanvas(500, 500);
  
  dog=createSprite(250,500,10,10);
  image(dogImg,250,500,50,50);

  happydog=createSprite(100,500,10,10);
  image(happydogImg,100,500,50,50);

  
}


function draw() {  

  drawSprites();
  //add styles here

}



