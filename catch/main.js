var gameStart=false;
var judgeLine;
var judgeLineH=300;
var boardRect=0;
var boardSpeed=10;
var judgeRect=0;
var judgeRectWidth=300;



function setup(){
    createCanvas(windowWidth,windowHeight);
    judgeLine=createGraphics(windowWidth,judgeLineH);
}
function draw(){
    background(10);
    var centerX=windowWidth/2;
    var centerY=windowHeight/2;

    judgeLine.background(100);
    if(gameStart){
        judgeRect.Draw(judgeLine);
        if(boardRect.Draw(judgeLine)){
            gameStart=false;
        }
    }

    image(judgeLine,0,centerY-(judgeLineH/2),windowWidth,judgeLineH);
    if(!gameStart){
        textSize(32);
        fill(200);
        text("press 'space' to start",centerX-150,centerY+10);
    }
}
function windowResized(){
    resizeCanvas(windowWidth,windowHeight);
}
function keyPressed(){
    var centerX=windowWidth/2;

    if(keyCode==32){
        if(gameStart){
            var result=judgeRect.Judge(boardRect);
            console.log(judgeRect.rect);
            if(result==-1){
                gameStart=false;
            }
        }
        else{
            gameStart=true;
            judgeRect=new JudgeRect(centerX-judgeLineH/2,0,judgeRectWidth,judgeLineH,color(255));
            boardRect=new Board(judgeRectWidth,judgeLineH,windowWidth,boardSpeed);
        }
    }
}