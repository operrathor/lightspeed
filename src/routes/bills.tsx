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

type Bill = {
  date: string;
  paid: boolean;
};

const bills: Bill[] = [
  {
    date: "June 1, 2023",
    paid: false,
  },
  {
    date: "May 1, 2023",
    paid: true,
  },
  {
    date: "April 1, 2023",
    paid: true,
  },
];

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
            {bills.map((bill) => (
              <TableRow key={bill.date}>
                <TableCell>{bill.date}</TableCell>
                {bill.paid ? (
                  <>
                    <TableCell>
                      <Chip label="Paid" color="success" size="small" />
                    </TableCell>
                    <TableCell sx={{ display: "flex", gap: 1 }}>
                      <DownloadIcon />
                    </TableCell>
                  </>
                ) : (
                  <>
                    <TableCell>
                      <Chip label="Open" color="warning" size="small" />
                    </TableCell>
                    <TableCell sx={{ display: "flex", gap: 1 }}>
                      <DownloadIcon />
                      <PaymentIcon />
                    </TableCell>
                  </>
                )}
              </TableRow>
            ))}
          </TableBody>
        </TableContainer>
      </Stack>
    </>
  );
}
