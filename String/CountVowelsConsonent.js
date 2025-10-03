// Count vowels and consonants in a string.
let str = "lalit mehra"

CountVowelsAndConsonents = (str) =>{
    let string = str.toLowerCase()
    string = str.split(" ").join("")
    let vowels=0 , consonents = 0
    for(let i = 0; i < string.length; i++){
        if(string[i] == 'a' || string[i] == 'e' || string[i] == 'i' || string[i] == 'o' || string[i] == 'u' ){
            vowels++
        }else{
            console.log(string[i])
            consonents++
        } 
    }return [vowels, consonents]
}
let [vowels, consonents] = CountVowelsAndConsonents(str);
console.log(`${str} has ${vowels} vowels and ${consonents} consonents`)