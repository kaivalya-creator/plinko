class Particle {
   
    constructor(x, y, radius){
        var options = {

            restitution:0.4
        }
        this.r = radius
        this.body = Bodies.circle(x, y, this.r, options)
        this.color = color(random(0, 255), random(0, 255), random(0, 255));
        World.add(world, this.body);
    }
display(){
    ellipseMode(RADIUS);
    fill(this.color)
    ellipse(this.body.position.x, this.body.position.y, this.r, this.r )

}







}