import React, { Component } from "react";
import Form from "./Form";
import { fetchIdeas, deleteIdea } from "../actions/ideaActions";
import { connect } from "react-redux";
import { Card, CardText, CardBody, CardTitle, CardSubtitle } from "reactstrap";
class Content extends Component {
  componentDidMount() {
    this.props.fetchIdeas();
  }
  formSubmit = e => {
    e.preventDefault();
    this.props.deleteIdea(e.target.getAttribute("id"));
  };
  render() {
    return (
      <div className="w-100 h-100 position-fixed bg-dark">
        <div className="container">
          <div className="row pt-5">
            <div className="col-6">
              <h2 className="text-white text-center">Submit An Idea</h2>
              <Form />
            </div>
            <div className="col-6">
              {this.props.ideas.map(idea => (
                <div key={idea._id}>
                  <Card
                    style={{
                      backgroundColor: "#575656",
                      borderColor: "#575656"
                    }}
                  >
                    <CardBody>
                      <form
                        action=""
                        id={idea._id}
                        method="POST"
                        onSubmit={this.formSubmit}
                      >
                        <button
                          type="submit"
                          className="float-right text-white close"
                          style={{ outline: "none" }}
                        >
                          <span aria-hidden="true">&times;</span>
                        </button>
                      </form>
                      <CardTitle className="text-white">{idea.title}</CardTitle>
                      <CardText className="font-italic text-white">
                        {idea.description}
                      </CardText>
                      <CardSubtitle className="text-white">
                        {idea.author}
                      </CardSubtitle>
                    </CardBody>
                  </Card>
                  <br />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    );
  }
}
const mapStateToProps = state => ({
  ideas: state.idea.ideas
});
export default connect(mapStateToProps, {
  fetchIdeas,
  deleteIdea
})(Content);
