import React, { Component } from 'react'

class Form extends Component {
  render() {
    return (
      <div className="w-100">
        <form action="" method="POST">
          <input type="text" className="form-control" placeholder="Project Title" name="title"/>
          <br/>
          <input type="text" className="form-control" placeholder="Author Name" name="author"/>
          <br/>
          <textarea name="description" className="form-control" placeholder="Project Description"></textarea>
          <br/>
          <input type="submit" className="btn btn-primary w-100" value="Add Idea"/>
        </form>
      </div>
    )
  }
}
export default Form;