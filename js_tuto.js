// 함수 정의
function add(x, y) {
    let temp = x + y

    return temp
}

function fly() {
    open_wings();
    while (true) {
        move_wings();
    }
}

add(1, 3);

// 조건문
let money = 5000;

if (money >= 5000) {
    console.log('ride taxi')
}
else if (money >= 2000) {
    console.log('ride bus')
}
else {
    console.log('walk')
};

// 반복문
for (let i = 0; i < 10; i ++) {
    console.log('work' +i )
};

my_array = [1, 2, 3, 4, 5]
my_array.forEach(element => {
    console.log('work ' + element);
})