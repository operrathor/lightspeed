import { CssBaseline } from "@mui/material";
import { Outlet } from "react-router-dom";

export default function Root() {
  return (
    <>
      <CssBaseline />
      <Outlet />
    </>
  );
}
