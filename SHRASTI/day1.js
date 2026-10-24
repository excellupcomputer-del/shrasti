// add
function add() {
let a = 20;
let b = 5;
console.log(a + b)
}

// remendier
function remendier() {
let a = 20;
let b = 5;
console.log(a%b)
}

// squar
function squar() {
let a = 20;
let b = 5;
console.log(a ** b)
}

// increment
function increment() {
let a = 20;
a++
console.log(a)
}


// assiment operator
function assimentsubtrastion(){
let a = 20;
let b = 5;
console.log(a -= b)
}

function assimentmultiply() {
let a = 20;
let b = 5;
console.log(a *= b)
}

function assimentdivision() {
let a = 20;
let b = 5;
console.log(a /= b)
}


function assimentpersentage() {
let a = 20;
let b = 5;
console.log(a %= b)
}

function agework() {
let name = prompt("Enter your name")
let age = prompt("Enter your age" );

if ( age >= 18 ){
    console.log(" possible",lehal);
}
else{
console.log("not possible",name);
}
}

function marks() {
let marks = prompt("pass")
let attendence = prompt("attendence")

if(marks >= 40 && attendence >= 75 ){
    console.log("yes you can ");
    
}
else{
console.log("you can not");

}
}


function available() {
let email = prompt("enter your email")
let mobile = prompt("enter your mobile number")

if(email == "yes" && mobile == "yes" ){
    console.log("available");
    
}
else{
    console.log(" not available");
    
}
}


function valid() {
let age = prompt("enter your age")
let id = prompt("enter your id pass")

if(age >= 18 && id >= "yes" ){
    console.log("valid");
    
}
else{
    console.log(" not valid");
    
}
}


function logged() {
let login = prompt(" not log in")

if(login == "yes"  ){
    console.log("logged in");
    
}
else{
    console.log(" not logged in");
    
}
}

