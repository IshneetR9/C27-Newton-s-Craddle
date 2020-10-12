class Bob
{
    constructor(x, y, r)
    {
        var options = {
            isStatic: true
           // restitution: 0.3,
           // friction: 0.5,
           // density: 1.2
        }
        this.body = Bodies.circle(x, y, r, options);
        this.width = r;
        this.height = r;
        World.add(world, this.body);
    }
    display()
    {
        fill("yellow");
        ellipseMode(RADIUS);
        ellipse(this.body.position.x, this.body.position.y, this.width, this.height);
    }
}