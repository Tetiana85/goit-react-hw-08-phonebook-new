import AuthNav from 'components/AuthNav/AuthNav';
import Navigation from 'components/Navigation/Navigation';
import UserMenu from 'components/UserMenu/UserMenu';
import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import { AppBar } from './Bar.styled';

const Bar = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <AppBar>
      <Navigation />
      {!isLoggedIn ? <AuthNav /> : <UserMenu />}
    </AppBar>
  );
};

export default Bar;
