// primitive Data type
// non-primitive data type (object)

// primitive Data type

// String

// let name = "Rahul";

// //number

// let age = 20;

// let pi = 3.14;

// //bigint

// let bigNumber = 123456789012345678901234567890n;

// //boolean

// let isStudent = true;
// let isAdmin = false;

// undefined

// let x;
// console.log(x);

// let emptyValue = null;

// console.log(emptyValue);

// //unique Data type

// let uniqueId = Symbol("id");

//non-primitive data type

//object

// let student = {
//   name: "Rahul",
//   age: 20,
//   isActive: false,
// };

// console.log(student);

//array

// let fruits = ["apple", "banana", "mango", "orange"];

// console.log(fruits[0]);

// date

// let today = new Date();

// console.log(today);

//map

// let userMap = new Map();

// userMap.set("name", "Rahul");

// userMap.set("age", 20);

// // console.log(userMap.get("age"));

// console.log(userMap.size);

// set

// let uniqueNumbers = new Set([1, 2, 3, 4, 5, 5]);

// uniqueNumbers.add(7);

// console.log(uniqueNumbers);

// Int8Array

// let int8Array = new Int8Array([1, 2, 3, 4, 5, -50, -128]);

// console.log(int8Array[2]);

// Promises

// let promise = new Promise((resolve, reject) => {
//   let success = false;

//   if (success) {
//     resolve("Success");
//   } else {
//     reject("Failed");
//   }
// });

// // promise.then((Response) => console.log(Response));
// promise.catch((error) => console.log(error));

// function fetchData() {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       let dataFetched = false;

//       if (dataFetched) {
//         resolve("Data Fetched");
//       } else {
//         reject("Data Not Fetched");
//       }
//     }, 2000);
//   });
// }

// fetchData()
//   .then((Response) => console.log(Response))
//   .catch((error) => console.log(error));

// JSON (JavaScript Object Notation)

// {
//     "name": "Rahul",

//     "age": 20,

//     "isActive": false
// }

//json Array Notation

// {
//     "std":[
//         {
//             "name":"Rahul",
//             "age":20,
//             "isActive":false
//         },
//         {
//             "name":"amir",
//             "age":20,
//             "isActive":false
//         },
//         {
//             "name":"faysal",
//             "age":20,
//             "isActive":false
//         }
//     ]

// }

//Stringify JSON
// let person = {
//   name: "Rahul",
//   age: 20,
//   isActive: false,
// };

// let jsonData = JSON.stringify(person);

// console.log(jsonData);

//Parse JSON object

// let jsonString = '{"name":"Rahul","age":20,"isActive":false}';

// let obj = JSON.parse(jsonString);

// console.log(obj.age);

// JSON API

// fetch("https://jsonplaceholder.typicode.com/users")
//   .then((response) => response.json())
//   .then((json) => console.log(json));
