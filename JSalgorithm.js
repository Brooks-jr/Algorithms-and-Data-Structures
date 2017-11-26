function Print1To255() {
    for (let i = 1; i < 256; i++) {
        console.log(i);
    }
}
// Print1To255()
// =======================================

function OddNumbers1To1000() {
    for (let i = 1; i < 1001; i++) {
        if (i % 2 === 1) {
            console.log(i);
        }
    }
}
// OddNumbers1To1000()
// =======================================


function SumOfOddNumbers1To5000() {
var sum = 0;
    for (let i = 1; i < 5001; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    console.log('the sum of all values is ' + sum);
}
// SumOfOddNumbers1To5000()
// =======================================

function IteratingArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// IteratingArray([1, 3, 5, 7, 9, 13])
// =======================================


function FindMaxValue() {
var max = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log('the highest value is ' + max);
}
// FindMaxValue([-3, 3, 5, 7])
// =======================================


function FindAverage(arr) {
var sum = 0;
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avr = sum / arr.length;
    console.log('the average is ' + avr);
}
// FindAverage([1, 3, 5, 7, 20])
// =======================================


function ArrayWithOddNumbers() {
var newArr = [];
    for (let i = 1; i < 256; i++) {
        if (i % 2 === 1) {
            newArr.push(i);
        }
    }
    console.log(newArr);
}
// ArrayWithOddNumbers()
// =======================================


function GreaterThanY(arr) {
var Y = 12;
var count = 0;
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    console.log('there are ' + count + ' values greater than Y');
}
// GreaterThanY([16, 5, 28, 12, 3, 79, 10, 2, 6, 9])
// =======================================

function SquareValues(x) {
    for (let i = 0; i < x.length; i++) {
        x[i] *= x[i]
    }
    console.log(x);
}
// SquareValues([1, 5, 10, -2])
// =======================================

function NegativeToZero(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}
// NegativeToZero([1, -5, 2, -30, 3, -9, 4, -86])
// =======================================


function MinMaxAverage(arr) {
var sum = 0;
var min = arr[0];
var max = arr[0];
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
        sum += arr[i];
    }
    let avr = sum / arr.length;
    console.log(min + ' is the lowest value in array');
    console.log(max + ' is the highest value in array');
    console.log(avr + ' is the average of all values in array');

}
// MinMaxAverage([1, 5, 10, -2, 13])
// =======================================

function ShiftArray(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i + 1];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
}
// ShiftArray([1, 5, 10, 7, -2])
// =======================================

function NegativeToString(arr) {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 'dojo';
        }
    }
    console.log(arr);
}
// NegativeToString(['coding', -5, 213])
// =======================================


function RandomArray() {
var randArr = [];
    for (let i = 0; i < 10; i++) {
        randArr.push(Math.floor(Math.random() * 101));
    }
    console.log(randArr);
}
// RandomArray()
// =======================================


function SwapTwoValues(arr) {
var temp;
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
}
// SwapTwoValues([12, 11, 10, 9, 8, 7])
// =======================================

function ReverseArray(arr) {
    for (let i = 0; i < Math.floor(arr.length / 2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
}
// ReverseArray([1, 2, 3, 4, 5])
// =======================================

// 
// function InsertArray(x, y, arr) {
// var temp;
// var temp2;
//     if (y > arr.length - 1) {
//         arr.push(x);
//     } else {
//         temp = arr[arr.length - 1];
//         temp2 = arr[y];
//         arr[y] = x;
//         arr[y + 1] = temp2;
//         arr.push(temp);
//     }
//     console.log(arr);
// }
// InsertArray(3, 2, [1, 2, 4, 5] )

function InsertArry2(x,y, arr) {
    arr.push(0);
    for (let i = arr.length - 1; i > y; i--) {
        arr[i] = arr[i-1];
    }
    arr[y] = x;
    console.log(arr);
}
// InsertArry2(9, 2, [3,6,12,18])
// =======================================

function RemoveNegatives(arr) {
    
}
// RemoveNegatives([0, -1, 2, -3, 4, -5, 6])
