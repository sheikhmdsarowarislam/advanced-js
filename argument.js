function add(num1,num2){
    console.log([...arguments]);
    return num1 + num2 + arguments[2];
}
console.log(add(5,5,7,4,4));