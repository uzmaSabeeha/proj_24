class Dustbin{
    constructor(x,y,h,a){

        
        this.width = 15;
        this.height = h;
        this.angle = a;
        this.body = Bodies.rectangle(x,y,15,h,{ isStatic: true});
        Matter.Body.setAngle(this.body, this.angle);
        World.add(world,this.body);
    }
    display(){

      push()
        fill("white");
        translate(this.body.position.x,this.body.position.y)
        rotate(this.angle)
        angleMode(RADIANS);
        rect(0,0,this.width,this.height);
      pop()


    }
}