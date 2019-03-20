import React from "react";
import {Paper, Tabs, Tab} from "@material-ui/core";

export default ({muscles, category, onSelect}) => {
  console.log(category);

  // category is the currently selected muscle category
  // Problem is, <Tabs value={}/> is expecting an index
  // So now we have to transform that string into an index

  const index = category // if we have a category,
    ? //we're going to find that category in the list of muscles
      muscles.findIndex(group => group === category) + 1 // + 1 bec of <Tab label='All'/>
    : 0;

  /* ===== MDN: findIndex() =====
    The findIndex() method returns the index of the first element in the array
    that satisfies the provided testing function. 
    Otherwise, it returns -1, indicating no element passed the test.
    */

  return (
    <Paper>
      <Tabs
        value={index}
        // onChange={}
        indicatorColor="primary"
        textColor="primary"
        centered
      >
        <Tab label="All" />
        {muscles.map(muscle => (
          <Tab key={muscle} label={muscle} />
        ))}
      </Tabs>
    </Paper>
  );
};
