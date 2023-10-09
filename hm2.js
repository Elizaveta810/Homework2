//Заднание 1
let a = 10;
alert(a);
a = 20;
alert(a);

//Задание 2
const firstIPhone = 2007;
console.log(firstIPhone);

//Задание 3
const name = "JamesGosling";
console.log(name);

//Задание 4
let a = 10;
let b = 2;
alert(a+b);
let c = a-b;
alert(c);
alert(a*b);
let d=a/b;
alert(d);
//Задание 5
let a = 2;
let b = 5;
let result = a**b;
alert (result);


//Задание 6
let a = 9;
let b = 2;
alert(a%b);

//Задание 7
let num = 1;
num += 5;
num -= 3;
num *= 7;
num /= 3;
num ++;
num --;
alert(num);

//Задание 8
let age = 30;
prompt ("Сколько вам лет?");
alert(age);

//Задание 9
let user = {    
  name: "Elizaveta",
  age: 30,
  IsAdmin: true
};

//Задание 9.1
user["sityOfResidence"] = "NizhniyNovgorod";

//Задание 9.2
user.age = 35;

//Задание 9.3
delete user["sityOfResidence"];

//Задание 9.4

let info = prompt ('Какую информацию хотите узнать о пользователе?');
/*console.log(user[info]);*/
alert(user[info]);



//Задание 10
let names = prompt ('Whats is your name ?');
alert (`Hello, ${names}!`)
