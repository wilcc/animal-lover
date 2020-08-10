import React from 'react';
import Liked from './Liked';
import Disliked from './Disliked';

const SideBar = (props) => {
  console.log(props);
  return (
    <div>
      {!props.liked.length ? (
        <div className='ui header'>There is no likes</div>
      ) : (
        <ul className='ui header'>
          {props.liked.length}Likes
          {props.liked.map((item) => {
            return (
              <li key={item[0].animalId}>
                <Liked item={item} />
              </li>
            );
          })}
        </ul>
      )}
      {!props.disliked.length ? (
        <div className='ui header'>There is no dislikes</div>
      ) : (
        <ul className='ui header'>
          {props.disliked.length}DisLikes
          {props.disliked.map((item) => {
            return (
              <li key={item[0].animalId}>
                <Disliked item={item} />
              </li>
            );
          })}
        </ul>
      )}
    </div>
  );
};

export default SideBar;
