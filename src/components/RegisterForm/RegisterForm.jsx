import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { Button } from '@mui/material';
import { StyledLink } from './RegisterForm.styled';
import { useDispatch } from 'react-redux';
import { userRegistration } from '../../redux/auth/authThunks';

const RegisterForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      userRegistration({
        name: form.elements.name.value,
        email: form.elements.email.value,
        password: form.elements.password.value,
      })
    );
    form.reset();
  };

  return (
    <Box component="form" onSubmit={handleSubmit} sx={{ mt: 3 }}>
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <TextField
            color="info"
            autoComplete="off"
            name="name"
            required
            fullWidth
            id="Name"
            label="Name"
            autoFocus
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            id="email"
            label="Email"
            name="email"
            autoComplete="off"
          />
        </Grid>
        <Grid item xs={12}>
          <TextField
            required
            fullWidth
            name="password"
            label="Password"
            type="password"
            id="password"
            autoComplete="off"
          />
        </Grid>
      </Grid>
      <Button type="submit" fullWidth variant="contained" sx={{ mt: 3, mb: 2 }}>
        Sign Up
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <StyledLink to="/login">Have an account? Log in</StyledLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default RegisterForm;
