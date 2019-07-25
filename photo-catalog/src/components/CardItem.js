import React from 'react';
import {Button, Card} from 'react-bootstrap';

function CardItem(props) {
	return (
		<Card>
			<Card.Img variant="top" src={props.item.url} />
			<Card.Body>
				<Card.Title>{props.item.title}</Card.Title>
				<Button 
					variant="primary"
					onClick={() => props.changeCounter()}
				>
					Buy photo {props.item.id}
				</Button>
			</Card.Body>
		</Card>
	);
}

export default CardItem;