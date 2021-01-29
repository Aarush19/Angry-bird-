class pig{
    constructor(x,y){
        var opt = {
            'restitution':0.5,
            'friction':1.0,
            'density': 0.8
        };
        this.body = Bodies.rectangle(x,y,70,70,opt);
        this.width = 70;
        this.height = 70;
        World.add(myworld,this.body);
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(ang);
        stroke("green");
        strokeWeight(5);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}