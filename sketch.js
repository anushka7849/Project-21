var canvas;
var music;
var floor3,floor1,floor2,floor4
var line1,line2,line3,line4;
var edges;
function preload(){
    music = loadSound("music.mp3");
}


function setup(){
    canvas = createCanvas(800,600);

    //create 4 different surfaces

floor1=createSprite(70,500,150,10);
floor1.shapeColor="red";
floor2=createSprite(270,500,150,10);
floor2.shapeColor="purple";
floor3=createSprite(470,500,150,10);
floor3.shapeColor="lightblue";
floor4=createSprite(670,500,150,10);
floor4.shapeColor="lightgreen";
    //create box sprite and give velocity
box=createSprite(random(20,750),290,20,20);
box.shapeColor="white";


    box.velocityY=5;
    box.velocityX=-5;

}

function draw() {
    background(rgb(0,0,0));
    
    //create edgeSprite
    edges=createEdgeSprites();
   box.bounceOff(edges);
   

    //add condition to check if box touching surface and make it box
    if(box.isTouching(floor1)&&box.bounceOff(floor1)){
        box.shapeColor="red";
        music.play();
       
    }
    
    if(box.isTouching(floor2)){
       box.shapeColor="purple" ;
       box.velocityY=0;
    box.velocityX=0;
    music.stop();
    }
    if(box.isTouching(floor3)&&box.bounceOff(floor3)){
       box.shapeColor="lightblue" ;
    }  
    if(box.isTouching(floor4)&& box.bounceOff(floor4)){
       box.shapeColor="lightgreen";
    }
    drawSprites();
}
