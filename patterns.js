//     *
//    **
//   ***
//  ****
// *****

function stars(n) {
    for (let i = 1; i <= n; i++) {
        let row = ""; 
        
       
        for (let j = 1; j <= n - i; j++) {
            row += " ";
        }
        
        for (let j = 1; j <= i; j++) {
            row += "*";
        }
        
       
        console.log(row);
    }
}

// stars(5);

// *****
//  ****
//   ***
//    **
//     *


// function opotite(n){
//     for(let i=1;i<=n;i++){
//         let row="";

//         for(let j=n;j>=n;j++){
//             row+=" *";
//         }
//         for(let j=1;j<=i;j++){
//             row+=' ';
//         }

//         console.log(row);
//     }
// }

// opotite(5);


let rows = 5;
for (let i = 1; i <= rows; i++) {
      let pattern = '';
    for (let j = 1; j <= i; j++) {
        pattern += "*"; 
    }
    console.log(pattern); 
}
let n = 5;
for ( let i = 1 ;i<=n;i++){
    let row = '';
    for(let j=1;j<=n-i+1;j--){
       row += "*";
    }
    console.log(row)
}