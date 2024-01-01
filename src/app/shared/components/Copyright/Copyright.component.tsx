import React from 'react';
import moment from 'moment';
import { Props } from './Copyright.types';
import * as S from './Copyright.styles';

const Copyright: React.FC<Props> = () => {
  const year: number = moment().year();
  const owner: string = 'BO-RUEI CHEN';

  return (
    <S.Copyright>
      <small>© {year} {owner}</small>
    </S.Copyright>
  );
};

export default Copyright;
