class car {
    constructor(type, color, owner, cost){

        this.type = type;
        this.color = color;
        this.owner = owner;
        this.cost = cost;

        
    }
}

class auto extends car{
    constructor(type, color, owner, cost, startEngine, massa){
        super(type, color, owner, cost, startEngine, massa )

        this.startEngine = startEngine;
        this.massa = massa;
        
    }
    start(){
        console.log();
    }
}



const Auto_1 = new auto('bnw', 'blakc', 'Dmitry', 2000000, 'ok', 2085)
console.log(Auto_1);
const Auto_2 = new auto('lamborgini', 'red', 'Vladimir', 15000000, 'ok', 1575 )
console.log(Auto_2);
const plane_1 = new auto('kukuruznikc', 'white', 'Charld', '174 млн руб', 'ok', 3300)
console.log(plane_1);


