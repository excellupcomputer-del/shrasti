function Internet() {
let speed = prompt("Internet speed checker")

if (speed >= 100) {
    console.log("Ultra fast🚀 - 4k streaming karo");

} else if (speed >= 50 && speed <= 99) {
    console.log("Fast ⚡- Smooth browsing");

} else if (speed >= 10 && speed <= 49) {
    console.log("Average 🌐- Normal use");

} else {
    console.log("Slow 🐢- Network check karo");

}
}

function screentime() {
let daily = prompt("Daily Screen time")

if (daily >= 8) {
    console.log("Too much screen time 😵 - break lo");

}
else if (daily <= 5 && daily >= 7) {
    console.log("High usage 📱- Thoda kaam karo");

}
else if (daily <= 2 && daily >= 4) {
    console.log("Normal usege 🙂");

}
else {
    console.log("Healthy usage 💚");

}
}


// function () {
// let daynumber = Number(prompt("Day Finder"));
// switch (daynumber) {
//     case 1:
//         console.log("Monday");
//         break;

//     case 2:
//         console.log("Tuesday");
//         break;

//     case 3:
//         console.log("Wednesday");
//         break;

//     case 4:
//         console.log("Thusday");
//         break;

//     case 5:
//         console.log("Friday");
//         break;

//     case 6:
//         console.log("Saturday");
//         break;

//     case 7:
//         console.log("Sunday");
//         break;

//     default:
//         console.log("invalid day");

// }


