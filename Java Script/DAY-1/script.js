console.log("Hello all the participants")
// this is us, trying to see if we can create an inline comment
/*1
2
3
4
5
6
7
8
*/
var x=10;
var x=20;
var y=5;
var a=x+y;
console.log(a);
let z = 30;
const b = 20;
console.log(b);

var Student = "Samriddhi";
var sTudent = "Participants";
console.log(Student);
console.log(sTudent);
var Numbers = 12;
var boolean = true;

//arithmetic operators
var sum = 10+10;
console.log(sum)
var diff = 66-33;
var multiplication = 3*4;
var division = 60/10;

console.log(diff);
console.log(multiplication);
console.log(division);

var d;
d= 8+5-3+8*7+9/3;
console.log(d)

var deci1 = 5.7;
var deci2 = 6.8;
console.log(deci1+deci2);

//incrementing
var num = 87;
console.log(num);
num++;
console.log(num);
// ++ : num = num+1
num--; //-- : num=num-1
console.log(num);

var rem = 11
console.log(rem%3)

//compound assignment with the augmented arithmentic
var p= 13;
var q= 14;
var r= 15;

p+=3;//p = p+3
console.log(p);
q-=7;
console.log(q);
r*=8;
console.log(r);

// arithmentic: +, -, *, /, ++, --, +=, -=, *=, /=
// assignment: =, ==
// comparing: >, <, <=, >=
// (1,2,3,4,5) * 

//strings
var name = "Samriddhi Bagchi"
var line1 = "I am a \"student\" of IITM";
console.log(line1);

var str = "<a href= \"https://meet.google.com/hru-hqvu-bvw\" target=\"_blank\">Link to gmeet</a>"
console.log(str)

//double quotes:
var line1 = "I am a \"student\" of IITM";
console.log(line1);
//single
var line2 = "I am a \'student\' of IITM";
console.log(line2);

var line3 = "I am a \\student\\ of IITM";
console.log(line3);

//newline: \n
var line4 = "I am a \\student\\ of IITM, i am learning JS, \ni don't like Maths 2";
console.log(line4);
//carriage return: \r
var line5 = "I am a \\student\\ of IITM, i am learning JS, \ri don't like Maths 2";
console.log(line5);
// new tab: \t
var line6 = "I am a \\student\\ of IITM, i am learning JS, \ti don't like Maths 2";
console.log(line6);
//back space: \b
var line7 = "I am a \\student\\ of IITM, i am learning JS, \bi don't like Maths 2";
console.log(line7);


// concatenating strings

var mystr1 = "have to write html code as string?";
//           0123456
var mystr2 = "let's see what happens";
var mystr3 = mystr1 + " " + mystr2;
console.log(mystr3);

var mystr4 = "i am enjoying the JS D-1, i am an angel"
mystr1+= mystr4;
console.log(mystr1);

//finding the length of a string
var length_mystr1 = mystr1.length;
console.log(length_mystr1)

//bracket notations
var letter_mystr1 = mystr1[70];
console.log(letter_mystr1)

//nth to last character
var s=mystr1[length_mystr1-4];
console.log(s);


let x1 = 6;
let y1 = "6";
console.log( x1 == y1);