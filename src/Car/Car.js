import React from 'react';

export default (props)=>
(<div style={{
    border: '1px solid #ccc', 
    marginbottom: '10px'
}}>
    <strong>Car name: {props.name}</strong>
    <div>Car year: {props.year}</div>
    <input type="text" onChange={props.onChangeName} value={props.name}/>
    <button onClick={props.onDelete}>Delete</button>
</div>);