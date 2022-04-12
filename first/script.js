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


// function testPrime(num) {

//     if (num === 1) {
//         return false;
//     } else if (num === 2) {
//         return true;
//     } else {
//         for (var x = 2; x < num; x++) {
//             if (num % x === 0) {
//                 return false;
//             }
//         }
//         return true;
//     }
// }

// console.log(testPrime(3));

// function secondGreatestLowest(array_num) {
//     array_num.sort(function(x, y) {
//         return x - y;
//     });
//     var uniqa = [array_num[0]];
//     var result = [];

//     for (var index = 1; index < array_num.length; index++) {
//         if (array_num[index - 1] !== array_num[index]) {
//             uniqa.push(array_num[index]);
//         }
//     }
//     result.push(uniqa[1], uniqa[uniqa.length - 2]);
//     return result.join(',');
// }

// console.log(secondGreatestLowest([21, 35, 69, 83, 125]));

// function checkEven(num) {
//     return num % 2 == 0;
// }
// console.log(checkEven(2));  
// console.log(checkEven(3));

// function factors(num) {
//     var all_factors = [],
//         index;

//     for (index = 1; index <= Math.floor(Math.sqrt(num)); index += 1)
//         if (num % index === 0) {
//             all_factors.push(index);
//             if (num / index !== index)
//                 all_factors.push(num / index);
//         }
//     all_factors.sort(function(x, y) {
//         return x - y;
//     }); // numeric sort
//     return all_factors;
// }

// console.log(factors(15)); // [1,3,5,15]


const vowels = ["a", "e", "i", "o", "u"];

function check_vowels(str) {
    var vowel_arr = [];

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            vowel_arr.push(letter);
        }
    }
    return vowel_arr;
}
console.log(check_vowels("cricket")); // ['i','e']