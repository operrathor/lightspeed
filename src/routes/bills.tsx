import DownloadIcon from "@mui/icons-material/Download";
import PaymentIcon from "@mui/icons-material/Payment";
import {
  Chip,
  Paper,
  Stack,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
  Typography,
} from "@mui/material";

export default function Bills() {
  return (
    <>
      <Stack spacing={4}>
        <Typography variant="h2">Bills</Typography>
        <TableContainer component={Paper}>
          <TableHead>
            <TableRow>
              <TableCell width="100%">Date</TableCell>
              <TableCell>Status</TableCell>
              <TableCell>Actions</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            <TableRow>
              <TableCell>June 1, 2023</TableCell>
              <TableCell>
                <Chip label="Open" color="warning" size="small" />
              </TableCell>
              <TableCell sx={{ display: "flex", gap: 1 }}>
                <DownloadIcon />
                <PaymentIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>May 1, 2023</TableCell>
              <TableCell>
                <Chip label="Paid" color="success" size="small" />
              </TableCell>
              <TableCell sx={{ display: "flex" }}>
                <DownloadIcon />
              </TableCell>
            </TableRow>
            <TableRow>
              <TableCell>April 1, 2023</TableCell>
              <TableCell>
                <Chip label="Paid" color="success" size="small" />
              </TableCell>
              <TableCell sx={{ display: "flex" }}>
                <DownloadIcon />
              </TableCell>
            </TableRow>
          </TableBody>
        </TableContainer>
      </Stack>
    </>
  );
}
