import React, {Component} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  TextField
} from "@material-ui/core";
import {Add} from "@material-ui/icons";

export default class extends Component {
  state = {
    open: false,
    exercise: {
      title: "",
      description: "",
      muscles: ""
    }
  };

  handleToggle = () => this.setState({open: true});

  handleClose = () => this.setState({open: false});

  handleChange = name => ({target: {value}}) => {
    this.setState({
      exercise: {
        ...this.state.exercise,
        [name]: value
      }
    });
  };

  render() {
    const {
        open,
        exercise: {title, description, muscles}
      } = this.state,
      {muscles: categories} = this.props; // from App.js => Header.js => Create.js

    return (
      <>
        <Button variant="fab" mini onClick={this.handleToggle}>
          <Add />
        </Button>

        {/* MODAL */}
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>

            {/* TEXTFIELDS */}
            <form>
              <TextField
                label="Title"
                value={title}
                onChange={this.handleChange("title")}
                margin="normal"
              />
              <br />
              <FormControl>
                <InputLabel htmlFor="muscles">Muscles</InputLabel>
                {/* React Docs - Since for is a reserved word in JavaScript, React elements use htmlFor instead. */}
              </FormControl>
              <br />
              <TextField
                multiline // expands field if
                rows="4" // overflow scroll, field fixed at 4 rows
                label="Description"
                value={description}
                onChange={this.handleChange("description")}
                margin="normal"
              />
              <br />
            </form>
          </DialogContent>
          <DialogActions>
            <Button color="primary" variant="raised">
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
}
