import React from "react";
import {
  Grid,
  Paper,
  Typography,
  List,
  ListItem,
  ListItemText
} from "@material-ui/core";

// Many ways to style - Material UI uses JSS
const styles = {
  Paper: {
    padding: 20,
    marginTop: 10,
    marginBottom: 10,
    height: "500px",
    overflowY: "auto"
  }
};

export default ({exercises, category}) => (
  <Grid container>
    <Grid item sm>
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) =>
          // display the list if the category is falsy
          // OR if the category equals the group we're looping through atm
          !category || category === group ? (
            <React.Fragment key={group}>
              <Typography
                variant="headline"
                style={{textTransform: "capitalize"}}
              >
                {group}
              </Typography>
              <List>
                {exercises.map(({title}) => (
                  <ListItem key={title} button>
                    <ListItemText primary={title} />
                  </ListItem>
                ))}
              </List>
            </React.Fragment>
          ) : null
        )}
      </Paper>
    </Grid>
    <Grid item sm>
      <Paper style={styles.Paper}>
        <Typography variant="display1">Welcome!</Typography>
        <Typography variant="subheading" style={{marginTop: 20}}>
          Please select an exercise from the list on the left.
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
