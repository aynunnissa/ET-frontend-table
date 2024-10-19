import * as React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import RegisterUser from '@/components/users/RegisterUser';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";

export default function RegisterUsers() {
  return (
    <Container>
      <Box py={4}>
        <Typography fontWeight={700} variant='h5' component='h1'>List Users</Typography>
        <Divider sx={{ mb: 4, mt: 2}} />
        <RegisterUser />
      </Box>
      <ToastContainer />
    </Container>
  );
}