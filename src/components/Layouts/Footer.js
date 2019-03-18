import React from "react";
import {Paper, Tabs, Tab} from "@material-ui/core";

export default props => (
  <Paper>
    {/* Paper is just a container w/ light border and box-shadow */}
    <Tabs
      value={0} // value takes in an index, functions like selected tab
      indicatorColor="primary"
      textColor="primary"
      centered
    >
      <Tab label="Item 1" />
      <Tab label="Item 2" />
      <Tab label="Item 3" />
    </Tabs>
  </Paper>
);
