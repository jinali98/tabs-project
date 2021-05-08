import { Box, Typography } from "@material-ui/core";
import CheckIcon from "@material-ui/icons/Check";
import React from "react";

const Duties = (props) => {
  return (
    <React.Fragment>
      <Typography variant="body2">
        <Box mt={2}>
          <CheckIcon color="secondary" variant="rounded" g />
          {props.duty}
        </Box>
      </Typography>
    </React.Fragment>
  );
};

export default Duties;
