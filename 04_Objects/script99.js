// let WaterDispenser = {
//     name:['coke','pepsi'],
//     price: ['15','18']
// };

// console.log(WaterDispenser);
// console.log(WaterDispenser.name[0])
// console.log(WaterDispenser.name[WaterDispenser.name.length-1])

let product1 = {"name" : 'coke', "price" : 15}
let product2 = {"name" : 'pepsi', "price" : 18}

let water = [product1, product2];
for(let water1 of water){
    console.log(water)
};

let square = {
    area(){
        return this.side* this.side,
       side:10
    }
}
square.area