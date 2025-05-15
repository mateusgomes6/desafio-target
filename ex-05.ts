function inverterString(str: string): string {
    let invertedStr = '';
    
    for (let i = str.length - 1; i >= 0; i--) {
        invertedStr += str[i];
    }
    
    return invertedStr;
}


const stringOriginal = "Hello, World!";
const stringInvertida = inverterString(stringOriginal);

console.log(stringInvertida);