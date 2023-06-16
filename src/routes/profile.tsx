import { Button, Stack, TextField, Typography } from "@mui/material";

export default function Profile() {
  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h2">Profile</Typography>
        <Typography variant="h3">Contact</Typography>
        <Stack spacing={1}>
          <TextField placeholder="Email address" />
          <TextField placeholder="Phone number" />
        </Stack>
        <Typography variant="h3">Billing</Typography>
        <Stack spacing={1}>
          <TextField placeholder="Street" />
          <TextField placeholder="Postal code" />
          <TextField placeholder="City" />
        </Stack>
        <Button variant="contained">Save</Button>
      </Stack>
    </>
  );
}
