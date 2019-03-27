import React, {Component} from "react";
import {Header, Footer} from "./Layouts";
import Exercises from "./Exercises";
import {muscles, exercises} from "../store";

export default class extends Component {
  state = {
    exercises,
    category: "",
    exercise: {},
    editMode: false
  };

  getExercisesByMuscleGroup() {
    const initExercises = muscles.reduce(
      (exercises, category) => ({
        // creates an object w/ a property of the category
        // and a value of an empty array
        ...exercises,
        [category]: []
      }),
      {}
    );

    console.log(muscles, initExercises);

    return Object.entries(
      this.state.exercises.reduce((exercises, exercise) => {
        const {muscles} = exercise;

        exercises[muscles] = [...exercises[muscles], exercise];
        return exercises;
      }, initExercises)
    );
  }

  handleCategorySelect = category =>
    this.setState({
      category
    });

  handleExerciseSelect = id =>
    this.setState(prevState => ({
      exercise: prevState.exercises.find(ex => ex.id === id),
      editMode: false
      /*
        When edit is clicked and user chooses a different exercise,
        we want to display the newly selected exercise's details, not the edit form
        editMode: false here fixes that
      */
    }));

  handleExerciseCreate = exercise =>
    // ({exercises}) === prevState.exercises
    this.setState(({exercises}) => ({
      exercises: [...exercises, exercise]
    }));

  handleExerciseDelete = id =>
    this.setState(({exercises}) => ({
      // ({exercises}) same as prevState.exercises
      exercises: exercises.filter(ex => ex.id !== id),
      editMode: false,
      exercise: {}
      // closes edit form and resets selected exercise
    }));

  handleExerciseSelectEdit = id =>
    // id comes from Exercises/index.js when we call onSelectEdit()
    this.setState({
      editMode: true,
      exercise: exercises.find(ex => ex.id === id)
    });

  handleExerciseEdit = exercise =>
    this.setState(({exercises}) => ({
      // find the exercises that don't have the id of exercise.id
      // filter them down, then add the new exercise obj to the new arr
      exercises: [...exercises.filter(ex => ex.id !== exercise.id), exercise],
      exercise, // updates the currently selected exercise (state) to the arg coming from Form.js onSubmit
      editMode: false
    }));

  render() {
    const exercises = this.getExercisesByMuscleGroup(),
      {category, exercise, editMode} = this.state;

    return (
      <>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          category={category}
          editMode={editMode}
          exercise={exercise}
          exercises={exercises}
          muscles={muscles} // from store.js
          onEdit={this.handleExerciseEdit}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelete}
          onSelectEdit={this.handleExerciseSelectEdit}
        />
        <Footer
          category={category}
          muscles={muscles}
          onSelect={this.handleCategorySelect}
        />
      </>
    );
  }
}
