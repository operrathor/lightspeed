import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { useState } from "react";
import { Link as RouterLink, useNavigate } from "react-router-dom";

const drawerWidth = 240;

export default function DrawerAppBar() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const navigate = useNavigate();

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center", mt: 2 }}>
      <Typography
        variant="h6"
        component={RouterLink}
        to="/app"
        color="inherit"
        sx={{ textDecoration: "none" }}
      >
        Lightspeed
      </Typography>
      <Divider sx={{ mt: 2 }} />
      <List>
        <ListItem disablePadding>
          <ListItemButton sx={{ justifyContent: "center" }}>
            <Badge badgeContent={4} color="error">
              <MailIcon color="inherit" />
            </Badge>
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/app/bills"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Bills" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/app/profile"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Profile" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            component={RouterLink}
            to="/app/support"
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Support" />
          </ListItemButton>
        </ListItem>
        <ListItem disablePadding>
          <ListItemButton
            onClick={() => navigate("/")}
            sx={{ textAlign: "center" }}
          >
            <ListItemText primary="Logout" />
          </ListItemButton>
        </ListItem>
      </List>
    </Box>
  );

  return (
    <Box sx={{ display: "flex" }}>
      <AppBar component="nav">
        <Toolbar>
          <IconButton
            color="inherit"
            aria-label="open drawer"
            edge="start"
            onClick={handleDrawerToggle}
            sx={{ mr: 2, display: { sm: "none" } }}
          >
            <MenuIcon />
          </IconButton>

          <Typography
            variant="h6"
            component={RouterLink}
            to="/app"
            color="inherit"
            sx={{
              flexGrow: 1,
              display: { xs: "none", sm: "block" },
              textDecoration: "none",
            }}
          >
            Lightspeed
          </Typography>
          <Box
            sx={{
              display: { xs: "none", sm: "flex" },
              gap: 2,
              alignItems: "center",
            }}
          >
            <Button color="inherit" sx={{ minWidth: 0 }}>
              <Badge badgeContent={4} color="error">
                <MailIcon color="inherit" />
              </Badge>
            </Button>
            <Button color="inherit" component={RouterLink} to="/app/bills">
              Bills
            </Button>
            <Button color="inherit" component={RouterLink} to="/app/profile">
              Profile
            </Button>
            <Button color="inherit" component={RouterLink} to="/app/support">
              Support
            </Button>
            <Button color="inherit" onClick={() => navigate("/")}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </AppBar>
      <Box component="nav">
        <Drawer
          variant="temporary"
          open={mobileOpen}
          onClose={handleDrawerToggle}
          ModalProps={{
            keepMounted: true, // Better open performance on mobile.
          }}
          sx={{
            display: { xs: "block", sm: "none" },
            "& .MuiDrawer-paper": {
              boxSizing: "border-box",
              width: drawerWidth,
            },
          }}
        >
          {drawer}
        </Drawer>
      </Box>
    </Box>
  );
}
