function cubeNumber(number) {
    if (typeof number !== 'number') {
        return "Invalid input. Please provide a positive number.";
      }else{
        const cube = Math.pow(number, 3);
        return cube;
      }
}






function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Invalid input. Please provide a strings.";
      }else{
        const checkString = string1.includes(string2);
        return checkString;
      }
}






function sortMaker(arr) {
    let largest = arr[0];
    let smallest = arr[1];
    let output = [];
    if (largest >= 0 && smallest >= 0) {
        if (largest === smallest) {
            return "equal"
        } else if (largest > smallest) {
            output.push(largest, smallest)
        } else {
            output.push(smallest, largest)
        }
    } else {
        return "Invalid Input";
    }
    return output;
}








function findAddress(obj) {
    const street = obj.street || '__';
    const house = obj.house || '__';
    const society = obj.society || '__';

    const result = street+','+house+','+society;
    return result;
}

const obj = {
    street: 10,
    house: "15A",
    society: "Earth Perfect"
}






function canPay(changeArray, totalDue) {

    if (changeArray.length === 0) {
        return "Invalid input. Please provide an array of numbers.";
      }else{
        let totalMoney = 0;
        for(let taka of changeArray){
            totalMoney = totalMoney + taka;
        }
        if(totalDue <= totalMoney){
            return true;
        }else{
            return false;
        }
      }
}
