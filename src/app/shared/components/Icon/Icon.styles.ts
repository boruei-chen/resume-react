import styled from 'styled-components';
import { Props } from './Icon.types';

export const Icon = Object.assign(
  styled.i<Pick<Props, 'width' | 'height'> & Pick<React.CSSProperties, 'backgroundImage'>>`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '100%'};
    background-image: ${props => `url(${props.backgroundImage})`};
    background-size: contain;
    background-position: center;
    background-repeat: no-repeat;
    display: block;
  `,
  {}
);
