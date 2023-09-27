import React from "react";
import { Box } from "@mui/material";
import { images } from "../assets";

const LoginPage = () => {
  return (
   <Box 
   position="relative"
   height= "100vh"
   sx={{"::-webkit-scrollbar": { displsy: "none"} }}
   >

    {/* background box */}

    <Box  

    sx={{
      position:  "absolute",
      right: 0,
      height: "100%",
      width: "70%",
      backgroundPosition: "center",
      backgroundSize: "cover",
      backgroundRepeat: "no-repeat",
      backgroundImage: `url(${images.loginBg})`
      
    }}
    
    />


   </Box>
  );
};

export default LoginPage;
