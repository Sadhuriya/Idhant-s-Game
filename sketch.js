var sidhant, ground;
var police1, police2, police3, police4, police5, police6, leader;
var prisoner1, prisoner2, prisoner3, prisoner4, prisoner5, prisoner6, prisoner7, prisoner8, prisoner9, prisoner10;
var prisoner11, prisoner12;
var wall1, wall2, wall3;
var wall4, wall5, wall6;
var wall7, wall8, wall9;
var wall10, wall11, wall12;
var wall13, wall14, wall15;
var wall16, wall17, wall18, wall19, secret;

function preload(){
 policeImage = loadImage("images/police.png");
 prisonerImage = loadImage("images/RandomPrisoner.png")
 sidhantImage = loadImage("images/Me.png");
 leaderImage = loadImage("images/Leader.png");
 CleanBedImage = loadImage("images/Cleanbed.png");
 NormalBedImage = loadImage("images/NormalBed.png");
 DirtyBedImage = loadImage("images/DirtyBed.png");
 ground = loadImage("images/Floor2.png");
}

function setup(){
createCanvas(1800, 700);
police1 = createSprite(1000, 500, 10, 10)
police1.addImage(policeImage)
police1.scale = 0.1
police2 = createSprite(800, 500, 10, 10)
police2.addImage(policeImage)
police2.scale = 0.1
police3 = createSprite(750, 500, 10, 10)
police3.addImage(policeImage)
police3.scale = 0.1
police4 = createSprite(850, 500, 10, 10)
police4.addImage(policeImage)
police4.scale = 0.1
police5 = createSprite(700, 500, 10, 10)
police5.addImage(policeImage)
police5.scale = 0.1
police6 = createSprite(900, 500, 10, 10)
police6.addImage(policeImage)
police6.scale = 0.1
leader = createSprite(700, 350, 10, 10)
leader.addImage(leaderImage)
leader.scale = 0.5

prisoner1 = createSprite(80, 600, 10, 10)
prisoner1.addImage(prisonerImage)
prisoner1.scale = 0.1
prisoner1.velocityX= 2
prisoner1.debug = true;
prisoner2 = createSprite(800, 60, 10, 10)
prisoner2.addImage(prisonerImage)
prisoner2.scale = 0.1
prisoner2.velocityX= -2
prisoner3 = createSprite(350, 650, 10, 10)
prisoner3.addImage(prisonerImage)
prisoner3.scale = 0.1
prisoner3.velocityX= 2
prisoner4 = createSprite(350, 400, 10, 10)
prisoner4.addImage(prisonerImage)
prisoner4.scale = 0.1
prisoner4.velocityX= 2
prisoner5 = createSprite(1100, 600, 10, 10)
prisoner5.addImage(prisonerImage)
prisoner5.scale = 0.1
prisoner5.velocityY= 2
prisoner6 = createSprite(1200, 390, 10, 10)
prisoner6.addImage(prisonerImage)
prisoner6.scale = 0.1
prisoner6.velocityY= 2
prisoner7 = createSprite(80, 100, 10, 10)
prisoner7.addImage(prisonerImage)
prisoner7.scale = 0.1
prisoner7.velocityY= 2
prisoner8 = createSprite(410, 390, 10, 10)
prisoner8.addImage(prisonerImage)
prisoner8.scale = 0.1
prisoner8.velocityY= 2
prisoner9 = createSprite(580, 100, 10, 10)
prisoner9.addImage(prisonerImage)
prisoner9.scale = 0.1
prisoner9.velocityY= 2
prisoner10 = createSprite(1100, 190, 10, 10)
prisoner10.addImage(prisonerImage)
prisoner10.scale = 0.1
prisoner10.velocityY= 2
prisoner11 = createSprite(900, 390, 10, 10)
prisoner11.addImage(prisonerImage)
prisoner11.scale = 0.1
prisoner11.velocityX= 2
prisoner12 = createSprite(750, 620, 10, 10)
prisoner12.addImage(prisonerImage)
prisoner12.scale = 0.1
prisoner12.velocityY= 2

sidhant = createSprite(800, 580, 10, 10)
sidhant.addImage(sidhantImage)
sidhant.scale = 0.1

wall1 = createSprite(900, 250, 200, 20)
wall2 = createSprite(500, 250, 200, 20)
wall3 = createSprite(400, 325, 20, 150)
wall4 = createSprite(400, 590, 20, 200)
wall5 = createSprite(1000, 690, 2000, 20)
wall6 = createSprite(1000, 325, 20, 150)
wall7 = createSprite(1000, 590, 20, 200)
wall8 = createSprite(250, 400, 300, 20)
wall9 = createSprite(325, 490, 150, 20)
wall10 = createSprite(250, 590, 20, 200)
wall11 = createSprite(10, 350, 20, 1000)
wall12 = createSprite(800, 175, 20, 200)
wall13 = createSprite(600, 175, 20, 200)
wall14 = createSprite(1000, 10, 2000, 20)
wall15 = createSprite(100, 325, 20, 175)
wall16 = createSprite(160, 230, 175, 20)
wall17 = createSprite(1150, 250, 300, 20)
wall18 = createSprite(1250, 450, 20, 500)
wall19 = createSprite(1790, 350, 20, 1000)
secret = createSprite(1250, 150, 20, 300)

wall1.shapeColor = "black";
wall2.shapeColor = "black";
wall3.shapeColor = "black";
wall4.shapeColor = "black";
wall5.shapeColor = "black";
wall6.shapeColor = "black";
wall7.shapeColor = "black";
wall8.shapeColor = "black";
wall9.shapeColor = "black";
wall10.shapeColor = "black";
wall11.shapeColor = "black";
wall12.shapeColor = "black";
wall13.shapeColor = "black";
wall14.shapeColor = "black";
wall15.shapeColor = "black";
wall16.shapeColor = "black";
wall17.shapeColor = "black";
wall18.shapeColor = "black";
wall19.shapeColor = "black";
secret.shapeColor = "black";

wallGroup = new Group()
wallGroup.add(wall1)
wallGroup.add(wall2)
wallGroup.add(wall3)
wallGroup.add(wall4)
wallGroup.add(wall5)
wallGroup.add(wall6)
wallGroup.add(wall7)
wallGroup.add(wall8)
wallGroup.add(wall9)
wallGroup.add(wall10)
wallGroup.add(wall11)
wallGroup.add(wall12)
wallGroup.add(wall13)
wallGroup.add(wall14)
wallGroup.add(wall15)
wallGroup.add(wall16)
wallGroup.add(wall17)
wallGroup.add(wall18)
wallGroup.add(wall19)

policeGroup = new Group()
policeGroup.add(police1)
policeGroup.add(police2)
policeGroup.add(police3)
policeGroup.add(police4)
policeGroup.add(police5)
policeGroup.add(police6)

prisonerGroup = new Group()
prisonerGroup.add(prisoner1)
prisonerGroup.add(prisoner2)
prisonerGroup.add(prisoner3)
prisonerGroup.add(prisoner4)
prisonerGroup.add(prisoner5)
prisonerGroup.add(prisoner6)
prisonerGroup.add(prisoner7)
prisonerGroup.add(prisoner8)
prisonerGroup.add(prisoner9)
prisonerGroup.add(prisoner10)
prisonerGroup.add(prisoner11)
prisonerGroup.add(prisoner12)
prisonerGroup.setColliderEach("circle",-70 ,-250, 200)
}

function draw(){
background(ground);

if(keyDown(UP_ARROW)){
sidhant.y = sidhant.y - 5
}

if(keyDown(DOWN_ARROW)){
sidhant.y = sidhant.y + 5
}

if(keyDown(UP_ARROW)){
sidhant.y = sidhant.y - 5
}
        
if(keyDown(LEFT_ARROW)){
sidhant.x = sidhant.x - 5
}

if(keyDown(RIGHT_ARROW)){
sidhant.x = sidhant.x + 5
}

policeGroup.collide(wallGroup)
prisonerGroup.bounceOff(wallGroup)
prisonerGroup.bounceOff(secret)

sidhant.collide(wallGroup)
leader.collide(wallGroup)


drawSprites();
}