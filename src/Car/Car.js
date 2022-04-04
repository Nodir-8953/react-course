import React from 'react';

export default (props)=>
(<div>
    <strong>Car name: {props.name}</strong>
    <div>Car year: {props.year}</div>
    <button onClick={props.onChangeTitle}>change</button>
</div>);