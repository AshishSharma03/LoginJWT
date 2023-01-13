import { IconButton, InputBase, Paper } from "@mui/material";
import React, { useState } from "react";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";




function Cinput({ type, placeholder, onChange }) {
  const [state, setstate] = useState("");
  const [checkPass, setCheckPass] = useState(false);

  return (
    <Paper
      sx={{
        display: "flex",
        boxShadow: "none",
        borderRadius: "2px",
        border: "1px solid #B9B9B9",
        padding: "0px 5px",

      }}
    >
      {type == "password" ? (
        <React.Fragment>
          <InputBase
            fullWidth
            placeholder={placeholder}
            sx={{ fontSize: "13px", padding: "5px 10px" }}
            type={!checkPass ? "password" : "text"}
            onChange={onChange}
          />
          <IconButton
            size="small"
            onClick={() => {
              setCheckPass(!checkPass);
            }}
            color="primary"
          >
            {checkPass ? (
              <VisibilityOutlinedIcon />
            ) : (
              <VisibilityOffOutlinedIcon />
            )}
          </IconButton>
        </React.Fragment>
      ) : (
        <InputBase
          fullWidth
          placeholder={placeholder}
          sx={{ fontSize: "13px", padding: "5px 10px" }}
          type={type}
          onChange={onChange}
        />
      )}
    </Paper>
  );
}

export default Cinput;
