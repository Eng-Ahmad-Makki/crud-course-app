import React, { Component } from 'react'
import CourseForm from './Components/CourseForm';
import CourseList from './Components/CourseList';

class App extends Component {
  state = {
    courses :[
      
    ],
    current : ''
  };

  addCourse = (e) => {
    e.preventDefault();
    let current = this.state.current;
    let {courses} = this.state;
    courses.push({name : current})
    this.setState({
      courses,
      current : ''
    });
  };
  
  updateCourse = (e) =>{
    this.setState( {
    current : e.target.value
    })  
    };
  

  handleDelete = (index) => {
    let {courses} = this.state;
    courses.splice(index,1);
    this.setState( { 
      courses
    })
  };

editCourse = (index, value) => {
    let {courses} = this.state;
    let course = courses[index]
    course['name'] = value;
    this.setState({
    courses
  });
};

  render() {
    const {courses} = this.state;
    const courseList = courses.map((course, index) => {
      return (<CourseList details={course} key={index} index={index} DeleteCourse={this.handleDelete} editCourse={this.editCourse}/>
    )} );

  return (
    <section className="App">
    <h2>Add Courses</h2>
    <CourseForm currentValue={this.state.current} updateCourse={this.updateCourse} addCourse={this.addCourse}/>
    <ul>{this.state.courses.length > 0 ? courseList : (<p>please add new course</p>)}</ul>
    </section>
  );
  }
}

export default App;
