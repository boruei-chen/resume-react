import styled from 'styled-components';
import { rgba } from 'polished';
import { variables } from 'assets/styles/styled-components/variables.styles';
import { Props } from './Avatar.types';

const Abbr = styled.div<Pick<React.CSSProperties, 'fontSize'>>`
  width: 100%;
  height: 100%;
  font-size: ${props => props.fontSize ? `${props.fontSize}px` : '16px'};
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

const Media = styled.div`
  width: 100%;
  height: 100%;
  img {
    width: 100%;
    vertical-align: top;
  }
`;

export const Avatar = Object.assign(
  styled.div<Pick<Props, 'width' | 'height'>>`
    width: ${props => props.width ? `${props.width}px` : '100%'};
    height: ${props => props.height ? `${props.height}px` : '100%'};
    border-radius: 50%;
    box-shadow: 0 8px 20px ${rgba(variables.palette.base.black, 0.15)};
    overflow: hidden;
  `,
  {
    Media,
    Abbr
  }
);
