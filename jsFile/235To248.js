console.log('page234')
//생성자함수
{
    const person = new Object();

//Object 생성자 함수
    person.name = 'Lee';
    person.sayHello = function () {
        console.log('안녕' + this.name);
    }

    console.log(person)
    person.sayHello();

//객체 리터럴에 의한 생성자 함수
    const circle1 = {
        radius: 5,
        getDiameter() {
            return console.log('지름은 ' + (2 * this.radius));
        }
    };
    circle1.getDiameter()
// 단점은 객체를 여러개 생성해야 하는 경우 매번 같은 프로퍼티를 기술해야한다.

//생성자 함수에의한 객체생성!
    function Circle(radius) {
        //암묵적으로 this가 바인딩된며 빈객체를 생성한다.

        //this에 바인딩 되어있는 인스턴스를 초기화한다.
        this.radius = radius
        this.getDiameter = function () {
            return console.log('지름은 ' + (2 * this.radius));
        }
        //명시적으로 객체를 반환하면 암묵적인 this의 반환이 무시된다.
        // return {};
        // or 원시값을 반환하면 원시값은 무시되고 this의 값이 반환된다.
        // return 100;
    }

// const circle = new Circle(1);
// console.log(circle)

//인스턴스 생성
    const circle3 = new Circle(3)
    const circle4 = new Circle(4)
//호출
    circle3.getDiameter()
    circle4.getDiameter()

//new 생성자 함수를 사용하지 않았을경우 일반 함수로 작동!
    const circle15 = Circle(15);
    console.log(circle15)//undefined
    console.log(radius);//15

    let obj1 = String(123);
    console.log(obj1, typeof obj1)
}
//함수와 일급 객체
{

}