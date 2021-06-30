class Children{
    constructor(x, y, width, height) {
        var options = {
            'friction':1.0,
            'density':1.0
        }
        this.body = Bodies.circle(x, y, width, height , options);
        this.width = width;
        this.height = height;
        snowfallImg.loadImage("snow/download.webp");
        snowfallImg2.loadImage("snow/download(2).webp");
        World.add(world, this.body);
      }
      display(){
        push();
        translate(this.body.position.x, this.body.position.y);
        imageMode(CENTER);
        image(this.image, 0, 0, this.width, this.height);
        
        this.body.x = mouseX;

        pop();
        }
      }