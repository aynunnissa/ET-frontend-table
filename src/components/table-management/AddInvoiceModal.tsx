import Box from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import useInput from '@/hooks/use-input';
import { Button, Stack, TextField } from '@mui/material';

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
  open: boolean,
  handleClose: () => void,
  handleAddInvoice: (newItem: InvoiceItem) => void;
}

interface InvoiceItem {
  avatar: string,
  name: string,
  date: string,
  due_date: string,
  total: string,
  balance: string,
  status?: string
}

export default function AddInvoiceModal(props: Readonly<IProps>) {
  const name = useInput((value: string) => value.trim() !== '');
  const total = useInput((value: string) => value.trim() !== '');
  const balance = useInput((value: string) => value.trim() !== '');
  const date = useInput((value: string) => value.trim() !== '');
  const due_date = useInput((value: string) => value.trim() !== '');
  
  const handleSubmit = () => {
    props.handleAddInvoice({
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
              label="fullWidth" 
              id="fullWidth" 
              value={name.value}
              onBlur={name.inputBlurHandler}
              onChange={name.valueChangeHandler}
              error={name.hasError}
            />
            <TextField 
              type='date'
              fullWidth 
              id="fullWidth" 
              value={date.value}
              onBlur={date.inputBlurHandler}
              onChange={date.valueChangeHandler}
              error={date.hasError}
            />
            <TextField 
              type='date'
              fullWidth 
              id="fullWidth" 
              value={due_date.value}
              onBlur={due_date.inputBlurHandler}
              onChange={due_date.valueChangeHandler}
              error={due_date.hasError}
            />
            <TextField 
              fullWidth 
              label="fullWidth" 
              id="fullWidth" 
              value={total.value}
              onBlur={total.inputBlurHandler}
              onChange={total.valueChangeHandler}
              error={total.hasError}
            />
            <TextField 
              fullWidth 
              label="fullWidth" 
              id="fullWidth" 
              value={balance.value}
              onBlur={balance.inputBlurHandler}
              onChange={balance.valueChangeHandler}
              error={balance.hasError}
            />
            <Button variant='contained' color='primary' onClick={handleSubmit}>Submit</Button>
          </Stack>
        </Box>
      </Modal>
    </div>
  );
}
