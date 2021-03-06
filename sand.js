class Sand{

    constructor(x,y){
    
        var options = {
            'restitution':0.9,
            'friction':5.0,
            'density':3.0,
        }
    
        this.body = Bodies.rectangle(x,y,20,20,options);
        this.width = 8;
        this.height = 8;
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
        fill("red");
        ellipse(0,0,this.width,this.height);
        pop();
    
    
    }
    
    }