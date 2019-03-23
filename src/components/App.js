import React, {Component} from "react";
import {Header, Footer} from "./Layouts";
import Exercises from "./Exercises";
import {muscles, exercises} from "../store";

export default class extends Component {
  state = {exercises, category: "", exercise: {}};

  getExercisesByMuscleGroup() {
    return Object.entries(
      // Object.entries turns result into an array
      // w/o Object.entries, reduce will return an object of muscle categories
      // that has a value of an array of exercises.

      this.state.exercises.reduce((exercises, exercise) => {
        // exercises = accumulator
        // exercise = item being iterated over

        const {muscles} = exercise;

        // counts instances of values in an object
        // exercises[muscles] creates a muscles property in the accumulator obj
        exercises[muscles] = exercises[muscles]
          ? // Do we already have something stored in that muscles property?
            // in other words, does that muscle category already exists?
            [...exercises[muscles], exercise]
          : // if it does, add the current exercise obj to the array of exercises
            [exercise]; // if it doesn't, create a new category and add this exercise to that category

        // finally, return the array of muscle categories
        return exercises;
      }, {})
    );
  }

  handleCategorySelect = category => {
    this.setState({
      category
    });
  };

  handleExerciseSelect = id => {
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
  };

  handleExerciseCreate = exercise => {
    // ({exercises}) === prevState.exercises
    this.setState(({exercises}) => ({
      exercises: [...exercises, exercise]
    }));
  };

  render() {
    const exercises = this.getExercisesByMuscleGroup(),
      {category, exercise} = this.state;
    // same as:
    //    const exercises = this.getExercisesByMuscleGroup();
    //    const {category} = this.state;

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
