class Board{
    constructor(width,height,endPoint,speed){
        this.w=width;
        this.h=height;
        this.x=-width-100;
        this.speed=speed;
        this.color=color(random(255),random(255),random(255));
        this.endPoint=endPoint;
        this.rect=new Rect(this.x,0,this.w,this.h);
    }
    Draw(canvas){
        canvas.fill(this.color);
        canvas.noStroke();
        canvas.rect(this.x,0,this.w,this.h);
        canvas.noFill();
        this.x+=this.speed;
        this.rect.ResetToXYWH(this.x,0,this.w,this.h);
        if(this.x>this.endPoint){
            return 1;
        }
        return 0;
    }
    Reset(speed,width){
        this.w=width;
        this.h=height;
        this.x=-width-100;
        this.speed=speed;
        this.color=color(random(255),random(255),random(255));
        delete this.rect;
        this.rect=new Rect(this.x,0,this.w,this.h);
    }
}