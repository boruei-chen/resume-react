import styled, { css } from 'styled-components';
import { rgba } from 'polished';
import { variables } from 'assets/styles/styled-components/variables.styles';
import { responsive } from 'assets/styles/styled-components/responsive.styles';
import Avatar from 'app/shared/components/Avatar';
import Icon from 'app/shared/components/Icon';
import { NamesEnum as IconNamesEnum } from 'app/shared/components/Icon/Icon.types';

// Main
const MainSectionContent = styled.div`
  margin-top: 1.875rem;
  ${responsive.breakpoint.medium} {
    margin-top: 1.25rem;
  }
`;

const MainSectionTitle = styled.h2`
  font-size: 2rem;
  font-weight: normal;
  margin: 0;
  ${responsive.breakpoint.medium} {
    font-size: 1.625rem;
  }
`;

const MainSectionInner = styled.div`
  width: ${variables.typography.siteInnerWidth};
  box-sizing: border-box;
  margin: 0 auto;
  padding: 0 2.5rem;
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

const MainSection = styled.section`
  padding: 2.5rem 0;
  ${responsive.breakpoint.medium} {
    padding: 1.875rem 0;
  }
`;

export const Main = Object.assign(
  styled.div``,
  {
    Section: MainSection,
    SectionInner: MainSectionInner,
    SectionTitle: MainSectionTitle,
    SectionContent: MainSectionContent
  }
);
// ::: End

// Profile
const ProfileIcon = styled(Icon)`
  ${props => props.name === IconNamesEnum.Instagram && css`
    width: 30px;
    height: 30px;
    ${responsive.breakpoint.medium} {
      width: 25px;
      height: 25px;
    }
  `}
  ${props => props.name === IconNamesEnum.LinkedIn && css`
    width: 28px;
    height: 28px;
    ${responsive.breakpoint.medium} {
      width: 23px;
      height: 23px;
    }
  `}
  ${props => props.name === IconNamesEnum.GitHub && css`
    width: 30.07px;
    height: 29px;
    ${responsive.breakpoint.medium} {
      width: 24.88px;
      height: 24px;
    }
  `}
  ${props => props.name === IconNamesEnum.npm && css`
    width: 42.85px;
    height: 18px;
    ${responsive.breakpoint.medium} {
      width: 30.94px;
      height: 13px;
    }
  `}
`;

const ProfileLink = styled.a`
  opacity: .65;
  transition: all .35s ease-out;
  display: flex;
  flex-direction: row;
  &:hover {
    opacity: 1;
  }
  &:not(:last-child) {
    margin-right: .9375rem;
  }
  ${responsive.breakpoint.medium} {
    &:not(:last-child) {
      margin-right: .75rem;
    }
  }
`;

const ProfileLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${responsive.breakpoint.small} {
    margin-top: 1.25rem;
  }
`;

const ProfileDivider = styled.hr`
  width: 1px;
  height: 25px;
  background-color: ${variables.palette.site.borderColor.primary};
  border: none;
  margin: 0 2.5rem;
  ${responsive.breakpoint.medium} {
    height: 20px;
    margin: 0 1.5625rem;
  }
  ${responsive.breakpoint.small} {
    display: none;
  }
`;

const ProfileContactItem = styled.li`
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
  ${responsive.breakpoint.medium} {
    &:not(:last-child) {
      margin-right: 1.5625rem;
    }
  }
`;

const ProfileContactList = styled.ul`
  list-style: none;
  color: ${variables.palette.site.fontColor.secondary};
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const ProfileInformation = styled.div`
  margin-top: 1.875rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  ${responsive.breakpoint.medium} {
    margin-top: 1.25rem;
  }
  ${responsive.breakpoint.small} {
    flex-direction: column;
  }
`;

const ProfileJobTitle = styled.div`
  color: ${variables.palette.site.fontColor.secondary};
  margin-top: 1rem;
  ${responsive.breakpoint.medium} {
    margin-top: .75rem;
  }
`;

const ProfileName = styled.div`
  font-size: 2rem;
  margin-top: 1.5625rem;
  ${responsive.breakpoint.medium} {
    font-size: 1.5rem;
    margin-top: 1.25rem;
  }
