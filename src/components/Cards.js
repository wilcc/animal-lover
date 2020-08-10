import React from 'react';
import Card from './Card';
import SearchIt from '../services/searcIt'
import searchIt from '../services/searcIt';
const Cards = (props) => {
  console.log(props);
  return (
    <div style={{ width: '80%' }}>
      <div
        className="ui link cards"
        style={{
          display: 'flex',
          alignItems: 'flex-start',
          justifyContent: 'flex-start',
          flexDirection: 'row',
          flexWrap: 'wrap',
        }}
      >
        {props.animals.filter(searchIt(props.searchTerm)).map((animal) => {
          return (
            <Card
              handleLiked={props.handleLiked}
              handleDisLiked={props.handleDisLiked}
              handleDiscard={props.handleDiscard}
              key={animal.animalId}
              animal={animal}
            />
          );
        })}
      </div>
    </div>
  );
};

export default Cards;
