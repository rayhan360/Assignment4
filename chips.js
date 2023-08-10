function canPay(changeArray, totalDue) {

    if (changeArray.length === 0) {
        return "Invalid input. Please provide a non-empty array of numbers.";
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

const note = [1, 3, 5];
const chipCost = 10;
const result = canPay(note, chipCost);
console.log(result);