import Box from "@mui/material/Box";
import { useState } from "react";
import NavigationAppBar from "./NavigationAppBar";
import NavigationDrawer from "./NavigationDrawer";

export type NavigationLink = {
  title: string;
  to: string;
};

const links: NavigationLink[] = [
  {
    title: "Bills",
    to: "/app/bills",
  },
  {
    title: "Profile",
    to: "/app/profile",
  },
  {
    title: "Support",
    to: "/app/support",
  },
];

export default function Navigation() {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  return (
    <Box sx={{ display: "flex" }}>
      <NavigationAppBar links={links} handleDrawerToggle={handleDrawerToggle} />
      <NavigationDrawer
        links={links}
        mobileOpen={mobileOpen}
        handleDrawerToggle={handleDrawerToggle}
      />
    </Box>
  );
}
