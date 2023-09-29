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
  Checkbox,
  CircularProgress,
} from "@mui/material";
import { images } from "../assets";
import { Link, useNavigate } from "react-router-dom";

import Animate from '../components/common/Animate'

const LoginPage = () => {
  const navigate = useNavigate();

  const [onRequest, setOnRequest] = useState(false);
  const [loginProgress, setLoginProgress] = useState(0);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  const onSignin = (e) => {
    e.preventDefault();
    setOnRequest(true);

    const interval = setInterval(() => {
      setLoginProgress((prev) => prev + 100 / 40);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    setTimeout(() => {
      setIsLoggedIn(true);
    }, 2100);

    setTimeout(() => {
      navigate("/dashboard");
    }, 3300);
  };
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
          width: isLoggedIn
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
            opacity: isLoggedIn ? 0 : 1,
            transition: "all 0.3s ease-in-out",
            height: "100%",
            "::-webkit-scrollbar": { display: "none" },
          }}
        >
          {/* logo */}
          <Box sx={{ textAlign: "center ", p: 5 }}>
            <Animate type="fade" delay={0.5}>
              <img src={images.logo} alt="logo" height={60}></img>
            </Animate>
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
            <Animate type="fade" sx={{ maxWidth: 400, width: "100%" }}>
              <Box
                component="form"
                maxWidth={400}
                width="100%"
                onSubmit={onSignin}
              >
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
              {/* footer*/}

              <Box sx={{ textAlign: "center", p: 5, zIndex: 2 }}>
                <Typography
                  display="inline"
                  fontWeight="bold"
                  sx={{ "& > a": { color: colors.red[900], ml: "5px" } }}
                >
                  Don't have account -<Link to="#">Regisster now</Link>
                </Typography>
              </Box>

              {/* footer*/}
            </Animate>
          </Box>

          {/* form */}
        </Box>

        {/* loading */}
        {onRequest && (
          <Stack
            alignItems="center"
            justifyContent="center"
            sx={{
              height: "100vh",
              position: "absolute",
              top: 0,
              left: 0,
              bgcolor: colors.common.white,
              zIndex: 1000,
            }}
          >
            <Box position="relative">
              <CircularProgress
                variant="determinate"
                sx={{ color: colors.grey[300] }}
                size={100}
                value={100}
              />

              <CircularProgress
                variant="determinate"
                disableShrink
                value={loginProgress}
                size={100}
                sx={{
                  [`& .${CircularProgress.circle}`]: {
                    strokeLinecap: "round",
                  },
                  position: "absolute",
                  left: 0,
                  color: colors.green[600],
                }}
              />
            </Box>
          </Stack>
        )}
        {/* loading */}
      </Box>

      {/* login form*/}
    </Box>
  );
};

export default LoginPage;
