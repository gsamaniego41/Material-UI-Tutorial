import React, {Component} from "react";
import {
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle
} from "@material-ui/core";
import {Add} from "@material-ui/icons";

import Form from "./Form";

export default (class extends Component {
  state = {
    open: false
  };

  handleToggle = () => this.setState({open: true});

  handleClose = () => this.setState({open: false});

  render() {
    const {
      open,
      exercise: {title, description, muscles}
    } = this.state;

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

            <Form />
          </DialogContent>
          <DialogActions>
            <Button
              color="primary"
              variant="raised"
              onClick={this.handleSubmit}
            >
              Create
            </Button>
          </DialogActions>
        </Dialog>
      </>
    );
  }
});
