

var arr = [88, 3, 5, 2, 23, 1, 9, 10, 7, 90];

//Bubble
function BubbleSort(arr) {
    var temp;
    for (let i = 0; i < arr.length; i++) {
        for (let x = 0; x < arr.length; x++) {
            if (arr[x] > arr[x + 1]) {
                temp = arr[x];
                arr[x] = arr[x + 1];
                arr[x + 1] = temp;
            }
        }
    }
    return arr;
}
BubbleSort(arr);
// ===========================================================

//Selection
function SelectionSort(arr) {
    var temp;
    for (let i = 0; i < arr.length; i++) {
        var min = i;

        for (let x = i + 1; x < arr.length; x++) {
            if (arr[x] < arr[min]) {
                min = x;
            }
        }
        if (min !== i) {
            temp = arr[i];
            arr[i] = arr[min];
            arr[min] = temp;
        }
    }
    return arr;
}
SelectionSort(arr);
// ===========================================================

//Insertion
// function InsertionSort(arr) {
//     for (let i = 1; i < arr.length; i++) {
//         var x = i;
//         while (x > 0 && arr[x - 1] > arr[i]) {
//             arr[x] = arr[x - 1];
//             x -= 1;
//         }
//         arr[x] = arr[i];
//     }
//     return arr;
// }
// InsertionSort(arr);
// ===========================================================

//Merge
function MergeSort(arr) {
    
}
// ===========================================================

//Quick