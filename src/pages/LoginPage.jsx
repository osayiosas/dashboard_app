import React, { useState } from "react";
import {
  Box,
  Stack,
  colors,
  TextField,
  Button,
  FormGroup,
  FormControlLabel,
  Typography,
  Link,
  Checkbox,
} from "@mui/material";
import { images } from "../assets";

const LoginPage = () => {
  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [islogedIn, setIslogedin] = useState(false);
  return (
    <Box
      position="relative"
      height="100vh"
      sx={{ "::-webkit-scrollbar": { displsy: "none" } }}
    >
      {/* background box */}

      <Box
        sx={{
          position: "absolute",
          right: 0,
          height: "100%",
          width: "70%",
          backgroundPosition: "center",
          backgroundSize: "cover",
          backgroundRepeat: "no-repeat",
          backgroundImage: `url(${images.loginBg})`,
        }}
      />

      {/* login form*/}

      <Box
        sx={{
          position: "absolute",
          left: 0,
          height: "100%",
          width: islogedIn
            ? "100%"
            : { x1: "30%", lg: "40%", md: "50%", xs: "100%" },
          transition: "all 1s ease-in-out",
          bgcolor: colors.common.white,
        }}
      >
        <Box
          sx={{
            display: "flex",
            flexDirection: "colum",
            justifyContent: "space-between",
            opacity: islogedIn ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            height: "100%",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* logo */}
          <Box sx={{ textAlign: "center ", p: 5 }}>
            <img src={images.logo} alt="logo" height={60}></img>
          </Box>
          {/* logo */}

          {/* form */}

          <Box
            sx={{
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
              height: "100%",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              "::-webkit-scrollbar": { display: "none" },
            }}
          >
            <Box component="form" maxWidth={400} width="100%">
              <Stack spacing={3}>
                <TextField label="username" fullWidth />
                <TextField label="password" type="password" fullWidth />
                <Button
                  type="submit"
                  size="large"
                  variant="contained"
                  color="error"
                >
                  sign in
                </Button>
                <Stack
                  direction="row"
                  justifyContent="space-between"
                  alignItems="center"
                >
                  <FormGroup>
                    <FormControlLabel
                      control={<Checkbox />}
                      label="Remember me"
                    />
                  </FormGroup>
                  <Typography color="error" fontWeight="bold">
                    <Link to="#">Forgot password?</Link>
                  </Typography>
                </Stack>
              </Stack>
            </Box>
          </Box>

          {/* form */}
        </Box>
      </Box>

      {/* login form*/}
    </Box>
  );
};

export default LoginPage;
