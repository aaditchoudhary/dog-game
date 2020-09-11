//Create variables here
var dog;
var happydog;
var database
var foodS
var foodStock

function preload(){
  //load images here
  //dog.loadimage("sprites/Dog.png");
  // happydog.loadimage('sprites/happydog.png');
}

function setup() {
	createCanvas(500,500);
  dog = createSprite(250,250,10,10);

}


function draw() {  
  background=(46, 139, 87);
  foodStock=database.ref("food ");
  foodStock.on("value",readStock);
  
  if(keyWentDown(Up_Arrow)){
    writeStock(foodS);
    dog.addImage(happydog);
 }
  drawSprites();
  //add styles here
   function readStock(data){
     foodS=data.val();
   }
   function writeStock( x ){
     if(x.x=0){

     }
   database.ref('/').update({
     Food:x

   })
   
   }
}


