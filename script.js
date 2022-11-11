//Task1. Напишите код, который выведет все годы летних олимпиад начиная с 1896 года по 2020.
function getYears() {
    for (var i = 1896; i <= 2020; i = i + 4) {
        if (i == 2020) {
            i = 2021;
        }
        console.log(i);

    }
}
// getYears();


// Task2. Создайте функцию, которая принимает массив, содержащий только числа, и возвращает первый элемент.

// getFirstValue([1, 2, 3]) -> 1

// getFirstValue([80, 5, 100]) -> 80

// getFirstValue([-500, 0, 50]) -> -500


function getFirstValue(arr) {
    console.log(arr[0]);
    return arr[0];
}

getFirstValue([1, 2, 3]);
getFirstValue([80, 5, 100]);
getFirstValue([-500, 0, 50]);


// Task3. Создайте функцию concateString(obj), которая конкатенирует все строковые свойства объекта obj. 

let person = {
    fName: 'Peter',
    lName: 'Jonson'
}

function concateString(obj) {
    console.log(obj.fName + ' ' + obj.lName);
    return obj.fName + obj.lName;
}

concateString(person) // 'Peter Jonson' 


//Напишите функцию camelize(str), которая преобразует строки вида «my-short-string» в «myShortString».
function camelize(str) {
    console.log(str
        .split('-')
        .map((word, index) => index == 0 ? word : word[0].toUpperCase() + word.slice(1))
        .join('')

    )
}


camelize("background-color");
camelize("list-style-image");
camelize("-webkit-transition")

