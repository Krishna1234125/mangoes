class launcher{

    constructor(bodyA, pointB){
        var options ={
            bodyA: bodyA,
            pointB:pointB,
            stiffness: 0.1 ,
            length:5            
            
        }

        this.pointB=pointB;
        this.bodyA = bodyA;
        this.launcher = Constraint.create(options);
        World.add(world, this.launcher);
   
    }

    //functions
    fly(){
       this.launcher.bodyA=null                                  
    }

    attach(body){
        this.launcher.bodyA= body;

    }

    display(){
        if(this.launcher.bodyA){
            var pointA = this.bodyA.position;
            var pointB = this.pointB;

            line(pointA.x , pointA.y,pointB.x,pointB.y);

        }
        
                                                   
    }
}