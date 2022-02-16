import React from 'react';

const tarefas = ['Ligar o PC', 'Atualizar o sistema', 'Reiniciar', 'Codar'];

const Task = (value) => {
  return (
    <li>{value}</li>
  );
}

class App extends React.Component {
  render() {
    return (
      <ol>{ tarefas.map((tarefa) => Task(tarefa)) }</ol>

    );
  }
}

export default App;
