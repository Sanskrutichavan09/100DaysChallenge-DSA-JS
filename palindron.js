
str ='madam';

function ispalindrown(){
    return str === str.split('').reverse().join('');
}
console.log(ispalindrown(str));
