import React, { Component } from "react";
import ReactDOM from "react-dom";
import Input from "./components/atoms/Inputs.jsx";
import List from "./components/molecules/List.jsx";
import "./styles.css";

class App extends Component {
  constructor() {
    super();
    this.state = {
      items: []
    };

    this.handleAddItem = this.handleAddItem.bind(this);
    this.handleRemoveItem = this.handleRemoveItem.bind(this);
  }
  handleAddItem(e) {
    if (e.key === "Enter" && e.target.value !== "") {
      let item = {
        name: e.target.value,
        isCompleted: false
      };
      this.setState({
        items: this.state.items.concat([item])
      });
      e.target.value = "";
    }
  }

  handleRemoveItem(e) {
    let item = e.target.parentElement.id,
      items = this.state.items;

    items.splice(item, 1);

    this.setState({
      items: items
    });
  }

  render() {
    return (
      <div className="App">
        <h1>My firt react app</h1>
        <h2>to do list!</h2>
        <Input
          type="text"
          onKeyDown={this.handleAddItem}
          placeholder="Nueva tarea"
        />
        <List items={this.state.items} handleDele={this.handleRemoveItem} />
      </div>
    );
  }
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
