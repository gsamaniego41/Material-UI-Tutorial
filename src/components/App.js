import React, {Component} from "react";
import {Header, Footer} from "./Layouts";
import Exercises from "./Exercises";
import {muscles, exercises} from "../store";

export default class extends Component {
  state = {exercises, category: "", exercise: {}, editMode: false};

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
    this.setState(
      // exercise refers to the currently selected
      // exercise that we clicked on from the left pane

      prevState => ({
        exercise: prevState.exercises.find(ex => ex.id === id)
      })
      // prevState is a callback that returns a new state obj that's going to be merged
      // reason: we don't wanna call this.state.exercise bec
      // something else in the app might have already change it while setState runs (asynchronous)
    );

  handleExerciseCreate = exercise =>
    // ({exercises}) === prevState.exercises
    this.setState(({exercises}) => ({
      exercises: [...exercises, exercise]
    }));

  handleExerciseDelte = id =>
    this.setState(({exercises}) => ({
      // ({exercises}) same as prevState.exercises
      exercises: exercises.filter(ex => ex.id !== id)
    }));

  handleExerciseSelectEdit = id =>
    this.setState({
      editMode: true,
      exercise: exercises.find(ex => ex.id === id)
    });

  render() {
    const exercises = this.getExercisesByMuscleGroup(),
      {category, exercise} = this.state;

    return (
      <>
        <Header
          muscles={muscles}
          onExerciseCreate={this.handleExerciseCreate}
        />
        <Exercises
          exercise={exercise}
          exercises={exercises}
          category={category}
          onSelect={this.handleExerciseSelect}
          onDelete={this.handleExerciseDelte}
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
