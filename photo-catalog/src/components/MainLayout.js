import React, {Component} from 'react';
import {Container, Row, Col, ListGroup} from 'react-bootstrap';
import CardItem from './CardItem.js';
import 'bootstrap/dist/css/bootstrap.min.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      albumsCount: [1,2,3,4,5],
      albums: [],
      activeAlbum: 3,
      activePhotos: [],
      counter: 0
    };
    this.changeCounter=this.changeCounter.bind(this);
  }

  componentDidMount() {
    this.getAlbumItems(this.state.activeAlbum);
  }

  changeCounter() {    
    let newCounter = this.state.counter;    
    this.setState({
      counter: newCounter + 1
    })
  }

  getAlbumItems(albumId) {
    const exPhoto = this.state.albums.filter((obj) => (obj.id === albumId));
    if (exPhoto.length === 0) {
      fetch(`https://jsonplaceholder.typicode.com/photos?albumId=${albumId}`)
        .then(response => response.json())
        .then(resData => {
          const newItemArr = this.state.albums;
          newItemArr.push({
            id: albumId,
            photos: resData
          })
          this.setState({
            albums: newItemArr,
            activeAlbum: albumId,
            activePhotos: resData
          })
        })
    } else {
        this.setState({
          activeAlbum: albumId,
          activePhotos: exPhoto[0].photos
        })
    }
  }

  render () {
    return (
      <div className="main-app">
        <Container fluid={true}>
          <header className="header">
            <h4>Purchased photos: {this.state.counter}</h4>
          </header>
          <Row className="main">
            <Col xs={3}>
              <aside className="sidebar">
                <h4>Filters: </h4>
                <ListGroup>
                  {
                    this.state.albumsCount.map((albumNum) =>
                      <ListGroup.Item
                        key={albumNum}
                        action
                        active={albumNum === this.state.activeAlbum}
                        variant="primary"
                        onClick={() => this.getAlbumItems(albumNum)}
                      >
                      Album {albumNum}
                      </ListGroup.Item>
                    )
                  }
                </ListGroup>
              </aside>
            </Col>
            <Col xs={9}>
              <div className="content">
                <h4>Results: album - #{this.state.activeAlbum} </h4>
                <Row className="main">
                  {this.state.activePhotos.map((item) => 
                    <Col xs={3} key={item.id} >
                      <CardItem
                        item={item}
                        changeCounter={this.changeCounter}
                      />
                    </Col>
                  )
                  }
                </Row>
              </div>
            </Col>
          </Row>
        </Container>       
      </div>
    );
  }
}

export default App;
