import styled from '@emotion/styled';

export const Container = styled.div`
  padding: 36px;
  margin: 0 auto;
  color: #155e75;

  @media screen and (min-width: 1024px) {
    padding: 70px;
    display: grid;
    column-gap: 40px;
    grid-template-columns: 1fr 2fr;
    grid-auto-rows: minmax(100px, auto);
  }

  @media screen and (min-width: 1200px) {
    max-width: 1200px;
  }
`;

export const Title = styled.h2`
  margin-top: 60px;
  font-weight: 900;
  text-align: center;
  font-size: 40px;
`;
