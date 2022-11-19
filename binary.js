// ITERATIVE 
// RECURSIVE

// ITERATIVE---->
/*function binarySearch(arr,target){
 let   start = 0;
 let   end = arr.length-1;
 while(start<=end){
    let midIndex = ((start + end)/2)
    if(arr[midIndex]===target){
    return midIndex
 }
 else if(arr[midIndex]>target){
    end = midIndex - 1
 }else{
    start = midIndex + 1
 }
 }
 return -1
}
console.log(binarySearch([55,7,2,0,7],7))*/


// recursive---->
// function recursiveBinarySearch(arr,target,start,end){
//    let start = 0;
//    let end = arr.length-1;
//    mid=Math.floor((start+end/2));
//    if(arr[mid]===target){
//       return mid;
//    }
//    else if(arr[mid]<target){
//       return (arr,mid-1,start)
//    }
//    else{
//       return (arr,mid+1,end)
//    }
// }
// console.log(recursiveBinarySearch([2,5,10,66,88,99],88))


