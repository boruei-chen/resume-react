import React, { useRef, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { Props } from './Avatar.types';
import * as S from './Avatar.styles';

const Avatar: React.FC<Props> = (props) => {
  const { src, name, ...restProps } = props;
  const avatarElementRef = useRef<HTMLDivElement>(null);
  const [abbrFontSizeState, setAbbrFontSizeState] = useState<number>();
  const calcAbbrFontSizeCB = useCallback(calcAbbrFontSize, [src]);

  useLayoutEffect(() => {
    calcAbbrFontSizeCB();
  }, [calcAbbrFontSizeCB]);

  useEffect(() => {
    const onResize = () => {
      calcAbbrFontSizeCB();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [calcAbbrFontSizeCB]);

  function createAbbr () {
    return name ? name.replace(/\s/g, '').split('')[0] : name;
  }

  function calcAbbrFontSize () {
    if (!src && avatarElementRef.current) {
      setAbbrFontSizeState(avatarElementRef.current.clientWidth / 2);
    }
  }

  return (
    <S.Avatar {...restProps} ref={avatarElementRef}>
      {src
        ? (
          <S.Avatar.Media>
            <img src={src} alt={name} />
          </S.Avatar.Media>
          )
        : (
          <S.Avatar.Abbr fontSize={abbrFontSizeState}>
            {createAbbr()}
          </S.Avatar.Abbr>
          )}
    </S.Avatar>
  );
};

export default Avatar;
