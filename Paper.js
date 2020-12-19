class Paper{
    constructor(x,y,r){
        var options={
            isStatic:false,
            restitution:0.3,
            friction:0.5,
            density:1.2
        }

        this.body=Bodies.circle(this.x, this.y, this.r/2,options);
        this.x=x;
        this.y=y;
        this.r=r;
        this.image = loadImage("paper.png");
        World.add(world, this.body);
    }
    display(){
        var paperPos=this.body.position;
        push();
        imageMode(CENTER);
        image(this.image,0,0,this.body.r);
        pop();
    }
};