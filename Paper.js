class Paper{
    constructor(x,y,rad){

        var op = {
           
            restitution:0.6,
            friction:0.5,
            density:1.2
        }
     
        this.body = Bodies.circle(x,y,rad,op);
        World.add(world,this.body);
    }
    display(){

       // push()
        //translate(this.body.position.x,this.body.position.y);
        fill("pink");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x,this.body.position.y,20,20);
      //  pop()
       // console.log(this.body)

    }
}