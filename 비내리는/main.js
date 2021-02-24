var drops=new Array();
var dropCount=200;
var speed=8;
var groundy=800;

function setup(){
    createCanvas(windowWidth,windowHeight);
    ww=windowWidth;
    hw=windowHeight;

    for(var i=0;i<dropCount;i++){
        drops[i]=new WaterDrop(ww,groundy,speed);
    }
}
    
function draw(){
    background(0);
    
    line(0,groundy,ww,groundy);
    stroke(155);
    DrawWaterDrop();
}
function DrawWaterDrop(){
    for(var i=0;i<drops.length;i++){
        if(drops[i].Drop()){
            delete drops[i];
            drops[i]=new WaterDrop(ww,groundy,speed);
        }
    }
}
function Wave(){

}