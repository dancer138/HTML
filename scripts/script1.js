
let favoriteFood = "пицца";
favoriteFood ="суши";
const planet = "земля";
const birthday = "12 мая";
let age =  "Вы принимаете файлы  cookie!"
let $ = 1;
let _ = 15;
let n = 123;
n = 12.345;
let isSunny = true;
let isRaining = false;
if (isRaining) {
    console.log("Можно идти гулять!");
}
alert(age); // dsdtltn "undefined"

let box = null;
let item ={
    title: "книга",
    pages:200,
    availeble: true
}
let temperature=25;
if(temperature>25){
    console.log('|на улице тепло')
}


let number = 5;

if(number < 0){
    console.log('плохое число(цифра)')
} else {
    console.log('хорошое число(цифра)')
}


console.log('test javascript file');


let grade=9;
if(grade>=9){
    console.log('отлично')
}
else if(grade>=7){
    console.log('хорошо')
}
else if(grade>=5){
    console.log('удовлетворительно')
}
else{
    console.log('нужно подтянуться')

}

let temp=20;
if(temp>=18){
    console.log('тепло')
}
else if(temp>=13){
    console.log('нормально')
}
else if(temp>=5){
    console.log('прохладно')
}
else{
    console.log('холодно')

}
let isOnlain = true;
let status = isOnlain ? "A" :"B";
for(let i = 1; i <= 5; i++) {
    console.log("Повтор " + i);

}
for(let i = 2; i <= 10; i+=2) {
    console.log("Повтор " + i);
    
}
for(let i = 5; i <= 15; i+=1) {
    console.log("Повтор " + i);
    
}
let p =1;
while (p <= 3){
    console.log("Шаг" + p);
    p++;
}
    
let i =10;
while (i <= 11){;
    console.log("Шаг" + i);
    i++;
}


    let password;
    do {
        password = prompt("Введите пароль:");
    } while (password !== "1234");
    alert ("подтверждено");
    console.log("пароль принят!");

    let fruits = ["яблоко", "бананы","груша"];
    for (let fruit of fruits) {
        console.log(fruit);
    }
    let animals = ["лиса", "влад","сокол"];
    for (let animals of animals) {
        console.log(animals);
    }
    for (let i = 1; i <= 10; i++){
        console.log('3 x ${i} = ${3 * i}');
    }
    let fruitWord = "Анас";
    let fruitWordCount = 0;
    for(let letter of fruitWord.toLower)
 
    
