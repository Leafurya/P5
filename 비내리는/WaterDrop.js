class WaterDrop{
    constructor(scrw,groundy,speed){
        this.x=random(scrw);
        this.y=random(1000)*-1;
        this.gy=groundy;
        this.s=speed;
        this.length=random(50)+20;
    }
    Drop(){
        this.y+=this.s;
        line(this.x,this.y,this.x,this.y-this.length);
        if(this.y>=this.gy){
            var frag=this.length/5;
            line(this.x,this.y,this.x-frag,this.y-frag);
            line(this.x,this.y,this.x+frag,this.y-frag);
            return 1;
        }
        return 0;
    }
}