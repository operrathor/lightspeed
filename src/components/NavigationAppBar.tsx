import MailIcon from "@mui/icons-material/Mail";
import MenuIcon from "@mui/icons-material/Menu";
import { Badge, Container } from "@mui/material";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import { Link as RouterLink, useNavigate } from "react-router-dom";
import { NavigationLink } from "./Navigation";

type Props = {
  links: NavigationLink[];
  handleDrawerToggle: () => void;
};

export default function NavigationAppBar({ links, handleDrawerToggle }: Props) {
  const navigate = useNavigate();

  return (
    <AppBar component="nav">
      <Container maxWidth="md">
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
            {links.map((link) => (
              <Button color="inherit" component={RouterLink} to={link.to}>
                {link.title}
              </Button>
            ))}
            <Button color="inherit" onClick={() => navigate("/")}>
              Logout
            </Button>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
