//print the following patter given
// 1
// 23
// 456
// 78910

// input n =4



function floydspattern(n){
    let counter =1;
    for(let i=1;i<=n;i++){
        let row ='';
        for(let j=1;j<=i;j++){
            row += counter + '';
            
            counter++;
            
        }
        console.log(row);
    }
}
floydspattern(4);