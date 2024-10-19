import Box from '@mui/material/Box';
import useInput from '@/hooks/use-input';
import { Button, FormControl, InputLabel, MenuItem, Select, Stack, TextField } from '@mui/material';
import LoadingButton from '@mui/lab/LoadingButton';
import SaveIcon from '@mui/icons-material/Save';
import { useEffect } from 'react';

interface IUser {
  name: string,
  gender: string,
  email: string,
  status: string
}

interface IProps {
  isSubmitting: boolean,
  isSuccess: boolean,
  handleAdd: (newUser: IUser) => void
}

export default function UserForm({ isSubmitting, isSuccess, handleAdd }: IProps) {
  const name = useInput((value: string) => value.trim() !== '');
  const gender = useInput((value: string) => value.trim() !== '');
  const email = useInput((value: string) => value.includes('@'));
  const status = useInput((value: string) => value.trim() !== '');
  
  const handleSubmit = () => {
    const newUser:IUser = {
      name: name.value,
      gender: gender.value,
      email: email.value,
      status: status.value
    }
    handleAdd(newUser)
  }

  useEffect(() => {
    if (isSuccess) {
      name.reset();
      gender.reset();
      email.reset();
      status.reset();
    }
  }, [isSuccess])

  const isFormValid = name.isValid && gender.isValid && email.isValid && status.isValid;

  return (
    <div>
      <Box>
          <Stack rowGap={2}>
            <TextField 
              fullWidth 
              label="Name" 
              id="name" 
              value={name.value}
              onBlur={name.inputBlurHandler}
              onChange={name.valueChangeHandler}
              error={name.hasError}
            />
            <FormControl fullWidth>
              <InputLabel id="gender-label">Gender</InputLabel>
              <Select
                labelId="gender-label"
                id="gender"
                value={gender.value}
                label="Gender"
                onChange={gender.valueChangeHandler}
              >
                <MenuItem value="female">Female</MenuItem>
                <MenuItem value="male">Male</MenuItem>
              </Select>
            </FormControl>
            <TextField 
              fullWidth 
              label="Email" 
              id="email" 
              value={email.value}
              onBlur={email.inputBlurHandler}
              onChange={email.valueChangeHandler}
              error={email.hasError}
            />
            <FormControl fullWidth>
              <InputLabel id="status-label">Status</InputLabel>
              <Select
                labelId="status-label"
                id="status"
                value={status.value}
                label="Status"
                onChange={status.valueChangeHandler}
              >
                <MenuItem value="active">Active</MenuItem>
                <MenuItem value="inactive">Inactive</MenuItem>
              </Select>
            </FormControl>
            {!isSubmitting && <Button variant='contained' color='primary' onClick={handleSubmit} disabled={!isFormValid}>Submit</Button>}
            {isSubmitting && (
              <LoadingButton loading loadingPosition="start" startIcon={<SaveIcon />} variant="outlined">
                Submit
              </LoadingButton>
            )}
          </Stack>
        </Box>
    </div>
  );
}