`;

const ProfileAvatar = styled(Avatar)`
  width: 200px;
  height: 200px;
  ${responsive.breakpoint.medium} {
    width: 150px;
    height: 150px;
  }
`;

export const Profile = Object.assign(
  styled.div`
    width: 100%;
    padding: 10rem 0;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
  `,
  {
    Avatar: ProfileAvatar,
    Name: ProfileName,
    JobTitle: ProfileJobTitle,
    Information: ProfileInformation,
    ContactList: ProfileContactList,
    ContactItem: ProfileContactItem,
    Divider: ProfileDivider,
    Links: ProfileLinks,
    Link: ProfileLink,
    Icon: ProfileIcon
  }
);
// ::: End

// History
export const History = Object.assign(
  styled.div`
    margin: -1.875rem auto;
    ${responsive.breakpoint.medium} {
      margin: -1.5625rem auto;
    }
  `
);
// ::: End

// Skills
const SkillsSkillTag = styled.li<{ $nodePackage?: boolean; }>`
  background-color: ${variables.palette.tag.bgColor.primary};
  border-radius: 13px;
  line-height: 1;
  box-sizing: border-box;
  margin-bottom: .3125rem;
  padding: .3125rem .625rem;
  &:not(:last-child) {
    margin-right: .3125rem;
  }
  ${props => props.$nodePackage && css`
    background-color: ${variables.palette.tag.bgColor.nodepkg};
    color: ${variables.palette.tag.fontColor.nodepkg};
  `}
`;

const SkillsIcon = styled(Icon)`
  ${props => props.name === IconNamesEnum.HTML && css`
    width: 36.09px;
    height: 40px;
    ${responsive.breakpoint.medium} {
      width: 31.57px;
      height: 35px;
    }
  `}
  ${props => props.name === IconNamesEnum.CSS && css`
    width: 36.5px;
    height: 40px;
    ${responsive.breakpoint.medium} {
      width: 31.93px;
      height: 35px;
    }
  `}
  ${props => props.name === IconNamesEnum.JavaScript && css`
    width: 40px;
    height: 40px;
    ${responsive.breakpoint.medium} {
      width: 35px;
      height: 35px;
    }
  `}
  ${props => props.name === IconNamesEnum.TypeScript && css`
    width: 40px;
    height: 40px;
    ${responsive.breakpoint.medium} {
      width: 35px;
      height: 35px;
    }
  `}
  ${props => props.name === IconNamesEnum.React && css`
    width: 44.9px;
    height: 41px;
    ${responsive.breakpoint.medium} {
      width: 39.42px;
      height: 36px;
    }
  `}
  ${props => props.name === IconNamesEnum.Angular && css`
    width: 39.21px;
    height: 41px;
    ${responsive.breakpoint.medium} {
      width: 34.42px;
      height: 36px;
    }
  `}
`;

const SkillsSkillItem = styled.li`
  margin-bottom: 1.25rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  &:not(:last-child) {
    margin-right: 2.5rem;
  }
  span {
    font-size: 1.25rem;
    margin-left: .625rem;
  }
  ${responsive.breakpoint.medium} {
    margin-bottom: .9375rem;
    &:not(:last-child) {
      margin-right: 1.875rem;
    }
    span {
      font-size: 1.125rem;
    }
  }
`;

const SkillsSkillList = styled.ul`
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const SkillsSectionContent = styled.div`
  margin-top: .75rem;
  ${responsive.breakpoint.medium} {
    margin-top: .625rem;
  }
`;

const SkillsSectionTitle = styled.h5`
  color: ${variables.palette.site.fontColor.secondary};
  font-size: 1.125rem;
  font-weight: normal;
  margin: 0;
  ${responsive.breakpoint.medium} {
    font-size: 1rem;
  }
`;

