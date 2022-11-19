function linearSearch(arr,target){
    for(let i=0; i<=arr.length;i++){
        if(arr[i]===target){
            return i;
        }
    }
    return undefined;
}
console.log(linerSearch([44,7,3,78],78))
// bigo = O(n)