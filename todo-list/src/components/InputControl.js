import React from 'react';

function InputControl(props) {
    return (
      <form onSubmit={(e) => props.onSubmit(e)}>
	      <input type="text" value={props.value} onChange={(e) => props.onChange(e)} />
	      <input type="submit" value="Add new" />
	    </form>
    );
}

export default InputControl;
