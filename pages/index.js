import React, { useEffect, useState } from "react";
import { CircularProgress, Box, Alert, Snackbar } from "@mui/material";
import LogIn from "../components/LogIn";
import Footer from "../components/footer";
import { LogInContext } from "../core/sessionhandle/LoginContext";
import MainSesson from "../components/MainSesson";
import Cookies from "js-cookie";

const CustomCenterBox = ({ children, minHeight }) => (
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
  </Box>
);

function index() {
  const [SnackbarLog, setSnackbarlog] = useState(false);
  const [login, setLogin] = useState(false);
  const [Load, setLoad] = useState(true);
  const [userInfo , setUserInfo] = useState({});
  useEffect(() => {
    setTimeout(() => {
      setLoad(false);
    }, 500);

   

  }, []);

  useEffect(()=>{
      
    if(Cookies.get('userLogin')){
      setLogin(true);
      setUserInfo(JSON.parse(Cookies.get('userLogin')))
    }

  },[])


  if (Load) {
    return (
      <CustomCenterBox minHeight={"100vh"}>
        <CircularProgress size={"20px"} />
      </CustomCenterBox>
    );
  }
  
  console.log(Cookies.get('userLogin')) 
  return (
    <LogInContext.Provider value={{ login, setLogin, setSnackbarlog,setUserInfo }}>
      <Snackbar
        anchorOrigin={{ vertical: "top", horizontal: "center" }}
        open={SnackbarLog}
        onClose={() => {
          setSnackbarlog(false);
        }}
        autoHideDuration={2000}
      >
        <Alert severity="success">LogIn success!</Alert>
      </Snackbar>
      <Box sx={{ background: "#FFFFFF" }}>
        {!login ? (
          <React.Fragment>
            <CustomCenterBox minHeight={"85vh"}>
              <LogIn />
            </CustomCenterBox>
            <Footer />
          </React.Fragment>
        ) : (
          <MainSesson  username={userInfo.name} isAdmin={userInfo.isAdmin} email={userInfo.email} />
        )}
      </Box>
    </LogInContext.Provider>
  );
}

export default index;
