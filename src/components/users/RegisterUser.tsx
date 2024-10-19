import { Box } from '@mui/material';
import UserForm from '@/components/users/UserForm';
import { useState } from 'react';
import { toast } from 'react-toastify';

interface IUser {
  name: string,
  gender: string,
  email: string,
  status: string
}

export default function RegisterUser() {
  const [isLoading, setIsLoading] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false); 

  async function registerUser(user: IUser) {
    setIsLoading(true);
    setIsSuccess(false);

    const token = process.env.NEXT_PUBLIC_GOREST_T;

    try {
      const response = await fetch("https://gorest.co.in/public/v2/users", {
        method: "POST",
        headers: {
          "Accept": "application/json",
          "Content-Type": "application/json",
          "Authorization": `Bearer ${token}`
        },
        body: JSON.stringify({
          name: user.name,
          gender: user.gender,
          email: user.email,
          status: user.status
        })
      })
      if (!response.ok) {
        const errorData = await response.json(); 
        throw new Error(errorData[0].field ? `${errorData[0].field} ${errorData[0].message}` : "Gagal menambahkan user");
      }
      toast.success("User berhasil ditambahkan");
      setIsSuccess(true);
    } catch (error) {
      toast.error(`${error}`)
    } finally {
      setIsLoading(false);
    }

   
  }

  return (
    <Box>
      <UserForm isSuccess={isSuccess} isSubmitting={isLoading} handleAdd={registerUser} />
    </Box>
  );
}