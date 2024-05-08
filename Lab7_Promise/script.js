//2.	Создать промис myPromise, который через 3 секунды генерирует случайное число.
// Результат выполнения промиса (сгенерированное число) вывести в консоль.
let myPromise=new Promise(function(resolve,reject)
{
    setTimeout(() => {
        resolve(Math.random());
    }, 3000);
})
myPromise.then(result=>console.log(result))
3.	Создать функцию, которая принимает параметр delay и возвращает промис myPromise (промис из предыдущей задачи).
Сгенерируйте 3 числа (т.е. необходимо вызвать функцию 3 раза) и только после
того, как все промисы выполняться успешно, вывести числа в консоль. Использовать Promise.all.
function generatePromise(delay)
{
    return new Promise(function (resolve,reject)
    {
        setTimeout(()=>
        {
            resolve(Math.random())
        },delay)
    })
}

let promises=[generatePromise(1000),generatePromise(2000),generatePromise(3000)]
Promise.all(promises).then(result=>console.log(result))

let pr = new Promise((res,rej) => {
    rej('ku')
})

pr
    .then(() => console.log(1))
    .catch(() => console.log(2))
    .catch(() => console.log(3))
    .then(() => console.log(4))
    .then(() => console.log(5))
//Создайте промис, который выполнился успешно, результат выполнения промиса число 21. Вызовите цепочку методов then.
// Первый вызов метода then выводит в консоль результат выполнения предыдущего промиса.
// Второй вызов метода then выводит в консоль результат выполнения предыдущего промиса умноженного на 2.
// В результате в консоль последовательно должны выводиться числа 21 и 42.
let myPromise5= new Promise(function (resolve,reject){
    resolve(21);
}).then((result)=>{
    console.log(result)
    return result;
}).then((result)=>{
    console.log(result*2)
})
async function myPromis6()
{
    return 21;
}
myPromis6().then((result)=>{
    console.log(result)
    return result;
}).then((result)=>{
    console.log(result*2)
})