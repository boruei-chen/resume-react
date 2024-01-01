import styled from 'styled-components';
import { variables } from 'assets/styles/styled-components/variables.styles';
import Avatar from 'app/shared/components/Avatar';

const CreatorAvatar = styled(Avatar)`
  margin-top: .9375rem;
`;

const Creator = styled.div`
  opacity: .65;
  display: flex;
  flex-direction: column;
  align-items: center;
  span {
    color: ${variables.palette.site.fontColor.secondary};
    font-size: .875rem;
  }
`;

const Inner = styled.div`
  padding: 7.5rem 0;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`;

export const Footer = Object.assign(
  styled.footer`
    background-color: ${variables.palette.site.bgColor.secondary};
    margin-top: 2.5rem;
  `,
  {
    Inner,
    Creator,
    CreatorAvatar
  }
);
