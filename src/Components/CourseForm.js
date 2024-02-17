import React from "react";

function CourseForm(props) {
  return (
    <form onSubmit={props.addCourse}>
      <input
        type="text"
        value={props.currentValue}
        placeholder="write course name"
        onChange={props.updateCourse}
        required
      />
      <button type="submit">Add Course</button>
    </form>
  );
}
export default CourseForm;
