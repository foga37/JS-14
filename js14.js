console.log('Переписати весь код з лекції (рекурсії, замикання, колбеки)');
console.log('recursion');
//Рекурсія
const arr = [1, null, true, 11, 0];
function recursion(arr, ind = 0) {
   if(arr.length > ind) {
    console.log(arr[ind]);
    recursion(arr, ++ind)
   }
}
recursion(arr);
console.log('---------');
recursion([1, 2, 3, 4, 5, 6]);
console.log('---------');
function recursion1(arr, i = 0) {
    if(arr.length < i) return;
    console.log(arr[i]);
    recursion(arr, ++i)
}
recursion1(arr);
console.log('Closes (замикання)');
// Closes Замикання
function stepper() {
    var num = 0;
    function dec(){
        num++
    }
    function inc(){
        num--
    }
    function getNum() {
        return num
    }
    return {
        dec: dec,
        inc: inc,
        // num: num
        getNum: getNum
    };
}
// console.log(stepper());       // {dec: dec, inc: inc, num: 0} 
// console.log(stepper().num);   // 0
// stepper().dec();              // undefined
// console.log(stepper().num);   // 0
let objStepper = stepper();
console.log(objStepper);
objStepper.dec()
console.log(objStepper.getNum());
console.log('callback');
// callback
function clearHouse(isClean, cb) {
    if(isClean) {
        cb(500)
    } else {
        cb('Не прибрано')
    }
}

function shop(money, cb) {
    const priceJeans = 50;
    if(money >= priceJeans) {
        const rest = money - priceJeans;
        cb(rest)
    } else {
        cb('Не достатньо грошей');
    }
}

function mac(money, cb) {
    const priceOfBurger = 100;
    if(money >= priceOfBurger) {
        const rest = money - priceOfBurger;
        cb(rest)
    } else {
        cb('Надо більше грошей')
    }
}

clearHouse(true, (response) => {
    if (typeof response === 'number') {
        console.log('Я отривам гроші');
        shop(response, (restJeans) => {
            if(typeof restJeans === 'number') {
                console.log('Я купив джинси, і маю ще решту', restJeans);
                mac(restJeans, (restBurger) => {
                    if(typeof restBurger === 'number') {
                        console.log('Я поїв, та маю решту', restBurger);
                    } else {
                        console.log('не маю грошей');
                    }
                })
            } else {
                console.log('Не хватає на джинси');
            }
        })
    } else {
        console.log('Я не отримав гроші');
    }
})

