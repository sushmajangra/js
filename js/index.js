// console.log("hello there.");
// console.warn("this is a warning");
// console.error("this is error");


/*
primitive data types: number, string, bool, symbol
reference datatype: arrays, objects

*/

//loops

var arr = [1,3,4,56,75,43];
// for(i = 0; i <= arr.length; i++){
//     console.log(arr[i]);
// }
let j = 0;
// while(j<arr.length){
//     console.log (arr[j]);
//     break;
// }

// arrays method
let myArr = ['sun', 'moon', 2., 5, null, true,3,4];
console.log(myArr.length);
myArr.pop();
console.log(myArr);
myArr.push('true');


// Dom manipulation
document.getElementById('click').innerHTML="save me";
document.getElementById('click').style.backgroundColor="blue";

let elem = document.getElementsByClassName("container");
console.log(elem);

elem[0].classList.add("bg-primary");
