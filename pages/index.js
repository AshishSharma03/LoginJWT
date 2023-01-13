import React, { useEffect, useState } from "react";
import { Avatar, Box, Card, CircularProgress, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import Link from "../muiSrc/LInk";
import LogIn from "../components/LogIn";
import Footer from "../components/footer";

const CustomCenterBox = ({children,minHeight})=>
<Box
sx={{
  display: "flex",
  justifyContent: "center",
  alignItems: "center",
  flexDirection: "column",
  minHeight: `${minHeight}`,
  width: "100%",
}}
>
{children}

</Box>;


function index() {
  const [Load, setLoad] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);
  }, []);

  if (Load) {
    return (
      <CustomCenterBox minHeight={"100vh"}>
        <CircularProgress size={"20px"} />
      
      </CustomCenterBox>
    );
  }

  return (
    <Box sx={{ background: "#FFFFFF" }}>
      <CustomCenterBox minHeight={"90vh"}>
        <LogIn />
      </CustomCenterBox>
      
      <Footer />
    </Box>
  );
}

export default index;
