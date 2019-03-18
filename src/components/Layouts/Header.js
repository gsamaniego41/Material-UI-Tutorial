import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core/";

export default props => (
  <AppBar position="static">
    <Toolbar>
      {/* Custom font sizes
        display 1-4, headline, title, subheading, body, caption, button 
        Ex:
          <Typography variant="display4" gutterBottom>Display 4</Typography>

        gutterBottom = like padding-bottom
      */}
      <Typography variant="headline" color="inherit">
        Exercise Database
      </Typography>
    </Toolbar>
  </AppBar>
);
