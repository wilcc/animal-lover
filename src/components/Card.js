import React from 'react';

const Card = (props) => {
  const { image, type, name, description, animalId } = props.animal;
  return (
    <div className="ui card">
      <div className="image">

        <img src={image} alt="..." />
      </div>
      <div className="content">
        <a className="header">{name}</a>
        <div className="meta">
          <span className="date">{type}</span>
        </div>
        <div className="description">{description}</div>
      </div>
      <div className="extra content">
        <button
          onClick={() => {
            props.handleLiked(animalId);
          }}
          className="ui button primary"
        >
          Like
        </button>
        <button 
        onClick={() => {
          props.handleDisLiked(animalId);
        }}
        className="ui button red">Dislike</button>
        <button 
        onClick={() => {
          props.handleDiscard(animalId);
        }}
        className="ui button gray">Discard</button>
      </div>
    </div>
  );
};

export default Card;
