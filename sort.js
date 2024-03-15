let tOrigin = [-511, 1233, 54, -7, 6, 8, 9, 11, -2, 5, -10];
let t = tOrigin.slice();

function callQuick (arr, i, j){
    let iOrigin=i;
    let jOrigin=j;
    while (i!=j) {
        if ((arr[i]-arr[j])/(i-j)<0){
            //the if condition is differential function in math, iff negative, the elements are in wrong position
            i=j+i;
            j=i-j;
            i=i-j;
            arr[i]=arr[i]+arr[j];
            arr[j]=arr[i]-arr[j];
            arr[i]=arr[i]-arr[j];     
        }
        if (i<j) {
            j--;
        } else {
            j++
        }
    }
    if (iOrigin<jOrigin) {
        if ((i-1)>0) {callQuick(arr, 0, i-1)};
        if ((i+1)<jOrigin) {callQuick(arr, i+1, jOrigin)};
    }  
}

function quickSort (arr){
    let i=0;
    let j=arr.length-1;
    callQuick (arr, i, j)
    //return arr
}

//Copied function to help with design interface
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayMessage(){
    let theElem = document.getElementById("elem").value;
    if (theElem){
        document.getElementById("showInputHere").innerHTML = "Az utoljára hozzáadott elem: " + theElem;
        t.push(theElem);
        tOrigin.push(theElem);
         
    }
    else{
        document.getElementById("showInputHere").innerHTML = "Számot kell beírni, ami a tömb legutolsó eleme lesz.";
    }
    document.getElementById("elem").value="";
}
function displayArray(){
    if (tOrigin.length!=0){
        document.getElementById("showArray").innerHTML = ("Az eredeti tömb: " + tOrigin);
    } else {
        document.getElementById("showArray").innerHTML = ("A tömb üres!!!");   
    }
}

function deleteArray(){
    t=[];
    tOrigin=[];
    document.getElementById("showInputHere").innerHTML = "Minden törölve lett.";
}

function sortArray(){
    quickSort(t);
    if (tOrigin.length!=0){
        document.getElementById("showSortedArray").innerHTML = ("A rendezett tömb: " + t);
    } else {
        document.getElementById("showSortedArray").innerHTML = ("A rendezett tömb üres!!!");   
    }
}
