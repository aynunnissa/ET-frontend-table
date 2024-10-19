import InvoiceTable from "@/components/table-management/InvoiceTable";
import { Box, Divider, Typography } from "@mui/material";
import Head from "next/head";

const TableManagement = () => {
  return(
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Invoice Management</title>
        <meta name="description" content="Create, send, and track invoices effortlessly, all in one place." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Box>
        <Typography my={4} px={8} variant="h5" component="h1">Manage Invoices</Typography>
        <Divider />
        <InvoiceTable />
      </Box>
    </>
  );
}

export default TableManagement;