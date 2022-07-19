function add(n1, n2, showResult, phrase) {
    // if (typeof n1 !== "number" || typeof n2 !== 'number') {
    //   throw new Error("wrong input type")
    // }
    var result = n1 + n2;
    if (showResult) {
        console.log(phrase + result);
    }
    else {
        return result;
    }
    return result;
}
var numberOne = 5;
var numberTwo = 2.3;
var printResult = true;
var resultPhrase = 'Result is ';
add(numberOne, numberTwo, printResult, resultPhrase);
