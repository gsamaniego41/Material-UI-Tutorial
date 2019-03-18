import React from "react";
import {Paper, Tabs, Tab} from "@material-ui/core";

export default ({muscles}) => (
  <Paper>
    {/* Paper is just a container w/ light border and box-shadow */}
    <Tabs
      value={0} // value takes in an index, functions like selected tab
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="All" /> {/* Will be selected by default bec of value={0} */}
      {muscles.map(muscle => (
        <Tab key={muscle} label={muscle} />
      ))}
    </Tabs>
  </Paper>
);
