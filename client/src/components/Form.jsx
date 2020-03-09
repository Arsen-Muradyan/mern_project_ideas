import React, { Component } from "react";
import { connect } from "react-redux";
import { addIdea } from "../actions/ideaActions";

class Form extends Component {
  state = {
    title: "",
    author: "",
    description: ""
  };

  changeFields = e => {
    this.setState({ [e.target.name]: e.target.value });
  };
  submitForm = e => {
    e.preventDefault();
    this.props.addIdea(
      this.state.title,
      this.state.description,
      this.state.author
    );
    this.setState({ title: "", description: "", author: "" });
  };
  render() {
    return (
      <div className="w-100">
        <form action="" method="POST" onSubmit={this.submitForm}>
          <input
            type="text"
            className="form-control bg-dark text-white"
            placeholder="Project Title"
            name="title"
            onChange={this.changeFields}
            value={this.state.title}
          />
          <br />
          <input
            type="text"
            className="form-control bg-dark text-white"
            placeholder="Author Name"
            name="author"
            onChange={this.changeFields}
            value={this.state.author}
          />
          <br />
          <textarea
            name="description"
            className="form-control bg-dark text-white"
            placeholder="Project Description"
            onChange={this.changeFields}
            value={this.state.description}
          ></textarea>
          <br />
          <input
            type="submit"
            className="btn btn-primary w-100"
            value="Add Idea"
          />
        </form>
      </div>
    );
  }
}
export default connect(null, {
  addIdea
})(Form);
