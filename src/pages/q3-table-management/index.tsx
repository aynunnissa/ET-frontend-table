import InvoiceTable from "@/components/table-management/InvoiceTable";
import { Box, Button, Divider, InputAdornment, Stack, TextField, Typography } from "@mui/material";
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';

const TableManagement = () => {
  return(
    <Box>
      <Typography my={4} px={8} variant="h5" component="h1">Manage Invoices</Typography>
      <Divider />
      <Box my={4} px={8}>
        <Stack my={2} direction="row" justifyContent="space-between" alignItems="center">
          <TextField
            id="outlined-start-adornment"
            sx={{ width: '50ch' }}
            placeholder="Search Invoices"
            slotProps={{
              input: {
                startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
              },
            }}
          />
          <Button variant="contained"><AddIcon sx={{ mr: 1 }} /> Add new invoice</Button>
        </Stack>
        <InvoiceTable />
      </Box>
    </Box>
  );
}

export default TableManagement;