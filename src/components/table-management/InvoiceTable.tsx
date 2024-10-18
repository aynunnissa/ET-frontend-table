import * as React from 'react';
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
import { Stack } from '@mui/material';

interface Data {
  id: number,
  name: string,
  date: string,
  due_date: string,
  total: string,
  balance: string,
  status: string,
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
    id: 'status',
    label: 'Status',
  },
  {
    id: 'actions',
    label: 'Actions',
  },
];

export default function InvoiceTable() {
  return (
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
          {invoices.map((row) => {
            return (
              <TableRow
                tabIndex={-1}
                key={row.id}
              >
                <TableCell
                  component="th"
                  scope="row"
                >
                  {row.name}
                </TableCell>
                <TableCell align="center">{row.date}</TableCell>
                <TableCell align="center">{row.due_date}</TableCell>
                <TableCell align="center">{row.total}</TableCell>
                <TableCell align="center">{row.balance}</TableCell>
                <TableCell align="center">{row.status}</TableCell>
                <TableCell align="center">
                  <Stack direction="row" gap={2} justifyContent="center">
                    <EditIcon color='primary' />
                    <DeleteIcon color='error' />
                  </Stack>
                </TableCell>
              </TableRow>
            );
          })}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
