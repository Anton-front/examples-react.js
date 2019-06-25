import React, {Component} from 'react';
import './App.css';

import InputControl from './components/InputControl';
import ListItem from './components/ListItem';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todos: [],
      inputValue: ''
    };
    this.removeItem = this.removeItem.bind(this);
    this.addNewItem = this.addNewItem.bind(this);
    this.handleChange = this.handleChange.bind(this);
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

  handleChange(e) {
    this.setState({
      inputValue: e.target.value
    });
  }

  addNewItem(e) {
    e.preventDefault();
    const allItems = this.state.todos.slice();
    let newId = 1;

    if (allItems.length > 0) {
      newId = allItems[allItems.length - 1].id + 1
    }

    const newItem = {
      "id": newId,
      "title": this.state.inputValue
    }

    allItems.push(newItem);

    if (this.state.inputValue !== '') {
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
          onSubmit={this.addNewItem}
          value={this.state.inputValue}
          onChange={this.handleChange}
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
