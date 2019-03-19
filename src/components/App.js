import React, {Component} from "react";
import {Header, Footer} from "./Layouts";
import Exercises from "./Exercises";
import {muscles, exercises} from "../store";

export default class extends Component {
  state = {exercises};

  getExercisesByMuscleGroup(selected) {
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

  render() {
    console.log(this.getExercisesByMuscleGroup());

    return (
      <>
        <Header />
        <Exercises />
        <Footer muscles={muscles} />
      </>
    );
  }
}
