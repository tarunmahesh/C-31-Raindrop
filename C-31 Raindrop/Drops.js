class Drops {
    constructor(x,y){
        var options = {
            isStatic:false,
            restitution:0.5,
            friction:0.5,
            density:1.2
        }

        this.x = x;
        this.y = y;

        this.body = Bodies.circle(this.x, this.y, 10, options)
        World.add(world, this.body)
    }

    display(){
        var dropPos = this.body.position

        push()
        translate(dropPos.x, dropPos.y)
        rectMode(CENTER)
        strokeWeight(2)
        fill("blue")
        ellipse(0,0,this.radius,this.radius)
        pop()
    }
}