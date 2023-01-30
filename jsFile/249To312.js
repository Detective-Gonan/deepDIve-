
//일급 객체
// 무명의 리터럴로 생성가능
const increase = function (numPlus) {
    return ++numPlus;
}
console.log(increase(2))
const decrease = function (numPlus) {
    return --numPlus;
}
console.log(decrease(3))

//변수나 자료구조(객체,배열)에 저장가능
const predicates ={increase,decrease}
console.log((predicates))

//매개변수에 전달가능, 반환값으로 사용가능!
function makeCounter(predicates){
    let num = 0;
    return function (){
        num = predicates(num);
        return num;
    }
}

const increaser = makeCounter(predicates.increase)
const decreaser = makeCounter(predicates.decrease)
console.log(increaser())
console.log(decreaser())

//함수 객체의 프로퍼티!
function square(number){
    return number*number
}

console.dir(square) //arguments, caller, length, name, prototype은 함수객체의 고유 프로퍼티이다!

// arguments 프로퍼티
// 함수 객체의 arguments 프로퍼티값은 argument 객체다.
// arguments 객체는 함수 호출시 전달된 인수들의 정보를 담고 있는 순회가능한 유사 배열객체!
// 함수 내부에서 변수 처럼 사용가능하다! 즉 외부에서는 사용x
function multiply(x,y){
    console.log(arguments)
    return x*y
}

console.log(multiply())
console.log(multiply(1))
console.log(multiply(1,2))
// 매개변수의 개수보다 인수를 더 많이 전달하면 초과된 인수는 무시된다. 3무시!
console.log(multiply(1,2,3))
// 초과된 인수는 무시될 뿐이지 버려지지 않는다! console.log(arguments) 이부분을 참고해보자!


//Prototype 259-312
