import { Box, Avatar, Typography, Stack, Button } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Link from "../../muiSrc/LInk";
import Cinput from "../CustomComponents/Cinput";
import ICUSER from "../../public/assets/ic_user.svg";

function LogIn() {
  const [state, setstate] = useState();

  console.log(state);
  return (
    <Box
      minWidth={{ sm: "360px", xs: "0px" }}
      sx={{ transition: "0.9s" }}
      padding="10px"
    >
      {/* title boxes   */}
      <Stack alignItems={"center"} spacing={1} marginBottom={2}>
        <Avatar
          sx={{
            height: "100px",
            width: "100px",
            padding: "10px",
            background: "#EFEFEF",
          }}
        >
          <Image src={ICUSER} alt="" style={{ width: "50px" }} />
        </Avatar>
        <Typography
          sx={{ fontSize: "40px", color: "#0B3558", fontWeight: "Bolder" }}
        >
          Welcome!
        </Typography>
        <Typography
          textAlign={"center"}
          sx={{ fonyWeight: 500, color: "#0B3558" }}
        >
          Let's connect to your workspace. <br />
          Please enter your credentials to continue.
        </Typography>
      </Stack>

      {/* input boxes */}
      <Stack spacing={1}>
        <Cinput
          placeholder={"Email Address"}
          onChange={(e) => {
            setstate(e.target.value);
          }}
        />
        <Cinput placeholder={"Password"} type={"password"} visiblity />
        <Link
          href="/"
          textAlign="right"
          sx={{ fontWeight: 700, textDecoration: "none" }}
        >
          Forgot Password?
        </Link>
      </Stack>
      <Button
        variant="contained"
        fullWidth
        sx={{
          textTransform: "inherit",
          padding: "5px",
          fontSize: "15px",
          marginTop: "20px",
          boxShadow: "none",
        }}
      >
        Sign In
      </Button>
    </Box>
  );
}

export default LogIn;
