// Agora, desenvolva um algoritmo que é capaz de inverter uma palavra. Por exemplo, a palavra "banana" seria invertida para "ananab". Utilize a string abaixo como exemplo, depois troque por outras para verificar se seu algoritmo está funcionando corretamente.

let word = 'trybe';
let invert = [];

console.log (word.length);

for (let index = 0; index < word.length; index += 1){
    invert.unshift(word[index]);
}
console.log(invert);