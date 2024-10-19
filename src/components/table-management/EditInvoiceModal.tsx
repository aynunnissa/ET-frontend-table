import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useInput from '@/hooks/use-input';
import { Button, Stack, TextField } from '@mui/material';
import { useEffect } from 'react';

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
  id: number,
  name: string,
  date: string,
  due_date: string,
  total: string,
  balance: string,
  open: boolean,
  handleClose: () => void,
  handleEdit: (editedItem: InvoiceItem) => void;
}

interface InvoiceItem {
  id: number,
  avatar: string,
  name: string,
  date: string,
  due_date: string,
  total: string,
  balance: string,
  status?: string
}

export default function EditInvoiceModal(props: Readonly<IProps>) {
  const name = useInput((value: string) => value.trim() !== '');
  const total = useInput((value: string) => value.trim() !== '');
  const balance = useInput((value: string) => value.trim() !== '');
  const date = useInput((value: string) => value.trim() !== '');
  const due_date = useInput((value: string) => value.trim() !== '');
  
  useEffect(() => {
    name.defaultValueHandler(props.name);
    total.defaultValueHandler(props.total);
    balance.defaultValueHandler(props.balance);
    date.defaultValueHandler(props.date);
    due_date.defaultValueHandler(props.due_date);
  }, [props.balance, props.date, props.due_date, props.name, props.total])

  const handleSubmit = () => {
    props.handleEdit({
      id: props.id,
      avatar: "",
      name: name.value,
      date: date.value,
      due_date: due_date.value,
      total: total.value,
      balance: balance.value
    })
  }

  return (
    <div>
      <Modal
        open={props.open}
        onClose={props.handleClose}
        aria-labelledby="modal-modal-title"
        aria-describedby="modal-modal-description"
      >
        <Box sx={style}>
          <Stack rowGap={2}>
            <TextField 
              fullWidth 
              label="Name" 
              id="name" 
              value={name.value}
              onBlur={name.inputBlurHandler}
              onChange={name.valueChangeHandler}
              error={name.hasError}
              helperText={`${name.hasError ? 'Name cannot be empty' : ''}`}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField 
              type='date'
              fullWidth 
              label="Date" 
              id="date" 
              value={date.value}
              onBlur={date.inputBlurHandler}
              onChange={date.valueChangeHandler}
              error={date.hasError}
              helperText={`${date.hasError ? 'Date cannot be empty' : ''}`}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField 
              type='date'
              fullWidth 
              label="Due Date" 
              id="due_date" 
              value={due_date.value}
              onBlur={due_date.inputBlurHandler}
              onChange={due_date.valueChangeHandler}
              error={due_date.hasError}
              helperText={`${due_date.hasError ? 'Due Date cannot be empty' : ''}`}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField 
              fullWidth 
              label="Total" 
              id="total" 
              value={total.value}
              onBlur={total.inputBlurHandler}
              onChange={total.valueChangeHandler}
              error={total.hasError}
              helperText={`${total.hasError ? 'Total cannot be empty' : ''}`}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <TextField 
              fullWidth 
              label="Balance" 
              id="balance" 
              value={balance.value}
              onBlur={balance.inputBlurHandler}
              onChange={balance.valueChangeHandler}
              error={balance.hasError}
              helperText={`${balance.hasError ? 'Balance cannot be empty' : ''}`}
              slotProps={{
                inputLabel: {
                  shrink: true,
                },
              }}
            />
            <Button variant='contained' color='primary' onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
