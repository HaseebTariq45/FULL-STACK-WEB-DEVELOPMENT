let a = " N   Hello    ";

console.log(a.trim());

console.log(a.toLowerCase());
console.log(a.toUpperCase());

let str = "ILoveCoding";

console.log(str.toUpperCase().trim());
console.log(str.replace("Love", "Hate"));
console.log(str.repeat(3));

let students= ["Haseeb", "Tariq"];
console.log(students);
let nums = [2,4,6,8];
console.log(nums);
console.log("Lenght is:",nums.length);
console.log(typeof nums);

let info = ["aman", 72, "Dead"];
console.log(info);
console.log("Length of info array is:",info.length);

students.push("Don");
console.log(students);
students.pop();
console.log(students);
students.unshift("Don");
console.log(students);
students.shift();
console.log(students);

console.log(students.slice(0,2));

let primary = ["red", "yellow", "blue"];
console.log(students.concat(primary));
students = students.concat(primary);
console.log(students);

console.log(students.reverse());
console.log(primary);
console.log(primary.splice(1));
console.log(primary);
primary.splice(1,0,"green");
console.log("Adding at position 1",primary);

primary.splice(1,1,"brown");
console.log(primary);
primary.push("voilet");
console.log(primary); 
primary.sort();
console.log(primary);
let num = [12,34,13,12343,56,24,1,2,35,23,1,265];

num.sort();
console.log(num);


let month = [`january`, `july`, 'march','august'];
console.log("start:",month);

month.splice(0,1);
console.log(month);
month.splice(1,0,"june");
console.log(month);

let array = [[2,4], [1,2],[5,6]];
console.log(array);

console.log("Printing odd numbers:");
for( i=1; i<=16; i++){
    if (i%2==0) {
        
    }
    else{
        console.log(i);
    }
}
console.log("Printing even numbers:");
for( i=1; i<=16; i++){
    if (i%2==0) {
        console.log(i);
    }
}

console.log('Infinite numbers:');
for (let i = 5; i<=50; i=i+5) {
    
    console.log(i);
    
}
let i=1;
while (i<=5) {
    console.log(i);
    i++;
}

console.log(primary);

for(i=0; i<primary.length; i++){
    console.log(i,"=",primary[i]);
}
console.log(primary);

for(i of primary){
    console.log(i);
}
for(i of "HAseeb"){
    console.log(i);
}

