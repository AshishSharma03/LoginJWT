import { Box, Container, Stack, Typography } from "@mui/material";
import Image from "next/image";
import React from "react";
import Link from "../../muiSrc/LInk";
import ICZ from "../../public/assets/ic_zaperon.png";

const CustomLink = ({ marginRight, name, href }) => (
  <Link
    href={href}
    sx={{ fontWeight: 700, textDecoration: "none" }}
    marginRight={marginRight ? { xs: "none", sm: marginRight } : "0"}
  >
    {name}
  </Link>
);

const CustomGrayText = ({ text }) => (
  <Typography sx={{ fontWeight: 700, color: "#A2A2A2" }}>{text}</Typography>
);

function Footer() {
  return (
    <Container>
      <Stack
        direction={{ sm: "row", xs: "column" }}
        justifyContent="center"
        alignItems={"center"}
      >
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={"5px"}
          sx={{ display: { sm: "flex", xs: "none" } }}
        >
          <CustomGrayText text="Powered by" />
          <Image src={ICZ} alt="" />
        </Stack>
        <span style={{ flexGrow: 1 }} />
        <CustomLink name={"Need Help?"} href={"/"} marginRight="30px" />
        <Stack direction={"row"} spacing={"3px"}>
          <CustomLink name={"Privacy Policy"} href={"/"} />
          <CustomGrayText text="&" />
          <CustomLink name={"Terms"} href={"/"} />
        </Stack>
        <Stack
          direction={"row"}
          alignItems="center"
          spacing={"2px"}
          sx={{ display: { sm: "none", xs: "flex" } }}
        >
          <CustomGrayText text="Powered by" />
          <Image src={ICZ} alt="" />
        </Stack>
      </Stack>
    </Container>
  );
}

export default Footer;
