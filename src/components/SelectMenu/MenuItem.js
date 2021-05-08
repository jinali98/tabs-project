import { Button } from "@material-ui/core";
import React, { useState } from "react";

const MenuItem = (props) => {
  const [btnkey, setBtnKey] = useState(props.btnkey);

  const menuHandler = () => {
    props.menuItem(btnkey);
  };

  return (
    <div>
      <Button color="primary" variant="contained" onClick={menuHandler}>
        {props.label}
        {props.order}
      </Button>
    </div>
  );
};

export default MenuItem;
