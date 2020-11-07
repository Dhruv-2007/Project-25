class Dustbin{
    constructor(x,y,width,height){
        var Options1 = {
           isStatic: true
        }
    
        this.body = Bodies.rectangle(x,y,width,height,Options1);
        this.width = width;
        this.height = height;
        World.add(world,this.body);
       }
    
       display(){
         var pos = this.body.position;
         fill("yellow");
         rectMode(CENTER);
         rect(pos.x,pos.y,this.width,this.height);  
       }
    }
