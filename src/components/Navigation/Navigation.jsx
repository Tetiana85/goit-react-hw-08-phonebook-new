import { useSelector } from 'react-redux';
import { getIsLoggedIn } from '../../redux/auth/selectors';
import { Container, StyledLink } from './Navigation.styled';

const Navigation = () => {
  const isLoggedIn = useSelector(getIsLoggedIn);
  return (
    <Container>
      <StyledLink to="/">Home</StyledLink>
      {isLoggedIn && <StyledLink to="/contacts">Contacts</StyledLink>}
    </Container>
  );
};

export default Navigation;
