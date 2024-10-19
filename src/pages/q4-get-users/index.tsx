import * as React from 'react';
import { Box, Container, Divider, Typography } from '@mui/material';
import UserTable from '@/components/users/UserTable';
import { BASE_URL } from '@/lib/client';
import Head from 'next/head';

interface IData {
  id: number,
  name: string,
  email: string,
  gender: string,
  status: string,
}

interface IProps {
  data: IData[],
  error: boolean
}

export default function GetUsers({ data }: IProps) {
  return (
    <>
      <Head>
        <meta charSet="UTF-8" />
        <title>List Users</title>
        <meta name="description" content="Manage and view all user profiles in one place with our easy-to-use user list page." />
        <meta name="viewport" content="width=device-width, initial-scale=1.0" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Container>
        <Box py={4}>
          <Typography fontWeight={700} variant='h5' component='h1'>List Users</Typography>
          <Divider sx={{ mb: 4, mt: 2}} />
          <UserTable data={data} />
        </Box>
      </Container>
    </>
  );
}

export async function getServerSideProps() {
  try {
    const response = await fetch(`${BASE_URL}/users`);

    const errorCode = response.ok ? null : response.status;

    const result = await response.json();

    return {
      props: {
        data: result || [],
        error: errorCode
      }
    }
  } catch (error) {
    console.error(`Error: ${error}`)
    return {
      props: {
        data: [],
        error: 500
      }
    }
  }
}