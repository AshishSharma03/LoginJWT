import { Box, Avatar, Typography, Stack, Button, Alert } from "@mui/material";
import Image from "next/image";
import React, { useState } from "react";
import Link from "../../muiSrc/LInk";
import Cinput from "../CustomComponents/Cinput";
import ICUSER from "../../public/assets/ic_user.svg";

function LogIn() {
  const [Email, setEmail] = useState();
  const [Pass, setPass] = useState();
  const [Error, setError] = useState(false);
  const [ErrorMessege, setErrorMessege] = useState("");

  const onHandleSubmit = () => {
    console.log({ Email, Pass });
    var Ere = /\S+@\S+\.\S+/;
    let pass =
      /^(?!.*\s)(?=.*[A-Z])(?=.*[a-z])(?=.*[0-9])(?=.*[~`!@#$%^&*()--+={}\[\]|\\:;"'<>,.?/_₹]).{8,16}$/;

    if (Email && Pass) {
      if (!Email.match(Ere)) {
        setErrorMessege("Email not valid");
        setError(true);
      } else {
        setError(false);

        if (!Pass.match(pass)) {
          setErrorMessege(
            "Password  must 8 to 16 characters which contain at least one numeric digit, one uppercase and one lowercase letter and  one Special Symbol."
          );
          setError(true);
        } else {
          setError(false);
        
        }
      }
    } else {
      setErrorMessege("Please Enter Email & password");
      setError(true);
    }
  };

  return (
    <Box
      minWidth={{ sm: "400px", xs: "360px" }}
      sx={{ transition: "0.9s" }}
      padding="10px"
    >
      {/* title boxes   */}
      <Stack alignItems={"center"} spacing={1} marginBottom={2}>
        <Avatar
          sx={{
            height: "150px",
            width: "150px",
            padding: "10px",
            background: "#EFEFEF",
          }}
        >
          <Image src={ICUSER} alt="" style={{ width: "80px" }} />
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

      {Error ? (
        <Alert severity="error" sx={{margin:"10px"}}>
          <Typography
            maxWidth={{ sm: "300px", xs: "250px" }}
            fontSize="10px"
            fontWeight={600}
          >
            {ErrorMessege}
          </Typography>
        </Alert>
      ) : (
        ""
      )}

      {/* input boxes */}
      <Stack spacing={1}>
        <Cinput
          placeholder={"Email Address"}
          onChange={(e) => {
            setEmail(e.target.value);
          }}
        />
        <Cinput
          placeholder={"Password"}
          type={"password"}
          onChange={(e) => {
            setPass(e.target.value);
          }}
          visiblity
        />
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
        onClick={onHandleSubmit}
      >
        Sign In
      </Button>
    </Box>
  );
}

export default LogIn;
