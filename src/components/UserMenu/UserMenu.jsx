import { Button } from '@mui/material';
import { useDispatch, useSelector } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { userLogOut } from '../../redux/auth/authThunks';
import { getUser } from '../../redux/auth/selectors';
import { Box, GreetingText } from './UserMenu.styled';

const UserMenu = () => {
  const dispatch = useDispatch();
  const user = useSelector(getUser);
  const navigate = useNavigate();
  const handleLogOut = () => {
    dispatch(userLogOut());
    navigate('/', { replace: true });
  };

  return (
    <Box>
      <GreetingText>Welcome, {user.name}</GreetingText>
      <Button
        type="button"
        onClick={handleLogOut}
        variant="contained"
        color="secondary"
        sx={{ m: 1 }}
      >
        Log Out
      </Button>
    </Box>
  );
};
export default UserMenu;
