import {
  Button,
  FormControl,
  InputLabel,
  MenuItem,
  Select,
  Stack,
  TextField,
  Typography
} from "@mui/material";

export default function Support() {
  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h2">Support</Typography>
        <Typography variant="h3">Contact</Typography>
        <Stack spacing={1}>
          <FormControl>
            <InputLabel>Type of request</InputLabel>
            <Select>
              <MenuItem value="1">Report an issue</MenuItem>
              <MenuItem value="2">Question related to billing</MenuItem>
            </Select>
          </FormControl>
          <TextField multiline rows={10} placeholder="Request" />
        </Stack>
        <Button variant="contained">Send</Button>
      </Stack>
    </>
  );
}
