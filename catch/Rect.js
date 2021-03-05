class Rect{
    constructor(x,y,w,h){
        this.l=x;
        this.t=y;
        this.r=x+w;
        this.b=y+h;
    }
    ResetToXYWH(x,y,w,h){
        this.l=x;
        this.t=y;
        this.r=x+w;
        this.b=y+h;
    }
    ResetToLTRB(l,t,r,b){
        this.l=l;
        this.t=t;
        this.r=r;
        this.b=b;
    }
    RectInRect(rect){
        var intersection=-1;
        var interW;
        var interH;

        if(((this.r>=rect.l)&&(this.l<=rect.r)&&(this.b>=rect.t)&&(this.t<=rect.b))){
            if(this.r>=rect.l&&this.r<=rect.r){
                interW=this.r-rect.l;
            }
            else if(this.l<=rect.r&&this.l>=rect.l){
                interW=rect.r-this.l;
            }
            if(this.b>=rect.t&&this.b<=rect.b){
                interH=this.b-rect.t;
            }
            else if(this.t<=rect.b&&this.t>=rect.b){
                interH=rect.b-this.t;
            }

            intersection=new Rect(0,0,interW,interH);
        }

        return intersection;
    }
}