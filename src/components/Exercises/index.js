import React from "react";
import {Grid, Paper} from "@material-ui/core";
// App biz logic

export default props => (
  // Grid (2 types) either has to be a grid container or a grid item
  // 5 Grid breakpoints (12 column system)
  // xs = 0px or larger
  // sm = 600px or larger
  // md = 960px or larger
  // lg = 1280px or larger
  // xl = 1920px or larger
  <Grid container sm={12}>
    {/* can be customized sm={12} */}
    <Grid item sm={8}>
      {/* if sm is not customized, the grid will automatically adjust if we add more items */}
      <Paper>Left Pane</Paper>
    </Grid>
    <Grid item sm={4}>
      <Paper>Right Pane</Paper>
    </Grid>
  </Grid>
);
