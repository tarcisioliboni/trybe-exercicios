import React from 'react';

class Pokemon extends React.Component {
  render() {
    const { name, type, averageWeight, image } = this.props;
    return (
      <div className='pokecard'>
        <div className='Pokemon'>
          <p className='namePokemon'>
            { name }
          </p>
          <p>
            { type }
          </p>
          <p>
            { averageWeight.value } { averageWeight.measurementUnit }
          </p>
        </div>
        <div>
          <img src={ image } alt={ `Pokemon ${ name }` } className='imagePokemon' />
        </div>
      </div>

    );
  }

}

export default Pokemon;