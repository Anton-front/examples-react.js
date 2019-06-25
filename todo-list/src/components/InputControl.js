import React from 'react';

function InputControl(props) {
	let inputValue = '';
    return (
      <div>
        <input type="text" onChange={(e) => inputValue = e.target.value} />
        <button onClick={() => props.addNewItem(inputValue)}>Add new</button>
      </div>
    );
}

export default InputControl;
