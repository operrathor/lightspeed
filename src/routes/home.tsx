import { Alert, AlertTitle, Link, Stack, Typography } from "@mui/material";
import Consumption from "../components/Consumption";

export default function Home() {
  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h2">Home</Typography>
        <Typography variant="h3">Suggestions</Typography>
        <Alert severity="warning">
          <AlertTitle>High nightly consumption</AlertTitle>
          We've detected an unusually high base consumption during nighttime.
          Please check your plugged devices!
        </Alert>
        <Alert severity="info">
          <AlertTitle>Upgrade</AlertTitle>
          Upgrade to our <Link href="#">newest Smart Meter</Link> to get even
          more precise optimization suggestions.
        </Alert>
        <Typography variant="h3">Consumption</Typography>
        <Consumption />
        <Typography variant="h3">Cost</Typography>
        <Stack spacing={1}>
          <Typography>Electricity rate: 10 Cent/kWh.</Typography>
          <Link href="#">Check out other tariffs.</Link>
        </Stack>
      </Stack>
    </>
  );
}
