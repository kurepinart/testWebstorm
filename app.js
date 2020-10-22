//function palindrom(str){ // первый стремный вариант
// const palindrom = str => {
//     str = str.toLowerCase()
//     // let str2 = str.split('')
//     // str2 = str2.reverse()
//     // str2 = str2.join('')
//     // if (str == str2) return true
//     // else return false
//     //
//     // return str2
//     return str == str.split('').reverse().join('')
// }
// console.log(palindrom('abba'))

// let fileInput = document.querySelector('#file-input');
//
// fileInput.addEventListener('change', function (event) {
//     //onchange
//     let file = fileInput.files[0]
//     let reader = new FileReader()
//     reader.onload = function (event) {
//         //console.log(reader.result)
//         palindrom(reader.result.split('\r\n'))
//     }
//     reader.readAsText(file)
//
// })
//
// function palindrom(arr){
//     for(let i=0; i< arr.length; i++){
//         console.log('.')
//         str2 = arr[i].toLowerCase().split('').reverse().join('')
//         if (str2 == arr[i]){
//             console.log(arr[i])
//         }
//     }
// }

// function sum (a, b){
//     if (b){
//         return a + b
//     }
//     return function (c){
//         return a + c
//     }
// }

// function sum(...args){
//     if(args.length ===2)
//     {
//         return args[0]+args[1]
//     }
//     return function (b){
//         return args[0]+b
//     }
// }
//
// console.log(sum(6,4))

// ======================


const person = {
    firstName: 'Max',
    logName(){
        console.log('Name:', this.firstName)
    }
}

person.logName()