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

  handleFormSubmit = exercise => {
    this.handleClose();
    this.props.onCreate(exercise);
  };

  render() {
    const {open} = this.state,
      {muscles} = this.props;

    return (
      <>
        <Button variant="fab" mini onClick={this.handleToggle}>
          <Add />
        </Button>

        {/* MODAL */}
        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle>Create a New Exercise</DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>

            <Form
              muscles={muscles} //from Header
              onSubmit={this.handleFormSubmit}
            />
          </DialogContent>
        </Dialog>
      </>
    );
  }
});
