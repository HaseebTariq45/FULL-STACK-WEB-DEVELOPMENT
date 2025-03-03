// let a = " N   Hello    ";

// console.log(a.trim());

// console.log(a.toLowerCase());
// console.log(a.toUpperCase());

// let str = "ILoveCoding";

// console.log(str.toUpperCase().trim());
// console.log(str.replace("Love", "Hate"));
// console.log(str.repeat(3));

// let students= ["Haseeb", "Tariq"];
// console.log(students);
// let nums = [2,4,6,8];
// console.log(nums);
// console.log("Lenght is:",nums.length);
// console.log(typeof nums);

// let info = ["aman", 72, "Dead"];
// console.log(info);
// console.log("Length of info array is:",info.length);

// students.push("Don");
// console.log(students);
// students.pop();
// console.log(students);
// students.unshift("Don");
// console.log(students);
// students.shift();
// console.log(students);

// console.log(students.slice(0,2));

// let primary = ["red", "yellow", "blue"];
// console.log(students.concat(primary));
// students = students.concat(primary);
// console.log(students);

// console.log(students.reverse());
// console.log(primary);
// console.log(primary.splice(1));
// console.log(primary);
// primary.splice(1,0,"green");
// console.log("Adding at position 1",primary);

// primary.splice(1,1,"brown");
// console.log(primary);
// primary.push("voilet");
// console.log(primary); 
// primary.sort();
// console.log(primary);
// let num = [12,34,13,12343,56,24,1,2,35,23,1,265];

// num.sort();
// console.log(num);


// let month = [`january`, `july`, 'march','august'];
// console.log("start:",month);

// month.splice(0,1);
// console.log(month);
// month.splice(1,0,"june");
// console.log(month);

// let array = [[2,4], [1,2],[5,6]];
// console.log(array);

// console.log("Printing odd numbers:");
// for( i=1; i<=16; i++){
//     if (i%2==0) {
        
//     }
//     else{
//         console.log(i);
//     }
// }
// console.log("Printing even numbers:");
// for( i=1; i<=16; i++){
//     if (i%2==0) {
//         console.log(i);
//     }
// }

// console.log('Infinite numbers:');
// for (let i = 5; i<=50; i=i+5) {
    
//     console.log(i);
    
// }
// let i=1;
// while (i<=5) {
//     console.log(i);
//     i++;
// }

// console.log(primary);

// for(i=0; i<primary.length; i++){
//     console.log(i,"=",primary[i]);
// }
// console.log(primary);

// for(i of primary){
//     console.log(i);
// }
// for(i of "HAseeb"){
//     console.log(i);
// }

// const student = {
//     age: 20,
//     name :'haseeb',
//     marks:94.6,
// }
// console.log(student["age"]);
// console.log(student.name);
// student.name = "Don";
// console.log(student);
// delete student.age;
// console.log(student);

// post = {
//     username : "@haseeb_awan45",
//     content : "First post",
// }
// console.log(post);

// console.log(Math.pow(2,5));
// console.log(Math.floor(5.65));
// console.log(Math.ceil(5.1));
// num  = Math.random()*100;
// console.log(Math.ceil(num));

// function add(){
//     num1 = 5;
//     num2 = 2;
//     sum = num1 +  num2;
//     console.log(sum);
// }


// add();

// function add(num1, num2){
    
//     sum = num1 +  num2;
//     console.log(sum);
// }

// add(2,2);
// function roll(){
    
    
//     console.log(Math.floor(Math.random()*6+1));
// }

// roll();
// n=5;
// for(i=0; i<10; i++)
// {
//     console.log(n);
//     n+=5;
// }

// let sum = function(a,b){
//     return a+b;
// }

// console.log(sum(2,3));

// console.log(a);
// try{
//     console.log(a);
// }
// catch(err)
// {
//     console.log("a not found");
    
// }

// setTimeout(() => {
//     console.log("Haseeb");
// }, 2000);

// setTimeout(() => {
//     console.log("Tariq");
// }, 4000);

// setInterval(() => {
//     console.log("Tariq");
// }, 1000); 

// square = (n)=> {
//     console.log(n*n);
    
// }

// square(5);

// setInterval(() => {
//     console.log("Tariq");
// }, 1000);

// setTimeout(() => {
//     setInterval(() => {
//         console.log("Tariq");
//     }, 1000);
// }, 10000);

// setTimeout();

// let id = setInterval(() => {
//     console.log("Hello World!");
// }, 2000);

// setTimeout(() => {
//     clearInterval(id);
//     console.log("F");
// }, 10000);


let arr = [1,2,3,4,5,6,7,8,9,10];

// let print = function (el){
//     console.log(el);
// }

// arr.forEach(function (el){ 
//     console.log(el);
// });

// arr.forEach( (el) =>{ 
//     console.log(el);
// });

// let ans = arr.filter((el)=>{
//     return el%2==0;
// });

// console.log(ans);

// let avg = arr.map((el)=>{
//     return el*2;
// })
// console.log(avg);
// let ans = arr.some((el)=>{
//     return el%2==0;
// })
// console.log(ans);
// let avg2 = arr.every((el)=>{
//     return el%2==0;
// })
// console.log(avg2);
// let reduce = arr.reduce((acc,curr)=>{
//     return acc+curr;
// },0)
// console.log(reduce);
//   even  = arr.every((el)=>{
//     return el%10==0;
//   })
//   console.log(even);
  
// min = arr.reduce((acc,curr)=>{
//     if(acc<curr){
//         return acc;
//     }
//     else{
//         return curr;
//     }
// })
// console.log(min);

// let sum = function add(a, b=10){
//     return a+b
// }
// console.log(sum(10));
// console.log(Math.min(...arr));
// console.log(Math.max(...arr));
// console.log(Math.random());
// console.log(Math.floor(Math.random()*100));
// console.log(Math.ceil(Math.random()*100));
// console.log(Math.round(Math.random()*100));
