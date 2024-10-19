import * as React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import RegisterUser from '@/components/users/RegisterUser';
import { ToastContainer } from 'react-toastify';
import "react-toastify/dist/ReactToastify.css";
import Head from 'next/head';

export default function RegisterUsers() {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>Register User</title>
        <meta name="description" content="Quickly add new users with our streamlined user creation page." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box py={4}>
          <Typography fontWeight={700} variant='h5' component='h1'>List Users</Typography>
          <Divider sx={{ mb: 4, mt: 2}} />
          <RegisterUser />
        </Box>
        <ToastContainer />
      </Container>
    </>
  );
}