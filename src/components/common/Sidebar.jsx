import ChatBubbleOutlineOutlinedIcon from "@mui/icons-material/ChatBubbleOutlineOutlined";
import DashboardCustomizeOutlinedIcon from "@mui/icons-material/DashboardCustomizeOutlined";
import DirectionsCarFilledOutlinedIcon from "@mui/icons-material/DirectionsCarFilledOutlined";
import MailOutlinedIcon from "@mui/icons-material/MailOutlined";
import NotificationsOutlinedIcon from "@mui/icons-material/NotificationsOutlined";
import OtherHousesOutlinedIcon from "@mui/icons-material/OtherHousesOutlined";
import SavingsOutlinedIcon from "@mui/icons-material/SavingsOutlined";
import SportsMotorsportsOutlinedIcon from "@mui/icons-material/SportsMotorsportsOutlined";
import SwapHorizOutlinedIcon from "@mui/icons-material/SwapHorizOutlined";
import {Box, Drawer, ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, colors } from "@mui/material";
const menus = [
  {
    title: "inbox",
    icon: <MailOutlinedIcon />,
    state: "inbox",
  },
  {
    title: "Overview",
    icon: <DashboardCustomizeOutlinedIcon />,
    state: "Overview",
  },
  {
    title: "Notification",
    icon: <NotificationsOutlinedIcon />,
    state: "notification",
  },
];

const serviceMenus = [
  {
    title: "Mortage",
    icon: <OtherHousesOutlinedIcon />,
    state: "mortage",
  },
  {
    title: "Car loans",
    icon: <DirectionsCarFilledOutlinedIcon />,
    state: "car lones",
  },
  {
    title: "Insurance",
    icon: <SportsMotorsportsOutlinedIcon />,
    state: "insurance",
  },
];

const investmentMenus = [
  {
    title: "Stock reade",
    icon: <SwapHorizOutlinedIcon />,
    state: "stockerade",
  },
  {
    title: "Finance advice",
    icon: <ChatBubbleOutlineOutlinedIcon />,
    state: "financeadvice",
  },
  {
    title: "Savings account",
    icon: <SavingsOutlinedIcon />,
    state: "savingsaccount",
  },
];


const Sidebar = ({SidebarWidth}) => {

  const activeState = "Overview"

  const contsiner = window !== undefined ? () => window.document.body : undefined

  const MenuItem = (props) => {
    return (
      <ListItem
        key={props.index}
        disableGutters
        disablePadding
        sx={{ py: 0.5 }}
      >
        <ListItemButton
          sx={{
            borderRadius: "10px",
            bgcolor: props.isActive ? colors.red[300] : "",
            color: props.isActive ? colors.common.white : "",
            "&:hover": {
              bgcolor: props.isActive ? colors.red[300] : "",
              color: props.isActive ? colors.common.white : "",
            },
          }}
          >
          <ListItemIcon sx={{
            minWidth: "40px",
            color: props.isActive ? colors.common.white : ""
          }} >
            {props.item.icon}
          </ListItemIcon>
          <ListItemText primary={
            <Typography fontWeight={600}>
              {props.item.title}
            </Typography>
          }>

          </ListItemText>
        </ListItemButton>
      </ListItem>
    );
  }


  const drawer = (
   <Box>

   </Box>
  )

  return (
    <>
    </>
  )
};

export default Sidebar;
