import { useDispatch } from 'react-redux';
import { userLogIn } from '../../redux/auth/authThunks';
import Button from '@mui/material/Button';
import TextField from '@mui/material/TextField';
import Grid from '@mui/material/Grid';
import Box from '@mui/material/Box';
import { StyledLink } from './LoginForm.styled';

const LoginForm = () => {
  const dispatch = useDispatch();

  const handleSubmit = evt => {
    evt.preventDefault();
    const form = evt.currentTarget;
    dispatch(
      userLogIn({
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
        Log In
      </Button>
      <Grid container justifyContent="flex-end">
        <Grid item>
          <StyledLink to="/register">No account? Sign up</StyledLink>
        </Grid>
      </Grid>
    </Box>
  );
};

export default LoginForm;
