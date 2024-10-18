import * as React from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Modal from '@mui/material/Modal';
import { Button } from '@mui/material';

const style = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  width: 400,
  bgcolor: 'background.paper',
  border: '2px solid #000',
  boxShadow: 24,
  p: 4,
};

interface IProps {
  id: number | null,
  open: boolean,
  handleClose: () => void,
  handleDelete: (id: number | null) => void
}

export default function DeleteInvoiceModal({ id, open, handleClose, handleDelete }: Readonly<IProps>) {
  return (
    <div>
      <Modal
        open={open}
        onClose={handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Typography id="modal-modal-title" variant="h6" component="h2">
            Delete invoice?
          </Typography>
          <Typography id="modal-modal-description" sx={{ mt: 2 }}>
            This invoice will be permanently deleted from your data.
          </Typography>
          <Button variant='contained' color='error' onClick={() => handleDelete(id)}>Yes, Delete</Button>
          <Button variant='outlined' color='secondary' onClick={handleClose}>No, Cancel</Button>
        </Box>
      </Modal>
    </div>
  );
}
