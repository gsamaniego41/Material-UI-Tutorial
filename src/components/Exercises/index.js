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

export default ({exercises}) => (
  // Grid (2 types) either has to be a grid container or a grid item
  // 5 Grid breakpoints (12 column system)
  // xs = 0px or larger
  // sm = 600px or larger
  // md = 960px or larger
  // lg = 1280px or larger
  // xl = 1920px or larger
  <Grid container>
    {/* can be customized sm={12} */}
    <Grid item sm>
      {/* if sm is not customized, the grid will automatically adjust if we add more items */}
      <Paper style={styles.Paper}>
        {exercises.map(([group, exercises]) => (
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
        ))}
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
