class JudgeRect{
    constructor(x,y,w,h,color){
        this.x=x;
        this.y=y;
        this.w=w;
        this.h=h;
        this.color=color;

        this.rect=new Rect(x,y,w,h);
    }
    Draw(canvas){
        canvas.fill(this.color);
        canvas.noStroke();
        canvas.rect(this.x,this.y,this.w,this.h);
        canvas.noFill();
    }
    Judge(board){
        var nRect=this.rect.RectInRect(board.rect);
        if(nRect==-1){
            return -1;
        }
        if(this.rect.l<=board.rect.l){
            this.rect.ResetToXYWH(board.rect.l,0,nRect.r,nRect.b);
        }
        else{
            this.rect.ResetToXYWH(this.rect.l,0,nRect.r,nRect.b);
        }
        this.w=nRect.r;
        this.x=this.rect.l;
        this.color=board.color;
        board.Reset(board.speed,nRect.r);

        return nRect.w;
    }
}