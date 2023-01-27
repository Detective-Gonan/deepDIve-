console.log(score);
var score;
score = 80
console.log(score)
let infi = Infinity
console.log(infi)
console.log('cat' && 'dog')


let string = 'hello world'
let search = 'l'
const regexp = new RegExp(search, 'g')
console.log(string.match(regexp).length)

let done = true;
let message;

message = done && '완성'
console.log(message)

let str = ''
let length = str?.length;
console.log(length)

let counter = {
    num: 0, increase: function () {
        this.num++;
    }
}
console.log(counter.num);
counter.increase();
console.log(counter.num);
counter.increase();
console.log(counter.num);


let human = {
    name: 'coder', age: 24,
}
human.address = '수원시'
console.log(human)
delete human.address;
console.log(human)

const obj = {
    name: 'ji', sayHi() {
        console.log('Hi ' + this.name)
    }
}
console.log(obj)
obj.sayHi()

let a = 1
let b = a

console.log(a)
console.log(b)
a = 100
console.log(a)
console.log(b)

function add(x, y) {
    return x + y
}

console.dir(add)

let add2 = function (x, y) {
    x + y
}
console.log(add(3, 4))

function repeat(n, f) {
    for (let i = 0; i < n; i++) {
        f(i);
    }
}

function logAll(i) {
    console.log(i)
}

repeat(3, logAll);


function foo() {
    console.log('foo지롱')
}

function bar() {
    function foo() {
        console.log('bar지롱')
    }

    foo()
}

bar()

let x = 10;

function fooo() {
    x = 20;
    barr()
}

function barr() {
    console.log(x)
}

fooo();
barr();

// let aa = 1
// {
//     console.log(aa)
//     let aa = 2;
// }

const person1 = {
    name: 'jihoon'
}
person1.age = 25;

console.log(Object.getOwnPropertyDescriptors(person1))

