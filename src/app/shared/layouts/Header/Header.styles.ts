import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { variables } from 'assets/styles/styled-components/variables.styles';
import { responsive } from 'assets/styles/styled-components/responsive.styles';
import Avatar from 'app/shared/components/Avatar';
import Icon from 'app/shared/components/Icon';

const MenuNavItem = styled.li<{ $active: boolean; }>`
  opacity: ${props => props.$active ? 1 : 0.65};
  transition: all .35s ease-out;
  cursor: pointer;
  &:not(:last-child) {
    margin-bottom: 1.25rem;
  }
  &:hover {
    opacity: 1;
  }
`;

const MenuNavList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
`;

const MenuNav = styled.nav``;

const MenuBody = styled.div`
  height: 100%;
  background-color: ${variables.palette.site.bgColor.primary};
  border-top: 1px solid ${variables.palette.site.borderColor.primary};
  transition: all .35s ease-out;
  padding: 1.25rem 1.875rem;
  position: absolute;
  top: 0;
  right: 0;
`;

const MenuBackdrop = styled.div`
  width: 100%;
  height: 100%;
  background-color: ${rgba(variables.palette.base.black, 0.5)};
  backdrop-filter: blur(5px);
  transition: all .35s ease-out;
`;

const Menu = styled.div<{ $active: boolean; $inactive: boolean; }>`
  width: 100%;
  position: fixed;
  right: 0;
  bottom: 0;
  z-index: 1000;
  display: none;
  ${props => props.$active && css`
    animation: slide-in 0s ease-out 0s forwards;
    ${MenuBackdrop} {
      opacity: 1;
      visibility: visible;
    }
    ${MenuBody} {
      transform: translateX(0);
    }
  `}
  ${props => props.$inactive && css`
    animation: slide-out 0s ease-out .35s forwards;
    ${MenuBackdrop} {
      opacity: 0;
      visibility: hidden;
    }
    ${MenuBody} {
      transform: translateX(100%);
    }
  `}
  @keyframes slide-in {
    from { transform: translateX(100%); }
    to { transform: translateX(0); }
  }
  @keyframes slide-out {
    from { transform: translateX(0); }
    to { transform: translateX(100%); }
  }
  ${responsive.breakpoint.medium} {
    height: calc(100% - 65px);
    display: block;
  }
`;

const Link = styled.a`
  opacity: .45;
  transition: all .35s ease-out;
  &:hover {
    opacity: .75;
  }
  &:not(:last-child) {
    margin-right: .625rem;
  }
  ${responsive.breakpoint.small} {
    &:not(:last-child) {
      margin-right: .4375rem;
    }
  }
`;

const Links = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const Divider = styled.hr`
  width: 1px;
  height: 15px;
  background-color: ${variables.palette.site.borderColor.primary};
  border: none;
  margin: 0 1.25rem;
  ${responsive.breakpoint.small} {
    margin: 0 .9375rem;
  }
`;

const ContactItem = styled.li`
  font-size: .75rem;
  opacity: .45;
  &:not(:last-child) {
    margin-right: 1.25rem;
  }
  ${responsive.breakpoint.small} {
    font-size: .625rem;
    &:not(:last-child) {
      margin-right: .75rem;
    }
  }
`;

const ContactList = styled.ul`
  list-style: none;
  margin: 0 0 0 auto;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${responsive.breakpoint.medium} {
    margin-left: 0;
  }
`;

const MenuBtnStuffing = styled.span`
  width: 100%;
  height: 2px;
  background-color: ${variables.palette.site.fontColor.primary};
  border-radius: 1px;
  transition: all .175s ease-out;
  transform-origin: 0% 50%;
  position: absolute;
  right: 0;
  display: block;
  &:nth-child(1) {
    top: 0;
  }
  &:nth-child(2) {
    top: 7px;
  }
  &:nth-child(3) {
    width: 70%;
    top: 14px;
  }