const SkillsSection = styled.div`
  &:not(:last-child) {
    margin-bottom: 1.875rem;
  }
  &:nth-child(1) {
    ${SkillsSkillList} {
      margin-bottom: -1.25rem;
    }
  }
  &:nth-child(2),
  &:nth-child(3) {
    ${SkillsSkillList} {
      margin-bottom: -.3125rem;
    }
  }
  ${responsive.breakpoint.medium} {
    &:not(:last-child) {
      margin-bottom: 1.25rem;
    }
    &:nth-child(1) {
      ${SkillsSkillList} {
        margin-bottom: -.9375rem;
      }
    }
  }
`;

export const Skills = Object.assign(
  styled.div``,
  {
    Section: SkillsSection,
    SectionTitle: SkillsSectionTitle,
    SectionContent: SkillsSectionContent,
    SkillList: SkillsSkillList,
    SkillItem: SkillsSkillItem,
    Icon: SkillsIcon,
    SkillTag: SkillsSkillTag
  }
);
// ::: End

// Work Experience
const WorkExperienceConductItem = styled.li`
  color: ${variables.palette.site.fontColor.secondary};
  font-size: .875rem;
  line-height: 1.25;
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: .4375rem;
  }
  &::before {
    content: '';
    width: 3px;
    height: 3px;
    background-color: ${variables.palette.dot.bgColor.primary};
    border-radius: 50%;
    opacity: .25;
    margin-top: calc((17.5px / 2) - (3px / 2));
    margin-right: .625rem;
    flex: 0 0 3px;
  }
  ${responsive.breakpoint.medium} {
    font-size: .75rem;
    &:not(:last-child) {
      margin-bottom: .3125rem;
    }
  }
`;

const WorkExperienceConductContent = styled.ul`
  list-style: none;
  background-color: ${variables.palette.block.bgColor.primary};
  border-radius: 10px;
  margin: 0;
  padding: .9375rem 1.25rem;
  ${responsive.breakpoint.medium} {
    padding: .625rem .9375rem;
  }
`;

const WorkExperiencePrefermentItem = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  align-items: center;
  &::before {
    content: '';
    width: 3px;
    height: 3px;
    background-color: ${variables.palette.dot.bgColor.primary};
    border-radius: 50%;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
  }
  span {
    line-height: 1;
    padding: .3125rem .625rem;
    &:first-child {
      background-color: ${variables.palette.tag.bgColor.dark};
      border-radius: 11px;
      color: ${variables.palette.base.white};
      font-size: .75rem;
      margin-bottom: calc(1px + .9375rem);
    }
    &:last-child {
      font-size: .875rem;
    }
  }
  ${responsive.breakpoint.medium} {
    span {
      &:first-child {
        font-size: .625rem;
      }
      &:last-child {
        font-size: .75rem;
      }
    }
  }
`;

const WorkExperiencePreferment = styled.div`
  width: 50%;
  margin-bottom: .625rem;
  position: relative;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  &::before {
    content: '';
    width: 100%;
    height: 1px;
    background-color: ${variables.palette.site.borderColor.primary};
    position: absolute;
    top: 50%;
    left: 0;
    transform: translateY(-50%);
  }
  ${responsive.breakpoint.medium} {
    width: 75%;
    margin-bottom: .3125rem;
  }
  ${responsive.breakpoint.small} {
    width: 100%;
    margin-bottom: .625rem;
  }
`;

const WorkExperiencePeriod = styled.div`
  color: ${variables.palette.site.fontColor.secondary};
  font-size: .875rem;
  margin-top: .3125rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  span {
    &:nth-child(2) {
      margin: 0 .3125rem;
    }
    &:nth-child(4) {
      display: flex;
      flex-direction: row;
      align-items: center;
      &::before {
        content: '';
        width: 3px;
        height: 3px;
        background-color: ${variables.palette.dot.bgColor.secondary};
        border-radius: 50%;
        margin: 0 .75rem;
      }
    }
  }
  ${responsive.breakpoint.medium} {
    font-size: .75rem;
    span {
      &:nth-child(4) {
        &::before {
          width: 2px;
          height: 2px;
          margin: 0 .5rem;
        }
      }
    }
  }
`;

const WorkExperienceCompanyName = styled.div`
  color: ${variables.palette.site.fontColor.secondary};
  margin-top: .3125rem;
