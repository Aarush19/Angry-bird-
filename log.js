class log {
    constructor(x,y,height,angle){
        var opt = {
            'restitution':0.5,
            'friction':1.0,
            'density': 0.8
        };
        this.body = Bodies.rectangle(x,y,30,height,opt);
        this.width = 30;
        this.height = height;
        Matter.Body.setAngle(this.body,angle);
        World.add(myworld,this.body);
    }
    display(){
        var pos = this.body.position;
        var ang = this.body.angle;
        push();
        translate(pos.x,pos.y)
        rotate(ang);
        stroke("red");
        strokeWeight(5);
        rectMode(CENTER);
        rect(0,0,this.width,this.height);
        pop();
    }
}