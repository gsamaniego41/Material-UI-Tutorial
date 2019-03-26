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

    /* 
    {
      title: "",
      description: "",
      muscles: ""
    };
     */
    // instead of setting the state to empty strings,
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
