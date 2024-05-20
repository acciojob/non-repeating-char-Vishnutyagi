function firstNonRepeatedChar(str) {
	 if (!str) {
        return null;
    }

    const charCount = {};

    // First pass: count the occurrences of each character
    for (let char of str) {
        if (charCount[char] === undefined) {
            charCount[char] = 1;
        } else {
            charCount[char]++;
        }
    }

    // Second pass: find the first non-repeated character
    for (let char of str) {
        if (charCount[char] === 1) {
            return char;
        }
    }

    return null;
}
const input = prompt("Enter a string");
alert(firstNonRepeatedChar(input)); 
