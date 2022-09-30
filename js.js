class auto {
    constructor(type, color, owner, cost){
    this.type = type;
    this.color = color;
    this.owner = owner;
    this.cost = cost;
    
    }
}

const Auto_1 = new auto('bmw', 'blakc', 'Dmitry', 2000000)
const Auto_2 = new auto('lamborgini', 'red', 'Vladimir', 15000000)
console.log(Auto_1);
console.log(Auto_2);

