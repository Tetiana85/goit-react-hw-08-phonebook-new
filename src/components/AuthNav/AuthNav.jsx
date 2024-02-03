import { Container, StyledLink } from './AuthNav.styled';

const AuthNav = () => {
  return (
    <Container>
      <StyledLink to="/register">Sign Up</StyledLink>
      <StyledLink to="/login">Log In</StyledLink>
    </Container>
  );
};

export default AuthNav;
