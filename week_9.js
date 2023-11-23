function hello(name, message) {
    console.log(`${name}님, ${message}`)
}

hello('도레미', '반갑습니다.')
hello('백두산')

// 매개변수에 기본값 설정 (파이썬과 똑같다.)
function hello(name, message = '안녕하세요?') {
    console.log(`${name}님, ${message}`)
}

hello('도레미', '반갑습니다.')
hello('백두산')

// ...의 의미 >>> 매개변수의 개수에 상관없이 하나의 변수로 전달 받음 (배열의 형태)
function addNum(...numbers) {
    let sum = 0;

    for (let number of numbers)
        sum += number;

    return sum;
}

console.log(addNum(1, 2));
console.log(addNum(1, 2, 3, 4, 5));

function dot3() {
    let animal = ['bird', 'cat']
    let fruits = ['apple', 'banana', 'cherry']

    // animal.concat(fruits)

    console.log(animal.concat(fruits))
    console.log([...animal, ...fruits])
    console.log([animal, fruits])
}

dot3();

// let과 const의 차이는 변수의 재할당 여부가 가능한지
const book = {
    title: 'Javascript',
    pages: 500
}

// book.published date = '2022-01'
book['published date'] = '2022-01';

console.log(book)

// 함수나 계산식을 프로퍼티의 이름으로 사용할 수 있다.
function fn() {
    return 'result';
}

// const obj = {
//     [fn()]: '함수 키'
// }

// console.log(obj);


function add(a, b) {
    return a + b;
}

const obj = {
    [fn()]: '함수 키',
    [`${add(10, 20)} key`]: '계산식 키'
}

console.log(obj);


// 객체를 정의할 때 변수와 프로퍼티의 이름이 같다면 줄여서 사용할 수 있다.
function makeUser(name, age) {
    return {
        name, // name: name,
        age, //age: age
    }
}

let user1 = makeUser('백두산', 20)
console.log(user1);


/* Symbol
Sybmol: Symbol함수를 통해 호출하며, 한 번 정의하면 값을 변경할 수 없고, 유일한 값을 갖는다.
인자로 전달되는 문자열 값은 생성될 심볼에 대한 일종의 설명문으로, 직접적으로 사용되는 값은 아니다.

symbol 값은 고유하기 때문에, 일반적으로 객체의 프로퍼티 키로 사용된다.
이 경우, 다른 프로퍼티와 충돌하지 않게 되기 때문에 매우 유용하다. (일종의 문자열?)

for 메서드를 이용하여 심볼을 생성하는 것과, Symbol 함수만을 이용하여 심볼을 생성하는 것의 차이
*/
const sym1 = Symbol();
const sym2 = Symbol('foo');
const sym3 = Symbol('bar');
const sym4 = Symbol('bar');

console.log(sym1, typeof sym1);
console.log(sym2, typeof sym2);
console.log(sym3, typeof sym3);
console.log(sym4, typeof sym4);
console.log(sym3 === sym4);

const symfor1 = Symbol('test');
const symfor2 = Symbol.for('test1');

const symfor1_key = Symbol.keyFor(symfor1)
const symfor2_key = Symbol.keyFor(symfor2)

console.log(symfor1);
console.log(symfor2);
console.log(symfor1_key);
console.log(symfor2_key);


const symkey1 = Symbol.keyFor(sym2)
console.log(symkey1)


const id = Symbol('id')
const tel = Symbol('telephone number')
const member = {
    name: 'Kim',
    age: 25,
    [id]: 1235,
    [tel]: function() {
        alert(prompt('전화번호: '));
    }
}

for (item in member) {
    console.log(`${item}: ${member[item]}`)
}

console.log(member[id])
console.log(member[tel]())


/*
 구조 분해 할당
*/
let [apple, peach] = ['사과', '복숭아']

const fruits = ['사과', '복숭아']
let [Apple, Peach] = fruits;

console.log(apple, peach,Apple, Peach)

// 나머지 변수 (...을 이용)
let [teacher, ...students] = ['Kim', 'Lee', 'Park', 'Choi']
console.log(teacher, students);

// 변수의 값 교환
let x = 10;
let y = 20;

console.log(x, y)

let tmp;
tmp = x;
x = y;
y = tmp;
console.log(x, y);

[x, y] = [y, x]
console.log(x, y)

// 객체의 구조 분해
const member = {
    name1: 'Kim',
    age1: 25
}

// let {name1, age1} = member;
let {name1: test, age1} = member;

console.log(test, age1, member, member.name1, member.age1)

let {name2, age2} = {name2:'Kim', age2: 25};
// let {name, age} = {'Kim', 25} // 에러 발생

console.log(name2, age2); -- 

// 변수의 이름을 다르게 지정
const student = {
    name: '도레미',
    score: {
        history: 85,
        science: 84
    },
    friends: ['Kim', 'Lee', 'Park']
}

console.log(student, student.name, student.score, student.friends);
console.log(student.score.history, student.score.science);

let {
    name,
    score: {history, science},
    friends: [f1, f2, f3]
} = student

console.log(student.friends, f1, f2, f3);

// map() 메서드 -- 파이썬의 map과 똑같은 기능 (x에 대해서 => 우측의 연산을 적용)
let numbers = [1, 2, 3, 4, 5]
let new_numbers = numbers.map(number => number * 2);
let new_numbers2 = numbers.map((number, index) => index + (number * 3));
let numbers_index = numbers.map((number, index) => index); // 배열의 index 값이 map에서 자동으로 index로 지정되어있다.

console.log(numbers, new_numbers, new_numbers2, numbers_index);

// filter() 메서드 -- 특정 조건에 맞는 요소만 걸러내는 기능
let scores = [90, 35, 64, 88, 45, 92]
let high_scores = scores.filter(score => score >= 85);
let high_scores2 = scores.filter((score, index) => {
                                                    if (score >= 85) {
                                                        console.log(`index: ${index}, score: ${score}`);
                                                        return score;
                                                    }
});

console.log(high_scores, high_scores2);

// reduce() 메서드 -- 배열 요소에 차례로 함수를 누적하는 메서드