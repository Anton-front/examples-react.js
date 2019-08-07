import React from 'react';
import { BrowserRouter as Router, Route, Switch, NavLink } from "react-router-dom";
import Container from '@material-ui/core/Container';
import StartPage from '../../pages/Start';
import PostsPage from '../../pages/Posts';
import CommentsPage from '../../pages/Comments';

const urls = {
	root: '/',
	posts: '/posts',
	comments: '/comments'
};

const routes = [
	{
    key: 0,
		path: urls.root,
		exact: true,
		component: StartPage
	},
  {
    key: 1,
		path: urls.posts,
		exact: true,
		component: PostsPage
	},
	{
    key: 2,
		path: urls.comments,
		exact: false,
		component: CommentsPage
	}
];

export default function App() {
  return (
  	<main>
      <Container>
        <Switch>
        	{routes.map((props) => <Route {...props} />)}
        </Switch>
      </Container>
  	</main>
  );
}
