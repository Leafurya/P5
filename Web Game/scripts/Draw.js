let player;

function preload(){
    player=new Player("sprites/player.png");
    //playerImage=loadImage("sprites/player.png");
}
function setup(){
    createCanvas(windowWidth,windowHeight);
}
function draw(){
    if (keyIsDown(LEFT_ARROW)) {
        player.x -= player.speed;
    }

    if (keyIsDown(RIGHT_ARROW)) {
        player.x += player.speed;
    }

    if (keyIsDown(UP_ARROW)) {
        player.y -= player.speed;
    }

    if (keyIsDown(DOWN_ARROW)) {
        player.y += player.speed;
    }
    clear();
    image(player.sprite,player.x,player.y,50,50);
}
