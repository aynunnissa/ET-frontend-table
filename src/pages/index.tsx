import Head from "next/head";
import LaunchIcon from '@mui/icons-material/Launch';
import localFont from "next/font/local";
import styles from "@/styles/Home.module.css";
import { Typography } from "@mui/material";
import Link from "next/link";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export default function Home() {
  return (
    <>
      <Head>
        <title>User and Invoice Management</title>
        <meta name="description" content="Effortlessly manage users and invoices with our all-in-one web app." />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <div
        className={`${styles.page} ${geistSans.variable} ${geistMono.variable}`}
      >
        <main className={styles.main}>
          <Typography variant="h6" component="h1" fontWeight={700}>Available Features</Typography>
          <ol>
            <li>
              <Link style={{ color: 'blue', textDecoration: 'underline' }} href="/q3-table-management">Question 3: Buat Table dengan Fungsionalitas: Search, Edit, Add, and Delete <LaunchIcon /></Link>
            </li>
            <li>
              <Link style={{ color: 'blue', textDecoration: 'underline' }} href="/q4-get-users">Question 4: Akses API User dan Munculkan dalam Bentuk Table <LaunchIcon /></Link>
            </li>
            <li>
              <Link style={{ color: 'blue', textDecoration: 'underline' }} href="/q5-register-users">Question 5: Buat Tampilan untuk Register User <LaunchIcon /></Link>
            </li>
          </ol>
        </main>
      </div>
    </>
  );
}
