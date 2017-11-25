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

var sum = 0;
function SumOfOddNumbers1To5000() {
    for (let i = 1; i < 5001; i++) {
        if (i % 2 === 1) {
            sum += i;
        }
    }
    console.log('the sum of all values is ' + sum);
}
// SumOfOddNumbers1To5000()
// =======================================

var arr = [1, 3, 5, 7, 9, 13];
function IteratingArray() {
    for (let i = 0; i < arr.length; i++) {
        console.log(arr[i]);
    }
}
// IteratingArray()
// =======================================

var arr = [-3, 3, 5, 7];
var max = 0;
function FindMaxValue() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > max) {
            max = arr[i]
        }
    }
    console.log('the highest value is ' + max);
}
// FindMaxValue()
// =======================================

var arr = [1, 3, 5, 7, 20];
var sum = 0;
function FindAverage() {
    for (let i = 0; i < arr.length; i++) {
        sum += arr[i];
    }
    let avr = sum / arr.length;
    console.log('the average is ' + avr);
}
// FindAverage()
// =======================================

var newArr = [];
function ArrayWithOddNumbers() {
    for (let i = 1; i < 256; i++) {
        if (i % 2 === 1) {
            newArr.push(i);
        }
    }
    console.log(newArr);
}
// ArrayWithOddNumbers()
// =======================================

var Y = 12;
var count = 0;
var arr = [16,5,28,12,3,79,10,2,6,9]
function GreaterThanY() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > Y) {
            count++;
        }
    }
    console.log('there are ' + count + ' values greater than Y');
}
// GreaterThanY()
// =======================================

var x = [1,5,10,-2];
function SquareValues() {
    for (let i = 0; i < x.length; i++) {
        x[i] *= x[i]
    }
    console.log(x);
}
// SquareValues()
// =======================================

var arr = [1,-5,2,-30,3,-9,4,-86];
function NegativeToZero() {
    for (let i = 0; i < arr.length; i++) {
        if (arr[i] < 0) {
            arr[i] = 0;
        }
    }
    console.log(arr);
}
// NegativeToZero()
// =======================================

var arr = [1,5,10,-2,13];
var sum = 0;
var min = arr[0];
var max = arr[0];
function MinMaxAverage() {
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
// MinMaxAverage()
// =======================================

var arr = [1,5,10,7,-2];
function ShiftArray() {
    for (let i = 0; i < arr.length; i++) {
        arr[i] = arr[i+1];
    }
    arr[arr.length - 1] = 0;
    console.log(arr);
}
// ShiftArray()
// =======================================

var arr = ['coding', -5, 213];
function NegativeToString() {
    for (let i = 0; i < arr.length; i++) {
        if(arr[i] < 0) {
            arr[i] = 'dojo';
        } 
    }
    console.log(arr);
}
// NegativeToString()
// =======================================

var randArr = [];
function RandomArray() {
    for (let i = 0; i < 10; i++) {
        randArr.push(Math.floor(Math.random() * 101));
    }
    console.log(randArr);
}
// RandomArray()
// =======================================

var arr = [12,11,10,9,8,7];
var temp;
function SwapTwoValues() {
    temp = arr[0];
    arr[0] = arr[arr.length - 1];
    arr[arr.length - 1] = temp;
    console.log(arr);
}
// SwapTwoValues()
// =======================================

var arr = [1,2,3,4,5];
function ReverseArray() {
    for (let i = 0; i < Math.floor(arr.length/2); i++) {
        var temp = arr[i];
        arr[i] = arr[arr.length - 1 - i];
        arr[arr.length - 1 - i] = temp;
    }
    console.log(arr);
}
// ReverseArray()
// =======================================