`;

const WorkExperienceJobTitle = styled.div`
  font-size: 1.25rem;
  ${responsive.breakpoint.medium} {
    font-size: 1.125rem;
  }
`;

const WorkExperienceJobInformation = styled.div`
  margin-left: 2.5rem;
  display: flex;
  flex-direction: column;
  ${responsive.breakpoint.medium} {
    margin-left: 1.5625rem;
  }
`;

const WorkExperienceCompanyLogo = styled.div`
  width: 100px;
  height: 100px;
  border: 1px solid ${variables.palette.site.borderColor.primary};
  img {
    width: 100%;
    vertical-align: top;
  }
  ${responsive.breakpoint.medium} {
    width: 80px;
    height: 80px;
  }
`;

const WorkExperienceItemBody = styled.div`
  margin-left: calc(100px + 2.5rem);
  ${responsive.breakpoint.medium} {
    margin-left: calc(80px + 1.5625rem);
  }
  ${responsive.breakpoint.small} {
    margin-top: 1.25rem;
    margin-left: 0;
  }
`;

const WorkExperienceItemHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const WorkExperienceItem = styled.div`
  &:not(:last-child) {
    margin-bottom: 3.125rem;
  }
  ${responsive.breakpoint.medium} {
    &:not(:last-child) {
      margin-bottom: 2.1875rem;
    }
  }
`;

export const WorkExperience = Object.assign(
  styled.div``,
  {
    Item: WorkExperienceItem,
    ItemHeader: WorkExperienceItemHeader,
    ItemBody: WorkExperienceItemBody,
    CompanyLogo: WorkExperienceCompanyLogo,
    JobInformation: WorkExperienceJobInformation,
    JobTitle: WorkExperienceJobTitle,
    CompanyName: WorkExperienceCompanyName,
    Period: WorkExperiencePeriod,
    Preferment: WorkExperiencePreferment,
    PrefermentItem: WorkExperiencePrefermentItem,
    ConductContent: WorkExperienceConductContent,
    ConductItem: WorkExperienceConductItem
  }
);
// ::: End

// Project Experience
const ProjectExperienceConductItem = styled.li`
  color: ${variables.palette.site.fontColor.secondary};
  font-size: .875rem;
  line-height: 1.25;
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: .4375rem;
  }
  &::before {
    content: '';
    width: 3px;
    height: 3px;
    background-color: ${variables.palette.dot.bgColor.primary};
    border-radius: 50%;
    opacity: .25;
    margin-top: calc((17.5px / 2) - (3px / 2));
    margin-right: .625rem;
    flex: 0 0 3px;
  }
  ${responsive.breakpoint.medium} {
    font-size: .75rem;
    &:not(:last-child) {
      margin-bottom: .3125rem;
    }
  }
`;

const ProjectExperienceConductContent = styled.ul`
  list-style: none;
  margin: .625rem 0 0 0;
  padding: 0;
`;

const ProjectExperienceNodePackageTag = styled.div`
  background-color: ${variables.palette.tag.bgColor.nodepkg};
  border-radius: 11px;
  color: ${variables.palette.tag.fontColor.nodepkg};
  font-size: .75rem;
  line-height: 1;
  margin-bottom: .3125rem;
  padding: .3125rem .625rem;
  &:not(:last-child) {
    margin-right: .3125rem;
  }
`;

const ProjectExperienceNodePackages = styled.div`
  margin: .9375rem 0 -.3125rem 0;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  align-items: center;
`;

const ProjectExperienceIcon = styled(Icon)`
  ${props => props.name === IconNamesEnum.React && css`
    width: 44.9px;
    height: 41px;
    ${responsive.breakpoint.medium} {
      width: 36.12px;
      height: 33px;
    }
  `}
  ${props => props.name === IconNamesEnum.Angular && css`
    width: 39.21px;
    height: 41px;
    ${responsive.breakpoint.medium} {
      width: 31.55px;
      height: 33px;
    }
  `}
  ${props => props.name === IconNamesEnum.TypeScript && css`
    width: 40px;
    height: 40px;
    ${responsive.breakpoint.medium} {
      width: 32px;
      height: 32px;
    }
  `}
