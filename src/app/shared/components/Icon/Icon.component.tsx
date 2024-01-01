import React from 'react';
import { Props } from './Icon.types';
import * as S from './Icon.styles';

const Icon: React.FC<Props> = (props) => {
  const {
    name,
    color,
    ...restProps
  } = props;

  return (
    <S.Icon {...restProps} backgroundImage={require(`assets/images/common/${name}${color ? `--${color}` : ''}.png`)} />
  );
};

export default Icon;
