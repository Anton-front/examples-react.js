import React, {Component} from 'react';
import Grid from '@material-ui/core/Grid';
import Card from '@material-ui/core/Card';
import CardContent from '@material-ui/core/CardContent';
import Typography from '@material-ui/core/Typography';

class CommentsPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activePostId: 1,
      comments: []
    };
  }

  componentDidMount() {
    let params = new URLSearchParams(this.props.location.search);
    let currentId = params.get("postId");
    this.getPostComments(currentId);
  }

  getPostComments(postId) {
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${postId}`)
      .then(response => response.json())
      .then(resData => {
        this.setState({
          activePostId: postId,
          comments: resData
        })
      })
  }

  render () {
    return (
      <Grid container spacing={3}>
        {this.state.comments.map((comment) =>
            <Grid item xs={4} key={comment.id}>
              <Card className="comment-item">
                <CardContent>
                  <Typography variant="h6" component="h6">
                    {comment.email}
                  </Typography>
                  <Typography variant="body2" component="p" color="textSecondary">
                    {comment.body}
                  </Typography>
                </CardContent>
              </Card>
            </Grid>
          )
        }
      </Grid>
    );
  }
}

export default CommentsPage;
