import { createGlobalStyle } from 'styled-components';
import { normalize } from 'styled-normalize';
import 'swiper/css';
import { variables } from './variables.styles';
import { responsive } from './responsive.styles';

export const GlobalStyle = createGlobalStyle`
  ${normalize}
  body {
    background-color: ${variables.palette.site.bgColor.primary};
    color: ${variables.palette.site.fontColor.primary};
    font-size: ${variables.typography.fontSize};
    font-family: ${variables.typography.fontFamily};
    ${responsive.breakpoint.medium} {
      font-size: .875rem;
    }
  }
  .scroll-lockup {
    overflow: hidden;
  }
`;
