import {
  Alert,
  AppBar,
  Avatar,
  Box,
  Card,
  CardHeader,
  Container,
  IconButton,
  Rating,
  Snackbar,
  Stack,
  Toolbar,
  Typography,
} from "@mui/material";
import Image from "next/image";
import React, { useContext } from "react";
import ic_zaperon from "../../public/assets/ic_zaperon.png";
import PowerSettingsNewRoundedIcon from "@mui/icons-material/PowerSettingsNewRounded";
import { LogInContext } from "../../core/sessionhandle/LoginContext";
import VerifiedUserOutlinedIcon from "@mui/icons-material/VerifiedUserOutlined";
import GitHubIcon from "@mui/icons-material/GitHub";
import Head from "next/head";
import Cookies from "js-cookie";
import Footer from "../footer";

function MainSesson({ username, isAdmin, email }) {
  const { setLogin } = useContext(LogInContext);
  return (
    <Box>
      <Head>
        <title>Main</title>
      </Head>
      <AppBar sx={{ background: "#ffffff", boxShadow: "none" }}>
        <Container maxWidth="xl">
          <Toolbar>
            <Image src={ic_zaperon} alt="Apelon" />
            <span style={{ flexGrow: 1 }} />

            <Typography sx={{ color: "#A2A2A2", marginRight: "3px" }}>
              Sign out
            </Typography>
            <IconButton
              onClick={() => {
                setLogin(false);
                Cookies.remove("userLogin", { path: "/" });
              }}
            >
              <PowerSettingsNewRoundedIcon
                sx={{ "&:hover": { color: "red" } }}
              />
            </IconButton>
          </Toolbar>
        </Container>
      </AppBar>
      <Box
        minHeight={{ sm: "90vh", xs: "85vh" }}
        sx={{
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <Typography
          sx={{
            fontSize: { xs: "40px", sm: "50px" },
            fontWeight: "900",
            textAlign: "center",
          }}
        >
          Welcome <span style={{ color: "#003FB9" }}>{username}</span> !
        </Typography>
        <Card
          sx={{
            width: "300px",
            boxShadow: "0px 10px 100px rgba(0,0,0,0.1  )",
            borderRadius: "50px",
          }}
        >
          <CardHeader
            avatar={<Avatar sx={{ height: "50px", width: "50px" }}></Avatar>}
            title={
              <Stack direction={"row"} alignItems="center">
                <Typography sx={{ fontSize: "20px", fontWeight: "800" }}>
                  {username}
                </Typography>
                <VerifiedUserOutlinedIcon
                  sx={{ color: isAdmin ? "green" : "gray" }}
                />{" "}
              </Stack>
            }
            subheader={email}
          />
        </Card>
        <Rating />
        <Box padding="10px">
          <Alert severity="info">
            Cookies expires in 1 minute and redirect to "Signin" page.
          </Alert>
        </Box>
      </Box>
      <Footer />
    </Box>
  );
}

export default MainSesson;
