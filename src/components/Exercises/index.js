import React from "react";
import {
  Grid,
  IconButton,
  List,
  ListItem,
  ListItemText,
  ListItemSecondaryAction,
  Paper,
  Typography
} from "@material-ui/core";
import {Delete} from "@material-ui/icons";

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

export default ({
  exercises,
  category,
  onSelect,
  exercise: {
    id,
    title = "Welcome!",
    description = "Please select an exercise from the list on the left."
  },
  onDelete
}) => (
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
                {/* When user clicks on category in left pane, 
                we want to display the contents of that exercise on the right pane */}
                {exercises.map(({id, title}) => (
                  <ListItem key={id} button onClick={() => onSelect(id)}>
                    <ListItemText primary={title} />
                    <ListItemSecondaryAction>
                      <IconButton onClick={() => onDelete(id)}>
                        <Delete />
                      </IconButton>
                    </ListItemSecondaryAction>
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
        <Typography variant="display1">{title}</Typography>
        <Typography variant="subheading" style={{marginTop: 20}}>
          {description}
        </Typography>
      </Paper>
    </Grid>
  </Grid>
);
