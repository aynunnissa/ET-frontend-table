import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { invoices } from '@/dummy-data/invoices';
import EditIcon from '@mui/icons-material/Edit';
import DeleteIcon from '@mui/icons-material/Delete';
import { Box, Button, InputAdornment, Stack, TextField, Typography } from '@mui/material';
import { ChangeEvent, useState } from 'react';
import SearchIcon from '@mui/icons-material/Search';
import AddIcon from '@mui/icons-material/Add';
// import EditInvoiceModal from './EditInvoiceModal';
import DeleteInvoiceModal from './DeleteInvoiceModal';
import EditInvoiceModal from './EditInvoiceModal';
import AddInvoiceModal from './AddInvoiceModal';

interface Data {
  id: number,
  name: string,
  date: string,
  due_date: string,
  total: string,
  balance: string,
  actions: string
}


interface HeadCell {
  id: keyof Data;
  label: string;
}

const headCells: readonly HeadCell[] = [
  {
    id: 'name',
    label: 'Client name',
  },
  {
    id: 'date',
    label: 'Date',
  },
  {
    id: 'due_date',
    label: 'Due Date',
  },
  {
    id: 'total',
    label: 'Total',
  },
  {
    id: 'balance',
    label: 'Balance',
  },
  {
    id: 'actions',
    label: 'Actions',
  },
];

interface InvoiceItem {
  id: number,
  name: string,
  date: string,
  due_date: string,
  total: string,
  balance: string,
  status?: string
}

interface NewInvoiceItem {
  name: string,
  date: string,
  due_date: string,
  total: string,
  balance: string
}

export default function InvoiceTable() {
  const [originalData, setOriginalData] = useState(invoices); 
  const [data, setData] = useState(invoices);
  const [open, setOpen] = useState(false);
  const [openEdit, setOpenEdit] = useState(false);
  const [openAdd, setOpenAdd] = useState(false);
  const [activeID, setActiveID] = useState<null | number>(null);
  const [editInvoice, setEditInvoice] = useState<null | InvoiceItem>(null);

  const handleOpenAddModal = (isOpen: boolean) => {
    setOpenAdd(isOpen);
  }

  const handleOpen = (id: number) => {
    setOpen(true);
    setActiveID(id);
  };
  const handleClose = () => setOpen(false);

  const handleOpenEdit = (invoice: InvoiceItem) => {
    setEditInvoice(invoice)
    setOpenEdit(true);
  };
  const handleCloseEdit = () => setOpenEdit(false);

  const handleSearch = (e: ChangeEvent<HTMLInputElement>) => {
    const query = e.target.value?.toLowerCase();
   
    const result = originalData.filter((invoice) => invoice.name.toLowerCase().includes(query));
    setData(result);
  }

  const handleEdit = (editItem: InvoiceItem) => {
    const result = [...data];
    const itemID = result.findIndex((invoice) => invoice.id === editItem.id);
    if (itemID >= 0) {
      result[itemID] = {...editItem};
    }
    setData(result);
    setOriginalData(result);
    handleCloseEdit();
  }

  const handleAddNew = (newItem: NewInvoiceItem) => {
    const latestId = invoices[invoices.length - 1].id + 1;
    const newInvoice:InvoiceItem = {
      id: latestId,
      name: newItem.name,
      date: newItem.date,
      due_date: newItem.due_date,
      total: newItem.name,
      balance: newItem.balance,
    }

    setData((prev) => [...prev, newInvoice]);
    setOriginalData((prev) => [...prev, newInvoice]);
    setOpenAdd(false);
  }

  const handleDelete = (id: number | null) => {
    if (!id) return;
    handleClose();

    const updatedData = originalData.filter(item => item.id !== id);
    setData(updatedData);
    setOriginalData(updatedData);
  }

  return (
    <Box my={4} px={8}>
      <Stack my={2} direction={{ xs: 'column-reverse', md: 'row' }} justifyContent="space-between" alignItems={{ xs: 'end', md: 'center' }}>
        <TextField
          id="outlined-start-adornment"
          fullWidth
          sx={{ width: { xs: '100%', md: '50ch'} }}
          placeholder="Search Invoices"
          slotProps={{
            input: {
              startAdornment: <InputAdornment position="start"><SearchIcon /></InputAdornment>,
            },
          }}
          onChange={handleSearch}
        />
        <Button sx={{ mb: { xs: 2, md: 0} }} variant="contained" onClick={() => handleOpenAddModal(true)}><AddIcon sx={{ mr: 1 }} /> Add new invoice</Button>
      </Stack>
      <Typography variant='body1' component="p">Total: {originalData.length}</Typography>
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              {headCells.map((headCell, ind) => (
                <TableCell
                  key={headCell.id}
                  align={ind === 0 ? 'left' : 'center'}
                  sx={{ fontWeight: 700 }}
                >
                  {headCell.label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {data.map((row) => {
              return (
                <TableRow
                  tabIndex={-1}
                  key={row.id}
                >
                  <TableCell
                    component="th"
                    scope="row"
                  >{row.name}</TableCell>
                  <TableCell align="center">{row.date}</TableCell>
                  <TableCell align="center">{row.due_date}</TableCell>
                  <TableCell align="center">{row.total}</TableCell>
                  <TableCell align="center">{row.balance}</TableCell>
                  <TableCell align="center">
                    <Stack direction="row" gap={2} justifyContent="center">
                      <EditIcon color='primary' sx={{ cursor: 'pointer' }} onClick={() => handleOpenEdit(row)} />
                      <DeleteIcon onClick={() => handleOpen(row.id)} color='error' sx={{ cursor: 'pointer' }} />
                    </Stack>
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
      <AddInvoiceModal open={openAdd} handleAddInvoice={handleAddNew} handleClose={() => handleOpenAddModal(false)} />
      {editInvoice && <EditInvoiceModal handleEdit={handleEdit} open={openEdit} handleClose={handleCloseEdit} {...editInvoice} />}
      <DeleteInvoiceModal id={activeID} open={open} handleClose={handleClose} handleDelete={handleDelete} />
    </Box>
    
  );
}
