import React from 'react';

const Disliked = (props) => {
  console.log(props.item);
  const { image, type, name, description, animalId } = props.item[0];

  return (
    <div className="ui card" style={{ display: 'flex', flexDirection: 'row' }}>
      <div className="image" style={{ width: '60%' }}>
        <img src={image} alt="..." />
      </div>
      <div
        className="content"
        style={{ background: 'gray', color: 'white', textAlign: 'center' }}
      >
        <a className="header">{name}</a>
      </div>
    </div>
  );
};

export default Disliked;
