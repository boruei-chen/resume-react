import { variables } from 'assets/styles/styled-components/variables.styles';

const createMediaQuery = (property: 'max-width' | 'min-width', width: number) => {
  return `@media only screen and (${property}: ${width}px)`;
};

export const responsive = {
  breakpoint: {
    extraLarge: createMediaQuery('min-width', variables.responsive.breakpoint.large.px + 1),
    large: createMediaQuery('max-width', variables.responsive.breakpoint.large.px),
    medium: createMediaQuery('max-width', variables.responsive.breakpoint.medium.px),
    small: createMediaQuery('max-width', variables.responsive.breakpoint.small.px)
  }
};
