import React from "react";

import MPaper from "./MPaper";
import {
  Box,
  CircularProgress,
  Stack,
  Typography,
  circularProgressClasses,
  colors,
} from "@mui/material";

const toursData = [
  {
    title: "Sold Out",
    value: 391,
    color: colors.blueGrey[500],
  },
  {
    title: "Availbe",
    value: 1189,
    color: colors.grey[400],
  },
];
const ToursData = () => {
  return (
    <MPaper title="Tours Available">
      <Stack spacing={2}>
        <Stack
          direction="row"
          alignItems="center"
          justifyContent="center"
          p={3}
        >
          <Box position="relative">
            <CircularProgress
              variant="determinate"
              size={200}
              value={100}
              sx={{ color: colors.grey[200] }}
            />
            <CircularProgress
              variant="determinate"
              disableShrink
              size={200}
              value={70}
              sx={{
                position: "absolute",
                left: 0,
                color: colors.red[500],
                [`& .${circularProgressClasses.circle}`]: {
                  strokeLinecap: "round",
                },
              }}
            />

            <Box
              sx={{
                position: "absolute",
                left: "50%",
                top: "50%",
                transform: "translate(-50%, -50%)",
              }}
            >
              <Typography variant="subtitle2" color={colors.green[300]}>
                Tours
              </Typography>
              <Typography>502</Typography>
            </Box>
          </Box>
        </Stack>
        <Stack spacing={1}>
          {toursData.map((data, index) => (
            <Stack key={index} direction="row" justifyContent="space-between">
              <Stack direction="row" alignItems="center">
                <Box sx={{
                    width: "15px",
                    height: "15px",
                    borderRadius: "4px",
                    bgcolor: data.color,
                    mr: 1
                }} />
                <Typography variant="subtitle2" color={colors.grey[700]}>
                    {data.title}
                </Typography>
              </Stack>

              <Typography variant="subtitle2">
                {data.value} Tours
              </Typography>
            </Stack>
          ))}
        </Stack>
      </Stack>
    </MPaper>
  );
};

export default ToursData;
