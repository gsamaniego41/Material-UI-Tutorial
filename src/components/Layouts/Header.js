import React from "react";
import {AppBar, Toolbar, Typography} from "@material-ui/core/";
import CreateDialog from "../Exercises/Dialogs/Create";

export default ({muscles, onExerciseCreate}) => (
  <AppBar position="static">
    <Toolbar>
      {/* Custom font sizes
        display 1-4, headline, title, subheading, body, caption, button 
        Ex:
          <Typography variant="display4" gutterBottom>Display 4</Typography>

        gutterBottom = like padding-bottom
      */}
      <Typography variant="headline" color="inherit" style={{flex: 1}}>
        {/* flex: 1 pushes the button to the right */}
        Exercise Database
      </Typography>

      <CreateDialog muscles={muscles} onCreate={onExerciseCreate} />
    </Toolbar>
  </AppBar>
);
