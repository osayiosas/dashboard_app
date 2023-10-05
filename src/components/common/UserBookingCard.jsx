import React from 'react'
import MPaper from './MPaper'
import { Box, Avatar, Stack, Typography, colors } from '@mui/material'
import { images } from '../../assets';

import  CalendarMonthOutlinedIcon  from '@mui/icons-material/CalendarMonthOutlined';
import PeopleAltOutlinedIcon from '@mui/icons-material/PeopleAltOutlined';

const UserBookingCard = () => {
  return (
    <MPaper title="Latest booking">
      <Stack spacing={3}>
        {/* user info*/}
        <Stack direction="row" spacing={2}>
          <Avatar alt="user" src={images.userProfile} />
          <Stack justifyContent="space-between">
            <Typography variant="subtitle2">Joan Idiaghe</Typography>
            <Typography variant="caption" color={colors.grey[700]}>
              1 Oct 2023 10:15pm
            </Typography>
          </Stack>
        </Stack>
        {/* user info*/}
        {/* booking info*/}
        <Stack
          direction="row"
          alignContent="center"
          spacing={5}
          sx={{
            color: colors.grey[600],
          }}
        >
          <Stack direction="row" spacing={1} alignItems="center">
            <CalendarMonthOutlinedIcon fontSize="small" />

            <Typography variant="body2" fontWeight={500}>
              3 days 2 night
            </Typography>
          </Stack>

          <Stack direction="row" spacing={1} alignItems="center">
            <PeopleAltOutlinedIcon fontSize="small" />

            <Typography variant="body2" fontWeight={500}>
              2 - 3 guests
            </Typography>
          </Stack>
        </Stack>
        {/* booking info*/}

        {/* img */}
        <Box sx={{
            pt: "100%",
            position: "relative",
            " & img": {
                position: "absolute",
                top: 0,
                height: "100%",
                width: "100%",
                borderRadius: 8
            }
        }}>
            <img src={images.bookingImage} alt="booking" />
        </Box>
        {/* img */}
      </Stack>
    </MPaper>
  );
}

export default UserBookingCard