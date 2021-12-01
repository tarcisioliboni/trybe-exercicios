// O fatorial é a multiplicação de um número natural pelos seus antecessores, exceto o zero

let number = 10;
let conj = [];
for (let index = 1; index < number + 1; index += 1){
   conj.push(index);
}

let fact = 1;
for (let index2 = 0; index2 < conj.length; index2 += 1){
    fact = conj[index2] * fact;
}

console.log('O fatorial de', number, 'é',fact);