`;

const ProjectExperienceTechnologies = styled.div`
  margin-top: .9375rem;
  display: flex;
  flex-direction: row;
  align-items: center;
  & > * {
    &:not(:last-child) {
      margin-right: .625rem;
    }
  }
  ${responsive.breakpoint.medium} {
    & > * {
      &:not(:last-child) {
        margin-right: .5rem;
      }
    }
  }
`;

const ProjectExperienceType = styled.div`
  color: ${variables.palette.site.fontColor.secondary};
  margin-top: .3125rem;
`;

const ProjectExperienceName = styled.div`
  font-size: 1.25rem;
  ${responsive.breakpoint.medium} {
    font-size: 1.125rem;
  }
`;

const ProjectExperienceItemContent = styled.div`
  width: calc(100% - (49.107142% + 2.5rem));
  margin-left: 2.5rem;
  ${responsive.breakpoint.medium} {
    width: 100%;
    margin-top: .9375rem;
    margin-left: 0;
  }
`;

const ProjectExperienceItemMedia = styled.div`
  width: 49.107142%;
  height: 0;
  padding-bottom: 23.709%;
  border-radius: 15px;
  box-shadow: 0 8px 20px ${rgba(variables.palette.base.black, 0.15)};
  overflow: hidden;
  video {
    width: 100%;
    vertical-align: top;
  }
  ${responsive.breakpoint.medium} {
    width: 420px;
    padding-bottom: 202.77px;
  }
  ${responsive.breakpoint.small} {
    width: 100%;
    padding-bottom: 48.28%;
  }
`;

const ProjectExperienceItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  &:not(:last-child) {
    margin-bottom: 3.125rem;
  }
  ${responsive.breakpoint.medium} {
    flex-direction: column;
    &:not(:last-child) {
      margin-bottom: 2.1875rem;
    }
  }
`;

export const ProjectExperience = Object.assign(
  styled.div``,
  {
    Item: ProjectExperienceItem,
    ItemMedia: ProjectExperienceItemMedia,
    ItemContent: ProjectExperienceItemContent,
    Name: ProjectExperienceName,
    Type: ProjectExperienceType,
    Technologies: ProjectExperienceTechnologies,
    Icon: ProjectExperienceIcon,
    NodePackages: ProjectExperienceNodePackages,
    NodePackageTag: ProjectExperienceNodePackageTag,
    ConductContent: ProjectExperienceConductContent,
    ConductItem: ProjectExperienceConductItem
  }
);
// ::: End

// Side Projects
const SideProjectsConductItem = styled.li`
  color: ${variables.palette.site.fontColor.secondary};
  font-size: .875rem;
  line-height: 1.25;
  display: flex;
  flex-direction: row;
  &:not(:last-child) {
    margin-bottom: .4375rem;
  }
  &::before {
    content: '';
    width: 3px;
    height: 3px;
    background-color: ${variables.palette.dot.bgColor.primary};
    border-radius: 50%;
    opacity: .25;
    margin-top: calc((17.5px / 2) - (3px / 2));
    margin-right: .625rem;
    flex: 0 0 3px;
  }
  ${responsive.breakpoint.medium} {
    font-size: .75rem;
    &:not(:last-child) {
      margin-bottom: .3125rem;
    }
  }
`;

const SideProjectsConductContent = styled.ul`
  list-style: none;
  margin: .9375rem 0 0 0;
  padding: 0;
  ${responsive.breakpoint.medium} {
    margin-top: .75rem;
  }
`;

const SideProjectsDescription = styled.p`
  color: ${variables.palette.site.fontColor.secondary};
  margin: .625rem 0 0 0;
  ${responsive.breakpoint.medium} {
    margin-top: .75rem;
  }
  ${responsive.breakpoint.small} {
    text-align: center;
  }
`;

const SideProjectsLink = styled.a`
  opacity: 1;
  transition: all .35s ease-out;
  display: flex;
  flex-direction: row;
  &:hover {
    opacity: .5;
  }
  &:not(:last-child) {
    margin-right: .625rem;
  }
`;

