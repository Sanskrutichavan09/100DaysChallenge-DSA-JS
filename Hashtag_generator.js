

//1st letter capital and concat all words and 1st add # tag and other line ...limit 280 not more
const Hashtag = (str) => {
    if (str.length > 280 || str.trim().length === 0) {
        return false;
    }

    let words = str.split(" "); // Split string into words

    let capitalizedWords = words.map((word) => 
        word.charAt(0).toUpperCase() + word.slice(1) // Capitalize first letter
    );

    let result = `#${capitalizedWords.join("")}`; // Join words without spaces
    return result;
};

console.log(Hashtag("hey this is my second day of challenge dsa in js"));
