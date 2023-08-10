// Problem-3
// function sortMaker(arr) {
//     let largest = arr[0];
//     let smallest = arr[1];
//     let output = [];
//     if (largest >= 0 && smallest >= 0) {
//         if (largest === smallest) {
//             return "equal"
//         } else if (largest > smallest) {
//             output.push(largest, smallest)
//         } else {
//             output.push(smallest, largest)
//         }
//     } else {
//         return "Invalid Input";
//     }
//     return output;
// }
// const Array = [1, 10];
// const result = sortMaker(Array);
// console.log(result);

function sortMaker(arr){
    const name = arr;
    const result = [Math.max(name[0], name[1]), Math.min(name[0],name[1])];
    return result;
}

const Array = [5, 15];
const result = sortMaker(Array);
console.log(result);