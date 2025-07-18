// 2. Find the Maximum Number in an Array
// Write a function to find the maximum number in a given array.

// Problem:
// Input: An array of numbers
// Output: The maximum number in the array


function maxnum(){

    let arr = [3, 1, 4, 1, 5, 9];
    let max=arr[0];
    for(let i=0;i<=arr.length;i++){
        if(arr[i] > max){
            max=arr[i]
 
        }
        
    }
    return max
}
console.log(maxnum());
