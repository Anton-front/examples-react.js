import React from 'react';

function ListItem(props) {
	return (
	  <li>
	  	<span className="title">{props.item.title}</span>
	  	<button onClick={() => props.removeItem(props.item.id)} className="remove-btn">Remove</button>	    
	  </li>
	);
}

export default ListItem;