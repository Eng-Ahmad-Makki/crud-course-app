import React, { Component, Fragment } from "react";

class CourseList extends Component {
  state = {
    isEdit: false,
  };

  toggleState = () => {
    let { isEdit } = this.state;
    this.setState({
      isEdit: !isEdit,
    });
  };

  renderCourse = () => {
    return (
      <li>
        <span>{this.props.details.name}</span>
        <button
          onClick={() => {
            this.toggleState();
          }}
        >
          Edit Course
        </button>
        <button onClick={() => this.props.DeleteCourse(this.props.index)}>
          Delete Course
        </button>
      </li>
    );
  };

  updateCourse = (e) => {
    e.preventDefault();
    this.props.editCourse(this.props.index, this.input.value);
    this.toggleState();
  };

  renderUpdateForm = () => {
    return (
      <form onSubmit={this.updateCourse}>
        <input
          type="text"
          ref={(v) => {
            this.input = v;
          }}
          defaultValue={this.props.details.name}
          required
        />
        <button>Update Course</button>
      </form>
    );
  };

  render() {
    return (
      <Fragment>
        {this.state.isEdit ? this.renderUpdateForm() : this.renderCourse()}
      </Fragment>
    );
  }
}
export default CourseList;
