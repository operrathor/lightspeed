import { Container } from "@mui/material";
import { Outlet } from "react-router-dom";
import Navigation from "../components/Navigation";

function App() {
  return (
    <>
      <Navigation />
      <Container maxWidth="sm" sx={{ pt: 12, pb: 4 }}>
        <Outlet />
      </Container>
    </>
  );
}

export default App;
