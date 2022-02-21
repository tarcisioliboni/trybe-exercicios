import React from 'react';
import pokemons from './data';
import Pokemon from './Pokemon';

class Pokedex extends React.Component {
  render() {
    return (
      <div className='pokedex'>
        { pokemons.map((poke) => (
          <Pokemon
            key={ poke.id }
            name={ poke.name }
            type={ poke.type }
            averageWeight={ poke.averageWeight }
            image={ poke.image }
          />
        ))}
      </div>
    )
  }
}

export default Pokedex;
