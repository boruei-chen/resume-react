import styled from 'styled-components';
import { responsive } from 'assets/styles/styled-components/responsive.styles';

export const Main = styled.main`
  margin-top: 106px;
  ${responsive.breakpoint.medium} {
    margin-top: 101px;
  }
`;
