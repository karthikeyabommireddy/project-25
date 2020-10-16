class Paper{
    constructor(x,y,r){
        this.x=x;
        this.y=y;
        this.r=r;
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }
        this.image=loadImage("sprites/Paper.png");
this.body=Bodies.circle(this.x,this.y,this.r,options);
World.add(world,this.body);
    }
    display(){
      push();
      translate(this.body.position.x,this.body.position.y);
      fill(255,0,255);
      imageMode(CENTER)
        image(this.image,0,0,this.r,this.r)
        pop();
    }
}
