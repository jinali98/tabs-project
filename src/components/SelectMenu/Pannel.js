import { Box, Container, Grid } from "@material-ui/core";
import React, { useState } from "react";
import MenuItem from "./MenuItem";

const Pannel = (props) => {
  const selectItemHandler = (id) => {
    props.menuItem(id);
  };

  return (
    <Box display="flex" justifyContent="center" mt={5}>
      {props.data.map((each) => {
        return (
          <Box md={4} sm={4} xs={12} m={2}>
            <MenuItem
              label={each.title}
              key={each.id}
              btnkey={each.id}
              menuItem={selectItemHandler}
            />
          </Box>
        );
      })}
    </Box>
  );
};

export default Pannel;
