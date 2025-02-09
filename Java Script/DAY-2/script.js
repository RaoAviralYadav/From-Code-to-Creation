console.log("Good evening everyone")

//assignment operator
var a = 3
a+= 4 //a = a+4
console.log(a)

//ternary operators
let maths_marks = 80
a = (maths_marks > 39)? "Pass": "Fail";
console.log(a);

//comma operators

//if-else statement
var math_mark = 70;
if (40<math_mark<100){
    if (math_mark<80){
        console.log("Average student")
    }
}
else{
    console.log("fail")
}
//if-else if-else statements
let day = 1; //monday-1, saturday -6, sunday-7
if (day == 1){
    console.log("mood = annoyed");
    
}
else if (day == 2){
    console.log("Adjusted");
}
else if (day == 3){
    console.log("Adjusted");
}
else if (day == 4){
    console.log("Adjusted");
}
else if (day == 6){
    console.log("mood = happy");
}
else if (day == 7){
    console.log("mood = super happy");
}
else {
    console.log("it's not a day")
}

//nested if-else
var math_mark = 45;
if (40<math_mark<100){
    if (math_mark<60){
        console.log("Average student");
    }
    else if (60<math_mark<80){
        console.log("Lazy student");
    }
}
else{
    console.log("fail");
}

// example-2
var b = 5

//switch case statements

//string
var mystr= "I am a student of IITM";
a = mystr[0];
console.log(a);
let d = mystr.slice(5, 11);
console.log(d);

//for loop
var x;
for (x=3; x<=10; x++){
    console.log("Hello");
}

//while loop
var x=4;
while (x<9){
    console.log("Hi");
    x++;
}

//do-while loop
let i = 2;
do{
    var text = "the value:" + i;
    console.log(text);
    i++;
}
while(i<10);

//for-of loop
/*for (condition of value){

}*/

//for-in loop
/*for (condition in value){

}*/

//array
let p = ["sam", "stemonef", 8, 12];
let myArr=['Pranali', 'aparna', 'mayukh', 'dwaipayan'];

let nestedArr = [["orange", "grapes", "banana"], 1, 30, 76, 46, "stemonef"]
let nA1 = [myArr, nestedArr, [1, 2, 3,4]]

//accessing arrays with index
var mydata = p[5];
console.log(mydata);

//accessing the multidimenasional arrays with index
let myar= [[1,2,3], [4,5,6], [7,8,9]];
var mydata = myar[1][1];
console.log(mydata);

//manipulating arrays with push()
nestedArr.push(['happy', 'sad']); //[["orange", "grapes", "banana"], 1, 30, 76, 46, "stemonef", ['happy', 'sad']]
n = nestedArr[6][1]
console.log(n)
//manipulating arrays with pop()
y = nestedArr.pop();//[["orange", "grapes", "banana"], 1, 30, 76, 46, "stemonef]
y1 = y[3];
console.log(y1)
//manipulating arrays with shift()
x = nestedArr.shift();//[1, 30, 76, 46, "stemonef"]
n = x[0]
console.log(n)

var ourArray = [1,2,3,4,5,6,7,8];
var array = ourArray.unshift([9]); //[9,1,2,3,4,5,6,7,8]
var a1 = array[0];
console.log(a1);