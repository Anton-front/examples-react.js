import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Avatar from '@material-ui/core/Avatar';
import Chip from '@material-ui/core/Chip';
import FaceIcon from '@material-ui/icons/Face';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import Post from '../components/Post';

class PostsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      users: [],
      posts: [],
      activeUserId: 1,
      activePosts: []
    };
  }

  componentDidMount() {
    this.getUsers();
    this.getPostsByUser(this.state.activeUserId);
  }

  getUsers() {
    fetch('https://jsonplaceholder.typicode.com/users')
      .then(response => response.json())
      .then(resData => {
        this.setState({
          users: resData,
        })
      })
  }

  getPostsByUser(userId) {
    fetch(`https://jsonplaceholder.typicode.com/posts?userId=${userId}`)
      .then(response => response.json())
      .then(resData => {
        const newItemArr = this.state.posts;
        newItemArr.push({
          id: userId,
          posts: resData
        })
        this.setState({
          posts: newItemArr,
          activeUserId: userId,
          activePosts: resData
        })
      })
  }

  render () {
    return (
      <Grid container spacing={3}>
        <Grid item xs={3}>
          <List component="nav">
            {this.state.users.map((user) =>
              <ListItem
                key={user.id}
                selected={(user.id === this.state.activeUserId) ? true : false}
              >
                <Chip
                  avatar={
                    <Avatar>
                      <FaceIcon />
                    </Avatar>
                  }
                  label={user.name}
                  onClick={() => this.getPostsByUser(user.id)}
                />
                </ListItem>
              )}
          </List>
        </Grid>
        <Grid item xs={9}>
          <Grid container spacing={3}>
            {this.state.activePosts.map((item) =>
                <Grid item xs={4} key={item.id}>
                  <Post item={item} />
                </Grid>
              )
            }
          </Grid>
        </Grid>
      </Grid>
    );
  }
}

export default PostsPage;
