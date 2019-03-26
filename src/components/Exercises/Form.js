import React, {Component} from "react";
import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";

import {withStyles} from "@material-ui/core/styles";

const styles = theme => ({
  FormControl: {
    width: 300
  }
});

export default withStyles(styles)(
  class extends Component {
    state = this.getInitialState();

    getInitialState() {
      const {exercise} = this.props;
      return exercise
        ? exercise
        : {
            title: "",
            description: "",
            muscles: ""
          };
    }

    /* 
        Problem: 
        When I click on the edit icon the first time, 
        the fields populate w/ the correct placeholder info
        But when another exercise is selected,
        the fields don't change

        To fix: use componentWillReceiveProps, takes in nextProps arg
      */
    componentWillReceiveProps({exercise}) {
      // destructuring nextProps
      this.setState({
        ...exercise
        // we're listening to the update (new props)
        // and updating the state (fields) w/ those props
        // essentially syncing props w/ the state of this component
      });
    }

    handleChange = name => ({target: {value}}) =>
      this.setState({[name]: value});

    handleSubmit = () => {
      const {exercise} = this.state;

      this.props.onSubmit({
        ...exercise,
        id: exercise.title.toLowerCase().replace(/ /g, "-")
      });
      this.setState({
        open: false,
        exercise: {
          title: "",
          description: "",
          muscles: ""
        }
      });
    };

    render() {
      const {title, description, muscles} = this.state,
        {classes, muscles: categories} = this.props;

      return (
        <form>
          <TextField
            label="Title"
            value={title}
            onChange={this.handleChange("title")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <FormControl className={classes.FormControl}>
            <InputLabel htmlFor="muscles">Muscles</InputLabel>

            {/* SELECT BOX */}
            <Select value={muscles} onChange={this.handleChange("muscles")}>
              {categories.map(category => (
                <MenuItem key={category} value={category}>
                  {category}
                </MenuItem>
              ))}
            </Select>
          </FormControl>
          <br />
          <TextField
            multiline
            rows="4"
            label="Description"
            value={description}
            onChange={this.handleChange("description")}
            margin="normal"
            className={classes.FormControl}
          />
          <br />
          <Button color="primary" variant="raised" onClick={this.handleSubmit}>
            Create
          </Button>
        </form>
      );
    }
  }
);
