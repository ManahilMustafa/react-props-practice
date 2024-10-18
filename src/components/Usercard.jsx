import React from 'react';
import './usercard.css';
// Props are arguments passed into React components.props stands for properties.
// Props are also how you pass data from one component to another, as parameters.
// React Props are read-only! You will get an error if you try to change their value.
// Props are used for component communication: They are used to pass data from a parent component to a child component.

const Usercard = (props) => {
  return (
    <div className='user-container'>
        <p id='user-name'>{props.name}</p>
        <img id="user-img" src={props.image} alt="img"></img>
        <p id='user-decs'>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
      
    </div>
  )
}

export default Usercard
