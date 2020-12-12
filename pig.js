class Pig{
    constructor(x,y){
        var world_option = {
            restitution : 1.0,
            friction : 1.0
          }

          this.width=50;
          this.height=50;

          this.body = Bodies.rectangle(x,y,50,50,world_option);
          World.add(world,this.body);

    
    }

    display(){
        push () ;

        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate (this.body.angle)
        fill("green");
        rectMode(CENTER);
    rect(0,0,this.width , this.height);
    pop ();

        
    }
}