`;

const MenuBtn = styled.div<{ $active: boolean; }>`
  width: 20px;
  height: 16px;
  opacity: .65;
  transition: all .35s ease-out;
  position: relative;
  display: none;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  ${props => props.$active && css`
    ${MenuBtnStuffing} {
      &:nth-child(1) {
        transform: rotate(45deg);
      }
      &:nth-child(2) {
        display: none;
      }
      &:nth-child(3) {
        width: 100%;
        transform: rotate(-45deg);
      }
    }
  `}
  ${responsive.breakpoint.medium} {
    margin-left: 1.25rem;
    display: block;
  }
`;

const NavItem = styled.li<{ $active: boolean; }>`
  opacity: ${props => props.$active ? 1 : 0.65};
  transition: all .35s ease-out;
  cursor: pointer;
  &:not(:last-child) {
    margin-right: 1.875rem;
  }
  &:hover {
    opacity: 1;
  }
`;

const NavList = styled.ul`
  list-style: none;
  margin: 0 0 0 1.875rem;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${responsive.breakpoint.medium} {
    display: none;
  }
`;

const NavGalleryIcon = styled(Icon)<{ $active: boolean; }>`
  width: 30px;
  height: 30px;
  opacity: ${props => props.$active ? 1 : 0.65};
  margin-left: 1.875rem;
  transition: all .35s ease-out;
  cursor: pointer;
  &:hover {
    opacity: 1;
  }
  ${responsive.breakpoint.medium} {
    width: 25px;
    height: 25px;
    margin-left: 0;
  }
`;

const NavAvatar = styled(Avatar)`
  width: 50px;
  height: 50px;
  opacity: 0;
  visibility: hidden;
  cursor: pointer;
  ${responsive.breakpoint.medium} {
    width: 45px;
    height: 45px;
    margin: 0 auto;
    transform: translateX(calc((25px + (18px + 1.25rem)) / 2));
  }
`;

const Nav = styled.nav`
  margin-left: auto;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${responsive.breakpoint.medium} {
    width: calc(100% - (18px + 1.25rem));
  }
`;

const Inner = styled.div`
  width: ${variables.typography.siteInnerWidth};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 2.5rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${responsive.breakpoint.large} {
    width: 100%;
  }
  ${responsive.breakpoint.medium} {
    padding: 0 1.875rem;
  }
  ${responsive.breakpoint.small} {
    padding: 0 1.25rem;
  }
`;

const Section = styled.div`
  padding: .625rem 0;
  &:nth-child(2) {
    background-color: ${variables.palette.site.bgColor.secondary};
    opacity: 0;
    visibility: hidden;
  }
  ${responsive.breakpoint.medium} {
    &:nth-child(2) {
      ${Inner} {
        justify-content: center;
      }
    }
  }
`;

export const Header = Object.assign(
  styled.header<{ $fixed: boolean; $fixedVisible: boolean; $fixedHidden: boolean; $fixedTransition: boolean; }>`
    width: 100%;
    background-color: ${variables.palette.site.bgColor.primary};
    position: absolute;
    top: 0;
    left: 0;
    ${props => props.$fixed && css`
      box-shadow: 0 15px 20px ${rgba(variables.palette.base.black, 0.05)};
      position: fixed;
      ${Section} {
        &:nth-child(2) {
          opacity: 1;
          visibility: visible;
        }
      }
      ${NavAvatar} {
        opacity: 1;
        visibility: visible;
      }
      ${Menu} {
        height: calc(100% - 101px);
      }
    `}
    ${props => props.$fixedVisible && css`
      opacity: 1;
      visibility: visible;
      z-index: 1000;
    `}
    ${props => props.$fixedHidden && css`
      opacity: 0;
      visibility: hidden;
      z-index: -1;
    `}
    ${props => props.$fixedTransition && css`
      transition: all .35s ease-out;
    `}
  `,
  {
    Section,
    Inner,
    Nav,
    NavAvatar,
    NavGalleryIcon,
    NavList,
    NavItem,
    MenuBtn,
    MenuBtnStuffing,
    ContactList,
    ContactItem,
    Divider,
    Links,
    Link,
    Menu,
    MenuBackdrop,
    MenuBody,
    MenuNav,
    MenuNavList,
    MenuNavItem
  }
);
