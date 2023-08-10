function matchFinder(string1, string2) {
    if (typeof string1 !== 'string' || typeof string2 !== 'string') {
        return "Invalid input. Please provide valid strings.";
      }else{
        const checkString = string1.includes(string2);
        return checkString;
      }
}

const string1 = 'JavaScript';
const string2 = 'Code';
const result = matchFinder(string1, string2);
console.log(result);