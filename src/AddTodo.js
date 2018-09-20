import React, { Component } from "react";

class AddForm extends Component {
  state = {
    content: ""
  };
  onInputChange = e => {
    this.setState({
      content: e.target.value
    });
  };
  onFormSubmit = e => {
    e.preventDefault();
    this.props.addTodo(this.state);
    this.setState({
      content: ""
    });
  };
  render() {
    return (
      <form onSubmit={this.onFormSubmit}>
        <label>Add a new task</label>
        <input
          onChange={this.onInputChange}
          type="text"
          className="text"
          value={this.state.content}
        />
        <input type="submit" value="Submit" />
      </form>
    );
  }
}

export default AddForm;
