import React, {Component} from "react";
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogContentText,
  DialogActions,
  Button
} from "@material-ui/core";
import {Add} from "@material-ui/icons";

export default class extends Component {
  state = {open: false};

  handleToggle = () => {
    this.setState({
      open: true
    });
  };

  handleClose = () => {
    this.setState({open: false});
  };

  render() {
    const {open} = this.state;
    return (
      <>
        <Button variant="fab" mini onClick={this.handleToggle}>
          <Add />
        </Button>

        <Dialog open={open} onClose={this.handleClose}>
          <DialogTitle id="form-dialog-title">
            Create a New Exercise
          </DialogTitle>
          <DialogContent>
            <DialogContentText>
              Please fill out the form below
            </DialogContentText>
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
