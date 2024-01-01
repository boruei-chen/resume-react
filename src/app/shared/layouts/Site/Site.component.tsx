import React, { useRef, useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { WindowScrollDirectionEnum } from 'app/core/enums/browser';
import { RootState } from 'app/store/types';
import { setHeaderStateAction } from 'app/store/shared/actions';
import Header from 'app/shared/layouts/Header';
import Footer from 'app/shared/layouts/Footer';
import { SectionIdEnum as MainPageSectionIdEnum } from 'app/features/Main/Main.types';
import { Props } from './Site.types';
import * as S from './Site.styles';

const Site: React.FC<Props> = (props) => {
  const reduxDispatch = useDispatch();
  const headerState = useSelector((state: RootState) => state.shared.header);
  const mainPageState = useSelector((state: RootState) => state.shared.mainPage);
  const lastWindowScrollTopRef = useRef<number>(0);
  const handleHeaderFixedCB = useCallback(handleHeaderFixed, [headerState, mainPageState, reduxDispatch]);
  const handleHeaderNavActiveCB = useCallback(handleHeaderNavActive, [headerState, mainPageState, reduxDispatch]);

  useEffect(() => {
    const onScroll = () => {
      handleHeaderFixedCB();
    };
    window.addEventListener('scroll', onScroll);
    return () => {
      window.removeEventListener('scroll', onScroll);
    };
  }, [handleHeaderFixedCB]);

  useEffect(() => {
    const onWheel = () => {
      handleHeaderNavActiveCB();
    };
    window.addEventListener('wheel', onWheel);
    return () => {
      window.removeEventListener('wheel', onWheel);
    };
  }, [handleHeaderNavActiveCB]);

  function getWindowScrollDirection () {
    const windowScrollTop = document.documentElement.scrollTop;
    const windowScrollDirection = windowScrollTop > lastWindowScrollTopRef.current ? WindowScrollDirectionEnum.Down : WindowScrollDirectionEnum.Up;
    lastWindowScrollTopRef.current = windowScrollTop;
    return windowScrollDirection;
  }

  function handleHeaderFixed () {
    const headerHeight = headerState.info?.height;
    const mainPage2ndSectionInfo = mainPageState.sectionInfoList[1];
    if (headerHeight && mainPage2ndSectionInfo) {
      const windowScrollDirection = getWindowScrollDirection();
      const mainPage2ndSectionOffsetTop = mainPage2ndSectionInfo.offsetTop - headerHeight;
      reduxDispatch(setHeaderStateAction({
        fixed: window.scrollY > headerHeight,
        fixedVisible: !(window.scrollY > headerHeight && window.scrollY < mainPage2ndSectionOffsetTop),
        fixedTransition: (windowScrollDirection === WindowScrollDirectionEnum.Down && window.scrollY >= mainPage2ndSectionOffsetTop) || (windowScrollDirection === WindowScrollDirectionEnum.Up && window.scrollY > headerHeight)
      }));
    }
  }

  function handleHeaderNavActive () {
    const headerHeight = headerState.info?.height;
    if (headerHeight) {
      const currentSectionInfo = mainPageState.sectionInfoList.find((sectionInfo) => window.scrollY >= (sectionInfo.offsetTop - headerHeight) && window.scrollY < ((sectionInfo.offsetTop - headerHeight) + sectionInfo.height));
      if (currentSectionInfo) {
        reduxDispatch(setHeaderStateAction({ activeNav: currentSectionInfo.id }));
      }
    }
  }

  function handleMainPageScrollToTargetSection (targetSectionId: MainPageSectionIdEnum) {
    const headerHeight = headerState.info?.height;
    const targetSectionInfo = mainPageState.sectionInfoList.find((sectionInfo) => sectionInfo.id === targetSectionId);
    if (headerHeight && targetSectionInfo) {
      const targetSectionOffsetTop = targetSectionInfo.offsetTop - headerHeight;
      reduxDispatch(setHeaderStateAction({ activeNav: targetSectionId }));
      window.scrollTo({ top: targetSectionOffsetTop, behavior: 'smooth' });
    }
  }

  return (
    <>
      <Header onNavChange={handleMainPageScrollToTargetSection} />
      <S.Main>
        {props.children}
      </S.Main>
      <Footer />
    </>
  );
};

export default Site;
