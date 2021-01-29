class ground{
    constructor(x,y,width,height){
        var court={
            isStatic:true
        }
        this.body=Bodies.rectangle(x,y,width,height,court);
        this.width = width;
        this.height = height;
        World.add(myworld,this.body)
    }
    display(){
        var pos = this.body.position;
        rectMode(CENTER);
        rect(pos.x,pos.y,this.width,this.height);
    }
}