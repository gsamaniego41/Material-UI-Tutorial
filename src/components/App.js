import React, {Component} from "react";
import {Header, Footer} from "./Layouts";
import Exercises from "./Exercises";
import {muscles, exercises} from "../store";

export default class extends Component {
  state = {exercises};

  render() {
    return (
      <>
        <Header />
        <Exercises />
        <Footer muscles={muscles} />
      </>
    );
  }
}
