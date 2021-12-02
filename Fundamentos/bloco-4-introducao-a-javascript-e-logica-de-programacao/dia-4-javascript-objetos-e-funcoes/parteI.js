let info = {
    personagem: 'Margarida',
    origem: 'Pato Donald',
    nota: 'Namorada do personagem principal nos quadrinhos do Pato Donald',
    // Parte 2
    recorrente: 'Sim', 
  };
  
  let info2 = {
    personagem: 'Tio Patinhas',
    origem: 'Christmas on Bear Mountain Dells Four Color Comics #178',
    nota: 'O último MacPatinhas',
    // Parte 2
    recorrente: 'Sim', 
  };

//   Parte 1
//   console.log('Bem vinda,', info['personagem']);

//   Parte 3
//   for (let header in info){
//       console.log(header);
//   }

//   Parte 4
//     for (let header in info){
//         console.log(info[header]);
//   }

// Parte 5
    for (index in info) {
      if (info[index] === info2[index]){
        console.log('Ambos recorrentes');
      } else {
        console.log(info[index], "e", info2[index]);
      }
    }
