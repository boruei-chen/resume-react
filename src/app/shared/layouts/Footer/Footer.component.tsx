import React from 'react';
import Copyright from 'app/shared/components/Copyright';
import { Props } from './Footer.types';
import * as S from './Footer.styles';

const Footer: React.FC<Props> = () => (
  <S.Footer>
    <S.Footer.Inner>
      <S.Footer.Creator>
        <span>Created by</span>
        <S.Footer.CreatorAvatar src={require('assets/images/personal/avatar/Boruei-Chen.png')} name="BO-RUEI CHEN" width={45} height={45} />
      </S.Footer.Creator>
    </S.Footer.Inner>
    <Copyright />
  </S.Footer>
);

export default Footer;
