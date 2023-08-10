function findAddress(obj) {
        const street = obj.street || '__';
        const house = obj.house || '__';
        const society = obj.society || '__';

        const result = street+','+house+','+society;
        return result;
}
const obj = {
    street: 10,
    // house: "15A",
    society: "Earth Perfect"
}
const output = findAddress(obj)
console.log(output);