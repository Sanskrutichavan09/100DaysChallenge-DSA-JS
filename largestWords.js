// find our large word

//1st try
const findlargeword=(str)=>{

    if(str.trim().length === 0){
        return false;
    }

   words= str.split(" ");
   words=words.sort((a,b)=> b.length-a.length);
   console.log(words);

   return words[0]
};
console.log(
    findlargeword(
        "Hey My Name is Sanskruti Chavan , iam start today 100 days of DSA challenge"
    )
);

//2ed try

const usemethodReduce = (str) =>{
    if(str.trim()===0){
        return false;
    }


    words = str.split(" ");
    return words.reduce(
        (accum,curword)=>(curword.length > accum.length ? curword : accum),
        ""
    );

};

console.log(
    usemethodReduce(
        "this is 2ed try to solve my same question  "
    )
)