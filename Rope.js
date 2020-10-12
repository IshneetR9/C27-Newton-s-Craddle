class Rope
{
    constructor(body1, body2)
        {
            var options = {
                bodyA: body1,
                bodyB: body2,
                length: 20,
                stiffness: 0.04
            }
            this.rope = Constraint.create(options);
            World.add(world, this.rope);
        }
    display()
    {
        strokeWeight(3);
        stroke("white");
        line(this.rope.bodyB.position.x, this.rope.bodyA.position.y, this.rope.bodyB.position.x, this.rope.bodyB.position.y);
    }
}