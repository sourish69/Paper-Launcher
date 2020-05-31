class Launcher{
    constructor(bodyA, pointB){
        this.pointB = pointB
        var options = {
            bodyA: bodyA,
            pointB: pointB,
            stiffness: 0.0004,
            length: 15
        }
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
    }

        fly()
        {
            this.launcher.bodyA = null;
        }
    

    display(){
        if(this.launcher.bodyA){
        var pointA = this.launcher.bodyA.position;
        var pointB = this.pointB;
        stroke("red");
        strokeWeight(4);
        line(pointA.x, pointA.y, pointB.x, pointB.y);
        }
    }
    
}