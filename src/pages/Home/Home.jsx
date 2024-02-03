import { Typography } from '@mui/material';

export default function Home() {
  return (
    <>
      <Typography
        variant="h1"
        align="center"
        sx={{
          fontSize: 76,
          color: '#216a81',
          fontWeight: 700,
          fontStyle: 'italic',
          marginTop: 2,
        }}
      >
        Phonebook
      </Typography>
    </>
  );
}