const SideProjectsLinks = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  &::before {
    content: '';
    width: 3px;
    height: 3px;
    background-color: ${variables.palette.dot.bgColor.secondary};
    border-radius: 50%;
    margin: 0 .9375rem;
  }
  ${responsive.breakpoint.medium} {
    margin-top: .625rem;
    &::before {
      display: none;
    }
  }
`;

const SideProjectsName = styled.span`
  font-size: 1.25rem;
  ${responsive.breakpoint.medium} {
    font-size: 1.125rem;
  }
`;

const SideProjectsHeader = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  ${responsive.breakpoint.medium} {
    flex-direction: column;
    align-items: flex-start;
  }
  ${responsive.breakpoint.small} {
    align-items: center;
  }
`;

const SideProjectsIcon = styled(Icon)`
  ${props => props.name === IconNamesEnum.React && css`
    width: 44.9px;
    height: 41px;
    ${responsive.breakpoint.medium} {
      width: 36.12px;
      height: 33px;
    }
  `}
  ${props => props.name === IconNamesEnum.Angular && css`
    width: 39.21px;
    height: 41px;
    ${responsive.breakpoint.medium} {
      width: 31.55px;
      height: 33px;
    }
  `}
  ${props => props.name === IconNamesEnum.JavaScript && css`
    width: 40px;
    height: 40px;
    ${responsive.breakpoint.medium} {
      width: 32px;
      height: 32px;
    }
  `}
  ${props => props.name === IconNamesEnum.TypeScript && css`
    width: 40px;
    height: 40px;
    ${responsive.breakpoint.medium} {
      width: 32px;
      height: 32px;
    }
  `}
  ${props => props.name === IconNamesEnum.Storybook && css`
    width: 20.23px;
    height: 25px;
    ${responsive.breakpoint.medium} {
      width: 18.61px;
      height: 23px;
    }
  `}
  ${props => props.name === IconNamesEnum.GitHub && css`
    width: 23.85px;
    height: 23px;
    ${responsive.breakpoint.medium} {
      width: 21.77px;
      height: 21px;
    }
  `}
  ${props => props.name === IconNamesEnum.npm && css`
    width: 35.71px;
    height: 15px;
    ${responsive.breakpoint.medium} {
      width: 30.94px;
      height: 13px;
    }
  `}
  ${props => props.name === IconNamesEnum.Redirect && css`
    width: 23px;
    height: 23px;
    ${responsive.breakpoint.medium} {
      width: 21px;
      height: 21px;
    }
  `}
`;

const SideProjectsItemContent = styled.div`
  width: calc(100% - (100px + 2.5rem));
  margin-left: 2.5rem;
  ${responsive.breakpoint.medium} {
    width: calc(100% - (80px + 1.5625rem));
    margin-left: 1.5625rem;
  }
  ${responsive.breakpoint.small} {
    width: 100%;
    margin-top: .625rem;
    margin-left: 0;
  }
`;

const SideProjectsItemLanguage = styled.div`
  width: 100px;
  height: 100px;
  background-color: ${variables.palette.block.bgColor.primary};
  border-radius: 30px;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  ${responsive.breakpoint.medium} {
    width: 80px;
    height: 80px;
    border-radius: 25px;
  }
  ${responsive.breakpoint.small} {
    margin: 0 auto;
  }
`;

const SideProjectsItem = styled.div`
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  &:not(:last-child) {
    margin-bottom: 3.125rem;
  }
  ${responsive.breakpoint.medium} {
    &:not(:last-child) {
      margin-bottom: 2.1875rem;
    }
  }
  ${responsive.breakpoint.small} {
    flex-direction: column;
  }
`;

export const SideProjects = Object.assign(
  styled.div``,
  {
    Item: SideProjectsItem,
    ItemLanguage: SideProjectsItemLanguage,
    ItemContent: SideProjectsItemContent,
    Icon: SideProjectsIcon,
    Header: SideProjectsHeader,
    Name: SideProjectsName,
    Links: SideProjectsLinks,
    Link: SideProjectsLink,
    Description: SideProjectsDescription,
    ConductContent: SideProjectsConductContent,
    ConductItem: SideProjectsConductItem
  }
);
// ::: End
