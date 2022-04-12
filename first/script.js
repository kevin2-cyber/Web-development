// var car = 100;
// do {
//     console.log(car);
//     car--;
// } while (car > 0);
/*var banku = 5;
        var rice = 7;
         let sum = banku + rice;
        console.log(sum);*/
//document.write(sum)
// window.alert(sum);
//  document.getElementById('kimi').innerHTML = sum;
/*if (sum < banku) {
    window.alert(sum);
} else {
    window.alert(banku);
}

if (1 > 5) {
    console.log("hello");
} else if (5 > 1) {
    console.log("Hii");
} else {
    console.log("World");
}*/
/*var day = "Monday";
switch (day) {
    case "S": "Sunday";
    break;
    case "T": "Tuesday";
    break;
    case "W": "Wednesday";
    break;
    case "Th": "Thursday";
    break;
    case "M": "Monday";
    break;
    default:
    "Saturday";
    break;
}*/
/* var num = 1;
 while (num <= 100) {
     console.log(num);
     num++;
 }*/

/*
function sum(a,b) {
    return a + b;
}
*/

// Bitwise operators
//6 | 6
//6 & 6
/*var car = 100;
while (car > 0) {
    console.log(car);
    car--;
}*/
// var num = 100;
// do {
//     console.log(num);
//     num--;
// } while (num > 0);

// var arrayNam = [20, 40, 50.8, "hello"];
// var arrayName = [30, "hi", "world"];
// console.log(arrayNam.concat(arrayName));

// console.log(arrayNam.pop());
// console.log(arrayNam.join());

// console.log(arrayNam.toString());

// function isValidName() {}

// const csv_to_array = (data, delimiter = ',', omitFirstRow = false) => data
//     .slice(omitFirstRow ? data.indexOf('\num') + 1 : 0)
//     .split('\num').map(v => v.split(delimiter));

// console.log(csv_to_array('a,b\nc,d'));
// console.log(csv_to_array('a;b\nc;d', ';'));
// console.log(csv_to_array('head1,head2\na,b\nc,d', ',', true));

// function celsiusToFahrenheit(celsius) {
//     var celsTemp = celsius;
//     var celsToFahr = celsTemp * 9 / 5 + 32;
//     var message = celsTemp + '\xB0C is ' + celsToFahr + ' \xB0F.';
//     console.log(message);
// }

// function fahrenheitToCelsius(fahrenheit) {
//     var fahrTemp = fahrenheit;
//     var fahrToCel = (fahrTemp - 32) * 5 / 9;
//     var message = fahrTemp + '\xB0F is ' + fahrToCel + '\xB0C.';
//     console.log(message);
// }

// celsiusToFahrenheit(20);


function testPrime(num) {

    if (num === 1) {
        return false;
    } else if (num === 2) {
        return true;
    } else {
        for (var x = 2; x < num; x++) {
            if (num % x === 0) {
                return false;
            }
        }
        return true;
    }
}

console.log(testPrime(15));