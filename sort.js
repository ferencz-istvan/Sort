let tOrigin = [6, 8, 9, 11, -2, 5, -10];
let t= tOrigin.slice();

function callQuick (arr, i, j){
    let iOrigin=i;
    let jOrigin=j;
    while (i!=j) {
        //console.log(arr);
        //console.log('i: '+ i + ' j: '+ j);
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
    return arr
}

//Copied function to help with design interface
///////////////////////////////////////////////////////////////////////////////////////////////////////////////////////

function displayMessage(){
    let theElem = document.getElementById("elem").value;
    //let containerArray=containerArray.push( document.getElementById("elem").value) ;
    if (theElem){
        document.getElementById("showinputhere").innerHTML = "A hozzáadott elem: " + theElem;
        tOrigin.push(theElem);
        t.push(theElem);  
    }
    else{
        document.getElementById("showinputhere").innerHTML = "Számot kell beírni, ami a tömb legutolsó eleme lesz.";
    }
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
}

function sortArray(){
    quickSort(t);
    if (tOrigin.length!=0){
        document.getElementById("showSortedArray").innerHTML = ("A rendezett tömb: " + t);
    } else {
        document.getElementById("showSortedArray").innerHTML = ("A rendezett tömb üres!!!");   
    }
}


let input = document.getElementById("elem");
input.addEventListener("keypress", function(event) {
  if (event.key === "Enter") {
    event.preventDefault();
    document.getElementById("myBtn").click();
  }
});

