import React, { useRef, useEffect, useLayoutEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { RootState } from 'app/store/types';
import { setHeaderStateAction } from 'app/store/shared/actions';
import Icon from 'app/shared/components/Icon';
import { NamesEnum as IconNamesEnum, ColorsEnum as IconColorsEnum } from 'app/shared/components/Icon/Icon.types';
import { SectionIdEnum as MainPageSectionIdEnum } from 'app/features/Main/Main.types';
import { Props, Info } from './Header.types';
import * as S from './Header.styles';

const Header: React.FC<Props> = (props) => {
  const reduxDispatch = useDispatch();
  const headerElementRef = useRef<HTMLHeadElement>(null);
  const headerState = useSelector((state: RootState) => state.shared.header);
  const combineHeaderInfoCB = useCallback(combineHeaderInfo, [reduxDispatch]);
  const handleToggleMenuVisibleCB = useCallback(handleToggleMenuVisible, [reduxDispatch]);
  const handleLargeScreenHideMenuCB = useCallback(handleLargeScreenHideMenu, [headerState.menuVisible, handleToggleMenuVisibleCB]);

  useLayoutEffect(() => {
    combineHeaderInfoCB();
  }, [combineHeaderInfoCB]);

  useEffect(() => {
    const onResize = () => {
      combineHeaderInfoCB();
      handleLargeScreenHideMenuCB();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [combineHeaderInfoCB, handleLargeScreenHideMenuCB]);

  function combineHeaderInfo () {
    if (headerElementRef.current) {
      const info: Info = {
        height: headerElementRef.current.clientHeight
      };
      reduxDispatch(setHeaderStateAction({ info }));
    }
  };

  function handleLargeScreenHideMenu () {
    if (window.innerWidth > 768 && headerState.menuVisible) handleToggleMenuVisibleCB(false);
  }

  function handleLockWindowScroll (lockup: boolean) {
    const bodyElement = document.querySelector('body');
    if (bodyElement) {
      lockup
        ? bodyElement.classList.add('scroll-lockup')
        : bodyElement.classList.length > 1
          ? bodyElement.classList.remove('scroll-lockup')
          : bodyElement.removeAttribute('class');
    }
  }

  function handleToggleMenuVisible (visible: boolean) {
    handleLockWindowScroll(visible);
    reduxDispatch(setHeaderStateAction({ menuVisible: visible }));
  }

  function handleNav (event: React.MouseEvent<HTMLElement>) {
    const targetSectionId = event.currentTarget.getAttribute('data-target-section-id') as MainPageSectionIdEnum;
    if (headerState.menuVisible) handleToggleMenuVisible(false);
    if (targetSectionId) props.onNavChange(targetSectionId);
  }

  return (
    <S.Header
      ref={headerElementRef}
      $fixed={headerState.fixed}
      $fixedVisible={headerState.fixed && headerState.fixedVisible}
      $fixedHidden={headerState.fixed && !headerState.fixedVisible}
      $fixedTransition={headerState.fixedTransition}
    >
      <S.Header.Section>
        <S.Header.Inner>
          <S.Header.Nav>
            <S.Header.NavAvatar
              src={require('assets/images/personal/avatar/Boruei-Chen.png')}
              name="BO-RUEI CHEN"
              data-target-section-id={MainPageSectionIdEnum.Profile}
              onClick={handleNav}
            />
            <S.Header.NavGalleryIcon
              name={IconNamesEnum.Gallery}
              data-target-section-id={MainPageSectionIdEnum.History}
              $active={headerState.activeNav === MainPageSectionIdEnum.History}
              onClick={handleNav}
            />
            <S.Header.NavList>
              <S.Header.NavItem
                data-target-section-id={MainPageSectionIdEnum.Skills}
                $active={headerState.activeNav === MainPageSectionIdEnum.Skills}
                onClick={handleNav}
              >
                專業技能
              </S.Header.NavItem>
              <S.Header.NavItem
                data-target-section-id={MainPageSectionIdEnum.WorkExperience}
                $active={headerState.activeNav === MainPageSectionIdEnum.WorkExperience}
                onClick={handleNav}
              >
                工作經歷
              </S.Header.NavItem>
              <S.Header.NavItem
                data-target-section-id={MainPageSectionIdEnum.ProjectExperience}
                $active={headerState.activeNav === MainPageSectionIdEnum.ProjectExperience}
                onClick={handleNav}
              >
                專案經歷
              </S.Header.NavItem>
              <S.Header.NavItem
                data-target-section-id={MainPageSectionIdEnum.SideProjects}
                $active={headerState.activeNav === MainPageSectionIdEnum.SideProjects}
                onClick={handleNav}
              >
                個人專案
              </S.Header.NavItem>
            </S.Header.NavList>
          </S.Header.Nav>
          <S.Header.MenuBtn
            $active={headerState.menuVisible}
            onClick={() => handleToggleMenuVisible(!headerState.menuVisible)}
          >
            <S.Header.MenuBtnStuffing />
            <S.Header.MenuBtnStuffing />
            <S.Header.MenuBtnStuffing />
          </S.Header.MenuBtn>
        </S.Header.Inner>
      </S.Header.Section>
      <S.Header.Section>
        <S.Header.Inner>
          <S.Header.ContactList>
            <S.Header.ContactItem>+886 981772822</S.Header.ContactItem>
            <S.Header.ContactItem>boruei.brc@gmail.com</S.Header.ContactItem>
          </S.Header.ContactList>
          <S.Header.Divider />
          <S.Header.Links>
            <S.Header.Link href="https://instagram.com/boruei.brc?igshid=OGQ5ZDc2ODk2ZA==" target="_blank">
              <Icon name={IconNamesEnum.Instagram} color={IconColorsEnum.Grayscale} width={16} height={16} />
            </S.Header.Link>
            <S.Header.Link href="https://www.linkedin.com/in/%E6%9F%8F%E7%9D%BF-%E9%99%B3-a2719229a/" target="_blank">
              <Icon name={IconNamesEnum.LinkedIn} color={IconColorsEnum.Grayscale} width={15} height={15} />
            </S.Header.Link>
            <S.Header.Link href="https://github.com/boruei-chen" target="_blank">
              <Icon name={IconNamesEnum.GitHub} color={IconColorsEnum.Grayscale} width={15.55} height={15} />
            </S.Header.Link>
            <S.Header.Link href="https://www.npmjs.com/~boruei.chen" target="_blank">
              <Icon name={IconNamesEnum.npm} color={IconColorsEnum.Grayscale} width={23.8} height={10} />
            </S.Header.Link>
          </S.Header.Links>
        </S.Header.Inner>
      </S.Header.Section>
      <S.Header.Menu
        $active={headerState.menuVisible}
        $inactive={!headerState.menuVisible}
      >
        <S.Header.MenuBackdrop onClick={() => handleToggleMenuVisible(false)} />
        <S.Header.MenuBody>
          <S.Header.MenuNav>
            <S.Header.MenuNavList>
              <S.Header.MenuNavItem
                data-target-section-id={MainPageSectionIdEnum.Skills}
                $active={headerState.activeNav === MainPageSectionIdEnum.Skills}
                onClick={handleNav}
              >
                專業技能
              </S.Header.MenuNavItem>
              <S.Header.MenuNavItem
                data-target-section-id={MainPageSectionIdEnum.WorkExperience}
                $active={headerState.activeNav === MainPageSectionIdEnum.WorkExperience}
                onClick={handleNav}
              >
                工作經歷
              </S.Header.MenuNavItem>
              <S.Header.MenuNavItem
                data-target-section-id={MainPageSectionIdEnum.ProjectExperience}
                $active={headerState.activeNav === MainPageSectionIdEnum.ProjectExperience}
                onClick={handleNav}
              >
                專案經歷
              </S.Header.MenuNavItem>
              <S.Header.MenuNavItem
                data-target-section-id={MainPageSectionIdEnum.SideProjects}
                $active={headerState.activeNav === MainPageSectionIdEnum.SideProjects}
                onClick={handleNav}
              >
                個人專案
              </S.Header.MenuNavItem>
            </S.Header.MenuNavList>
          </S.Header.MenuNav>
        </S.Header.MenuBody>
      </S.Header.Menu>
    </S.Header>
  );
};

export default Header;
