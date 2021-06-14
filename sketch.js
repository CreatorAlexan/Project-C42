var spaceImg,issImg,sCImg1,sCImg2,sCImg3,sCIMg4;
var iss, spaceCraft, hasDocked = false;


function preload(){
  spaceImg = loadImage("images/spacebg.jpg");
  issImg = loadImage("images/iss.png");
  sCImg1 = loadImage("images/spacecraft1.png");
  sCImg2 = loadImage("images/spacecraft2.png");
  sCImg3 = loadImage("images/spacecraft3.png");
  sCImg4 = loadImage("images/spacecraft4.png");

}

function setup() {
  createCanvas(800,400);
  iss = createSprite(400, 130, 50, 50);
  iss.addImage(issImg);
  iss.scale = 0.6;
  

  spaceCraft = createSprite(400,320,50,50);
  spaceCraft.addImage(sCImg1);
  spaceCraft.scale = 0.1;

  spaceCraft.x = Math.round(random(30,170))
}

function draw() {
  background(spaceImg);

  iss.depth = spaceCraft.depth + 1

 if(!hasDocked){
   
  
   if(keyDown("left")){
     spaceCraft.addImage(sCImg3)
     spaceCraft.x = spaceCraft.x -4
   }
   else if(keyDown("right")){
     spaceCraft.addImage(sCImg4)
     spaceCraft.x = spaceCraft.x +4
   }
   else if(keyDown("down")){
     spaceCraft.addImage(sCImg2)
   }
   else{
     spaceCraft.addImage(sCImg1)
   }
   if(keyDown("up")&&spaceCraft.y > 172){
     spaceCraft.y = spaceCraft.y - 4
     console.log(spaceCraft.y)
   }
 }

 if(spaceCraft.x >= 354 && spaceCraft.x <=361&&spaceCraft.y >= 169 && spaceCraft.y <= 172){
   console.log("dock test")
   hasDocked = true;
   textSize(25)
   fill("white")
   text("Docking Successful!",240,320)
 }

  drawSprites();
}