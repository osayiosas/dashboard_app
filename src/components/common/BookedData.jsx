import { Box, LinearProgress, Stack, Typography, colors, linearProgressClasses  } from "@mui/material";
import React from "react";
import MPaper from "./MPaper";



const bookedData = [
  {
    title: "Pendding",
    value: 1000,
    percent: 30,
    color: colors.deepOrange[200],
  },
  {
    title: "Cancelled",
    value: 100,
    percent: 30,
    color: colors.red[400],
  },
  {
    title: "Sold",
    value: 2500,
    percent: 30,
    color: colors.green[400],
  },
];

const BookedData = () => {
  return (
    <MPaper title="Booked" fullHeight>
      <Stack spacing={4}>
        {bookedData.map((data, index) => (
          <Stack spacing={1} key={index}>
            <Stack direction="row" justifyContent="space-between">
              <Typography variant="caption" fontWeight="600">
                {data.title}
              </Typography>
              <Typography variant="caption" fontWeight="600">
                {data.value}
              </Typography>
              <Typography variant="caption" fontWeight="600">
                {data.percent}
              </Typography>
            </Stack>
            <Box>
              <LinearProgress
                variant="determinate"
                value={data.percent}
                sx={{
                  bgcolor: colors.grey[200],
                  height: 10,
                  borderRadius: 5,
                  [`& .${linearProgressClasses.bar}`]: {
                    borderRadius: 5,
                    bgcolor: data.color,
                  },
                }}
              />
            </Box>
          </Stack>
        ))}
      </Stack>
    </MPaper>
  );
};

export default BookedData;
