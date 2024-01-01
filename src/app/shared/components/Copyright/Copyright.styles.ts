import styled from 'styled-components';
import { variables } from 'assets/styles/styled-components/variables.styles';

export const Copyright = Object.assign(
  styled.div`
    background-color: ${variables.palette.copyright.bgColor.primary};
    padding: .625rem 0;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  `,
  {}
);
