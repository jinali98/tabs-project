import { Box } from "@material-ui/core";
import React from "react";
import DisplayItem from "./DisplayItem";

const Display = (props) => {
  return (
    <Box m={10}>
      <DisplayItem item={props.item} duties={props.duties} />
    </Box>
  );
};

export default Display;
