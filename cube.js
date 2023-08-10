function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Invalid input. Please provide a positive number.";
      }else{
        const cube = Math.pow(number, 3);
        return cube
      }
}

const input = 5;
const resutl = cubeNumber(input);
console.log(resutl);