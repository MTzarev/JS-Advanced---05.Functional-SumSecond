function add(a) {
    let sum = 0;
    sum += a;

    function secondFunc(b) {
        sum += b;
        //console.log(sum)
        return secondFunc;

    }
    secondFunc.toString = () => sum;
    return secondFunc;

}
console.log(add(1)(1)(2)(4).toString())
console.log(`` + add(1))
console.log(`` + add(1))
console.log(`` + add(1))