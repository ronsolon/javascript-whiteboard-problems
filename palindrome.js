// strip special characters from string using reg exp 
// and convert it to lower case
function cleanStr (str) {
    return str.toLowerCase().replace(/[\W]/g, '')
}

// using built-in methods
function palindrome (str) {
    let newStr = cleanStr(str);
    // string is split into an array of its characters
    // reversed then joined into a string
    let reversedStr = newStr.split('').reverse().join('');
    return newStr === reversedStr;
}

// using a loop
function palindromeLoop (str) {
    let newStr = cleanStr(str);
    for (let i=0; i<=newStr.length; i++) {
        if (newStr[i] !== newStr[newStr.length-1-i]) {
            return false;
        }
    }
    return true;
}

// TEST

// true
console.log(palindrome('wow'))
console.log(palindromeLoop('wOw'))
console.log(palindrome('racEcar'))
console.log(palindromeLoop('race car'))
console.log(palindrome('A man, a plan, a canal. Panama'))
console.log(palindromeLoop('A man, a plan, a canal. Panama'))
console.log(palindrome('My age is 0, 0 si ega ym.'))
console.log(palindromeLoop('My age is 0, 0 si ega ym.'))

// false
console.log(palindrome('notapalindrome'))
console.log(palindromeLoop('notapalindrome'))
console.log(palindrome('console.log(palindrome)'))
console.log(palindromeLoop('console.log(palindrome)'))