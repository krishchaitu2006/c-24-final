class Rubber{

    constructor(x,y){
    
        var options = {
            'restitution':1.2,
            'friction':3.0,
            'density':2.0,
        }
    
        this.body = Bodies.rectangle(x,y,150,150,options);
        this.width = 80;
        this.height = 80;
        //this.radius = 30;
    
        World.add(world, this.body);
    
    }
    
    display(){
    
        var pos = this.body.position;
        
        push();
        translate(pos.x,pos.y);
        ellipseMode(RADIUS);
        strokeWeight(4);
        stroke("black");
        fill("white");
        ellipse(0,0,this.width,this.height);
        pop();
    
    
    }
    
    }