import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Container from '@mui/material/Container';
import RegisterForm from 'components/RegisterForm/RegisterForm';

const Register = () => {
  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: 'flex',
        flexDirection: 'column',
        alignItems: 'center',
      }}
    >
      <Box
        sx={{
          marginTop: 6,
          padding: 4,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          backgroundColor: '#c9f7ff90',
          borderRadius: 4,
          boxShadow: '-1px 11px 39px 6px rgba(0,0,0,0.53)',
          webkitBoxShadow: '-1px 11px 39px 6px rgba(0,0,0,0.53)',
          mozBoxShadow: '-1px 11px 39px 6px rgba(0,0,0,0.53)',
        }}
      >
        <Typography component="h1" variant="h2">
          Sign Up
        </Typography>
        <RegisterForm />
      </Box>
    </Container>
  );
};

export default Register;
