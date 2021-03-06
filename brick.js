class Brick{

    constructor(x,y,angle){
    
        var options = {
            'restitution':0.5,
            'friction':10.0,
            'density':4.0,
        }
    
        this.body = Bodies.rectangle(x,y,90,90,options);
        this.width = 90;
        this.height = 90;
    
        World.add(world, this.body);

        //Matter.Body.setAngle(this.body,angle);
    
    }
    
    display(){
    
        var pos = this.body.position;
        //var angle = this.body.angle;
        push();
        translate(pos.x,pos.y);
       // rotate(angle);
        rectMode(CENTER);
        strokeWeight(4);
        stroke("black");
        fill("grey");
        rect(0,0,this.width,this.height);
        pop();
    
    
    }
    
    }