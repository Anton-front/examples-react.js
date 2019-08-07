import React from 'react';
import { BrowserRouter as Route, Link } from "react-router-dom";
import Card from '@material-ui/core/Card';
import CardActions from '@material-ui/core/CardActions';
import CardContent from '@material-ui/core/CardContent';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

function Post(props) {
	return (
    <Card className="post-item">
      <CardContent>
				<span className="num-post">#{props.item.id}</span>
        <Typography gutterBottom variant="h6" component="h6">
          {props.item.title}
        </Typography>
      </CardContent>
      <CardActions>
				<Link
					// to={`comments?postId=${props.item.id}`}
					to={{
						pathname: "/comments",
						search: "?postId=" + props.item.id
					}}
					className="comments-link"
				>
					Comments...
				</Link>
      </CardActions>
    </Card>
	);
}

export default Post;
