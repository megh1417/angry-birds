class Log{
    constructor(x,y,h,angle){
        var world_option = {
            restitution : 1.0,
            friction : 1.0
          }

          this.width=20;
          this.height=h;

          this.body = Bodies.rectangle(x,y,20,h,world_option);
          Matter.Body.setAngle(this.body,angle);
          World.add(world,this.body);

    
    }

    display(){
        push () ;

        translate(this.body.position.x,this.body.position.y)
        angleMode(RADIANS)
        rotate (this.body.angle)
        fill ('brown');
        rectMode(CENTER);
    rect(0,0,this.width , this.height);
    pop ();

        
    }
}