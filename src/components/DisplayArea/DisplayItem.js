import { Box, Typography } from "@material-ui/core";
import React, { useEffect, useState } from "react";
import Duties from "./Duties";

const DisplayItem = (props) => {
  return (
    <React.Fragment>
      <Typography color="primary" variant="h5">
        <Box fontWeight="fontWeightBold">{props.item.title}</Box>
      </Typography>
      <Typography color="primary">
        <p>{props.item.company}</p>
      </Typography>
      <Typography color="textSecondary">
        <p>{props.item.dates}</p>
      </Typography>

      {props.duties &&
        props.duties.map((each, index) => {
          return <Duties key={index} duty={each} />;
        })}
    </React.Fragment>
  );
};

export default DisplayItem;
