class bird{
    constructor(x,y){
        var opt = {
            'restitution':0.5,
            'friction':1.0,
            'density': 0.8
        };
        this.body = Bodies.rectangle(x,y,60,60,opt);
        this.width = 60;
        this.height = 60;
        World.add(myworld,this.body);
    }
    display(){
        var pos = this.body.position;
        pos.x = mouseX;
        pos.y = mouseY;
        var ang = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(ang);
        stroke("green");
        fill("red");
        strokeWeight(5);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}