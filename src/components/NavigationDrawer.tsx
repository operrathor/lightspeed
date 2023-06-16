import MailIcon from "@mui/icons-material/Mail";
import { Badge, Drawer } from "@mui/material";
import Box from "@mui/material/Box";
import Divider from "@mui/material/Divider";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { NavigationLink } from "./Navigation";

type Props = {
  links: NavigationLink[];
  mobileOpen: boolean;
  handleDrawerToggle: () => void;
};

export default function NavigationDrawer({
  links,
  mobileOpen,
  handleDrawerToggle,
}: Props) {
  const navigate = useNavigate();

  return (
    <Drawer
      variant="temporary"
      open={mobileOpen}
      onClose={handleDrawerToggle}
      sx={{
        display: { xs: "block", sm: "none" },
        "& .MuiDrawer-paper": {
          boxSizing: "border-box",
          width: 240,
        },
      }}
    >
      <Box
        onClick={() => handleDrawerToggle()}
        sx={{ textAlign: "center", mt: 2 }}
      >
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
          {links.map((link) => (
            <ListItem disablePadding>
              <ListItemButton
                component={RouterLink}
                to={link.to}
                sx={{ textAlign: "center" }}
              >
                <ListItemText primary={link.title} />
              </ListItemButton>
            </ListItem>
          ))}
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
    </Drawer>
  );
}
