import { Button, Container, Stack, TextField, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

export default function Login() {
  const navigate = useNavigate();
  return (
    <Container maxWidth="sm">
      <Stack spacing={4} paddingTop={12}>
        <Typography variant="h2">Lightspeed</Typography>
        <Typography variant="h1">Login</Typography>
        <form onSubmit={() => navigate("/app")}>
          <Stack spacing={1}>
            <TextField placeholder="User" />
            <TextField type="password" placeholder="Password" />
            <Button type="submit" variant="contained">
              Login
            </Button>
          </Stack>
        </form>
      </Stack>
    </Container>
  );
}
