import React, {Component} from 'react';
import './App.css';

import InputControl from './components/InputControl';
import ListItem from './components/ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: []
    };
    this.removeItem = this.removeItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
  }

  componentDidMount() {
    fetch('https://jsonplaceholder.typicode.com/todos')
      .then(response => response.json())
      .then(resData => {
        this.setState({
          todos: resData.slice(0, 10)
        })
      })
  }

  addNewItem(title) { 
    const allItems = this.state.todos.slice();
    let newId = 1;

    if (allItems.length > 0) {
      newId = allItems[allItems.length - 1].id + 1
    }

    const newItem = {
      "id": newId,
      "title": title
    }

    allItems.push(newItem);

    if (title !== '') {
      this.setState({
        todos: allItems
      })
    }
  }

  removeItem(id) {
    const newArr = this.state.todos.filter((obj) => (obj.id !== id));        
    this.setState({
      todos: newArr
    })
  }

  render () {
    return (
      <div className="App">
        <h1>To do list</h1>
        <InputControl
          addNewItem={this.addNewItem} 
        />
        <ul className="todo-list">
          {this.state.todos.map((item) => 
            <ListItem 
              key={item.id}
              item={item}
              removeItem={this.removeItem}
            />
            )
          }
        </ul>                
      </div>
    );
  }
}

export default App;
