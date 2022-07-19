function add(n1: number, n2: number, showResult: boolean, phrase: string){
  // if (typeof n1 !== "number" || typeof n2 !== 'number') {
  //   throw new Error("wrong input type")
  // }
  let result = n1 + n2
  if (showResult) {
    console.log(phrase + result);
  }else {
    return result;
  }
  return result;
}

const numberOne: number = 5;
const numberTwo: number = 2.3;
const printResult: boolean = true;
const resultPhrase: string = 'Result is '


add(numberOne, numberTwo, printResult, resultPhrase);



