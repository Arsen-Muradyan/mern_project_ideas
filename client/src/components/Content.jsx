import React, { Component } from 'react'
import Form from './Form';
class Content extends Component {
  render() {
    return (
      <div className="w-100 h-100 position-fixed bg-dark">
        <div className="container mt-3">
          <h2 className="text-white">You Have an Project Idea?</h2>
          <div className="row">
            <div className="col-6">
              <Form />
            </div>
            <div className="col-6">
            
            </div>
          </div>
        </div>
      </div>
    )
  }
}
export default Content;