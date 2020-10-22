// ну тут как обычно комменты
//
// const Name = 'Artem'
// const LastName = 'Kurepin'
// const age = 26


// console.log('Имя: ' + Name + ' Фамилия: ' + LastName)


// Остановился на 50 минуте видео.
// let Year = 2020
//
// const a = 10
// const b = 5

// console.log(a + b)
// console.log('Следующий год: ' + ++Year)

// 4 Типы данных

// const isProgrammer = true
// const Name = 'Artem'
// const age = 26
// let x
//
// console.log(typeof isProgrammer)
// console.log(typeof Name)
// console.log(typeof age)
// console.log(typeof x)
// console.log(typeof null)

// 5 Приоритет операторов

// const fullAge= 26
// const birthYear = 1994
// const currentYear = 2020
//
// const isFullAge = currentYear - birthYear >= fullAge
// console.log(isFullAge)

// 6 Условные операторы

// const courseStatus = 'pending' // ready, fail, pending
//
// if (courseStatus === 'ready'){
//     console.log('Готово')
// }else if (courseStatus === 'pending'){
//     console.log('Разработка')
// }else{
//     console.log('Фейл')
// }
//
// const num1 = 42 // number
// const num2 = '42' // string
//
// console.log(num1 === num2)

// 7 Булевая логика
// && // логическое и

// 8 Функции

// function calculateAge(year){
//     return 2020 - year
// }
//
// //console.log(calculateAge(1994))
//
// function logInfoAbout(name, year){
//     const age = calculateAge(year)
//     console.log('Человек: ' + name +' имеет возраст ' + age)
// }
// logInfoAbout('Артем', 1994)

// 9 Массивы

// const cars =['BMW', 'Audi', 'Mercedes','Tesla']
// //const cars = new Array('BMW', 'Audi', 'Mercedes')
// console.log(cars[2])
// console.log(cars.length)
//
// cars[3] = 'Жигули'
// cars[cars.length] = 'Porsche'
// console.log(cars)
// console.log(cars.length)

// 10 Циклы
// const cars =['BMW', 'Audi', 'Mercedes','Tesla']
//
// for (let i=0; i<cars.length; i++) {
//     const car = cars[i]
//     console.log(car)
// }
//
// for (let car of cars){
//     console.log(car)
// }

// 11 Объекты

// const person = {
//     firsName: 'Artem',
//     lastName: 'Kurepin',
//     year: 1994,
//     languages: ['Ru', 'En'],
//     hasWife: false,
//     greet: function () {
//         console.log('greet')
//     }
// }
//
// console.log(person.firsName)
// console.log(person['lastName'])
// const key = 'languages'
// console.log(person[key])
// person.hasWife = true
// person.isProgrammer = true
// console.log(person)