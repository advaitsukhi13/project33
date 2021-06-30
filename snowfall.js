class Snowfall{
    constructor(x, y, width, height, radius) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, height , this.r , options);
        this.width = width;
        this.height = height;
        this.r = this.r;
        snowfallImg.loadAnimation("snow4.webp,snow5.webp");
        World.add(world, this.body);
      }
      display(){
        var radius = this.body.radius;
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
            
        pop();
        }
      }
