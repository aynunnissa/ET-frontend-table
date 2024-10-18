import InvoiceTable from "@/components/table-management/InvoiceTable";
import { Box, Divider, Typography } from "@mui/material";

const TableManagement = () => {
  return(
    <Box>
      <Typography my={4} px={8} variant="h5" component="h1">Manage Invoices</Typography>
      <Divider />
      <InvoiceTable />
    </Box>
  );
}

export default TableManagement;