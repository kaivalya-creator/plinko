class Plinko {
   
    constructor(x, y){
        var options = {

            isStatic: true,
            friction: 0,
            restituion: 1
            
        }
        this.body = Bodies.circle(x,y,10,options)
        World.add(world, this.body);
        
    }

    display(){
        ellipseMode(RADIUS);
        fill("white");
        ellipse(this.body.position.x, this.body.position.y, 10, 10);

    }







}