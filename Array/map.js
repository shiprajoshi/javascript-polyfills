
//creates a new array with the results of calling the provided function on each element;
function mymap(cb){
    let array = this;
    let newArray = [];
    for(let i = 0; i < array.length; i++){
        newArray.push(cb(array[i], i, array))
    }
    return newArray;
}

Array.prototype.mymap = mymap;
const array = [2,3,4,6];
const newArray = array.mymap((element, index, array)=>add2(element,index,array));
function add2(element){
    return element+2;
}

console.log(newArray)