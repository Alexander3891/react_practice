'use strict';

 // 1) ===================  var -let ===================
let a = 0;
console.log(a);
var a = 0;
 
// 2) ===================== this ===================
let obj = {
    number: 5,
    sayNumber: function () {
        function say() {
            console.log(this);
        }
        say();
    }
}

obj.sayNumber();  // window{}

let obj2 = {
    number: 5,
    sayNumber: function () {
        say = () => {
            console.log(this);
        }
        say();
    }
}

obj2.sayNumber(); // {number:5, sayNumber f}


// 3) ========================  filtr ====================
let names = ['Ivan', 'Ann','Ksenia', 'Voldemar']
let shortNames = names.filter((name) => {
    return name.length < 5
})
console.log(shortNames); // ['Ivan','Ann']

// 4) ======================  map =====================
let answers = ['IvAn', 'AnnA', 'HeLLo'];
answers = answers.map((item) => {
   return item.toLowerCase();
});
console.log(answers);

// 5) ====================  интерполяция =====================
let name = 'Ivan';
age = 23;
console.log(`Пользователь ${name}, ${age} лет`);


// 6) ===================  Значение по умолчанию  =======================
function fetchData(data, count = 0) {
    console.log(`Данные: ${data} в колличестве ${count}`);
}
fetchData('somthing');

// 7) ==================== рест оператор ...(только один и только в конце)  =============================
function max (...numbers) {
    console.log(numbers);
}
max(1,2,3,45,5);  // [1, 2, 3, 45, 5]

function max (a,b,...numbers) {
    console.log(numbers);
}
max(1,2,3,45,5);  // [1, 2, 3, 45, 5]

// 8) ==================== спред оператор  ===========================
const arr1 = [1, 2, 3];
const arr2 = [41, 20, 33];

const res = Math.max(...arr1,300, ...arr2); //max число
console.log(res);

//------------------------------------
const avatar = 'Photo';
const user = {
    name: 'default',
    pass: 'qwerty',
    rigths: 'user'
};
const admin = {
    name: 'admin',
    pass: 'root',
};

const result = Object.assign(user, admin); // перезапишет { name: 'admin', pass: 'root', rigths: 'user' }
console.log(result);
const result2 = { ...user, ...admin, avatar }; // { name: 'admin', pass: 'root', rigths: 'user' }
console.log(result2);

// 9) ===================  новый вид обьекта ==========================
let x = 5;
y = 10;

const coords = {
    x: x,
    y: y,
    calcSq: function () {
        console.log(this.x * this.y);
    }
}
coords.calcSq();

const coords2 = {x,y,
    calcSq() {
        console.log(this.x * this.y);
    }
}
coords2.calcSq();

// 10) ================= деструктуризация  =========================
const user2 = {
    name: {
        first: 'Sam',
        second:'Smit'
    },
    pass: 'qwerty',
    rigths: 'user'
}; 
// console.log(user2.name);
// const userName = user2.name;
// const userName = user2.pass;
// const userName = user2.user;
//-----------------------------------------
// const {name, pass, rigths} = user2;
// console.log(name, pass, rigths);
const { name: {first,second}, pass, rigths} = user2;
console.log(first,second);
 

function conect({
    host = 'localhost',
    port = '3000',
    user = 'default' } = {}) {
    console.log(`host: ${host}, port: ${port}, user ${user}`);
}
conect(
    // host: 'localhost',
    // port: '323'
    // user: 'default'
)
//---------------------------------------

const numbers = [3,4,5,6];
// const [a, b, c] = numbers;
// console.log(a,b,c);

const [, , c] = numbers;
console.log(c);

//------------------------
const numbers = [[3,4],[5,6]];
const [[a, b], [c,d]] = numbers;
console.log(a,b,c,d); //3 54 5 6

const [, , c] = numbers;
console.log(c); //5

const country = {
    name: 'England',
    population: 2000000,
    gender: {
        male: ['15%', '40%'],
        female: ['16%', '29%']
    }
}
console.log(country.gender.male[0]);
const {name, population, gender: { male: [maleUnder18, maleAdult], female:[femaleUnder18, femaleAdult] }} = country;
console.log(maleUnder18, maleAdult, femaleUnder18, femaleAdult);
