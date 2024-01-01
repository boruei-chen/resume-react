import React, { useRef, useState, useEffect, useLayoutEffect, useCallback } from 'react';
import { useDispatch } from 'react-redux';
import apiService from 'app/bff/services/api';
import { MainPageDataResp } from 'app/bff/models/sources/mainPageData';
import commonService from 'app/core/services/common';
import { setMainPageStateAction } from 'app/store/shared/actions';
import { ColorsEnum as IconColorsEnum } from 'app/shared/components/Icon/Icon.types';
import HistoryGallery from 'app/shared/components/HistoryGallery';
import { Props, SectionInfo, SectionIdEnum } from './Main.types';
import * as S from './Main.styles';

const Main: React.FC<Props> = () => {
  const reduxDispatch = useDispatch();
  const sectionElementRefList = useRef<HTMLElement[]>([]);
  const [pageDataState, setPageDataState] = useState<MainPageDataResp>();
  const combineSectionInfoListCB = useCallback(combineSectionInfoList, [reduxDispatch, pageDataState]);

  useEffect(() => {
    fetchPageData();
  }, []);

  useLayoutEffect(() => {
    combineSectionInfoListCB();
  }, [combineSectionInfoListCB]);

  useEffect(() => {
    const onResize = () => {
      combineSectionInfoListCB();
    };
    window.addEventListener('resize', onResize);
    return () => {
      window.removeEventListener('resize', onResize);
    };
  }, [combineSectionInfoListCB]);

  async function fetchPageData () {
    const response = await apiService.fetchMainPageData();
    if (response) setPageDataState(response);
  }

  function combineSectionInfoList () {
    if (sectionElementRefList.current.length > 0 && pageDataState) {
      const sectionInfoList: SectionInfo[] = sectionElementRefList.current.map((element) => ({
        id: element.getAttribute('data-section-id') as SectionIdEnum,
        offsetTop: element.offsetTop,
        height: element.clientHeight
      }));
      reduxDispatch(setMainPageStateAction({ sectionInfoList }));
    }
  }

  return pageDataState
    ? (
      <S.Main>
        <S.Main.Section
          ref={(instance) => instance && (sectionElementRefList.current[0] = instance)}
          data-section-id={SectionIdEnum.Profile}
        >
          <S.Profile>
            <S.Profile.Avatar src={require(`assets/images/personal/avatar/${pageDataState.profile.avatar.image}`)} name={pageDataState.profile.enName} />
            <S.Profile.Name>{pageDataState.profile.name}</S.Profile.Name>
            <S.Profile.JobTitle>{pageDataState.profile.jobTitle}</S.Profile.JobTitle>
            <S.Profile.Information>
              <S.Profile.ContactList>
                {pageDataState.profile.contactList.map((contactItem) => (
                  <S.Profile.ContactItem key={contactItem.id}>
                    {contactItem.text}
                  </S.Profile.ContactItem>
                ))}
              </S.Profile.ContactList>
              <S.Profile.Divider />
              <S.Profile.Links>
                {pageDataState.profile.links.map((link) => (
                  <S.Profile.Link href={link.url} target="_blank" key={link.id}>
                    <S.Profile.Icon name={link.icon.name} color={IconColorsEnum.Grayscale} />
                  </S.Profile.Link>
                ))}
              </S.Profile.Links>
            </S.Profile.Information>
          </S.Profile>
        </S.Main.Section>
        <S.Main.Section
          ref={(instance) => instance && (sectionElementRefList.current[1] = instance)}
          data-section-id={SectionIdEnum.History}
        >
          <S.History>
            <HistoryGallery dataSource={pageDataState.history} />
          </S.History>
        </S.Main.Section>
        <S.Main.Section
          ref={(instance) => instance && (sectionElementRefList.current[2] = instance)}
          data-section-id={SectionIdEnum.Skills}
        >
          <S.Main.SectionInner>
            <S.Main.SectionTitle>專業技能</S.Main.SectionTitle>
            <S.Main.SectionContent>
              <S.Skills>
                <S.Skills.Section>
                  <S.Skills.SectionTitle>{pageDataState.skills.frontEnd.title}</S.Skills.SectionTitle>
                  <S.Skills.SectionContent>
                    <S.Skills.SkillList>
                      {pageDataState.skills.frontEnd.list.map((skill) => (
                        <S.Skills.SkillItem key={skill.id}>
                          <S.Skills.Icon name={skill.icon.name} />
                          <span>{skill.text}</span>
                        </S.Skills.SkillItem>
                      ))}
                    </S.Skills.SkillList>
                  </S.Skills.SectionContent>
                </S.Skills.Section>
                <S.Skills.Section>
                  <S.Skills.SectionTitle>{pageDataState.skills.nodePackages.title}</S.Skills.SectionTitle>
                  <S.Skills.SectionContent>
                    <S.Skills.SkillList>
                      {pageDataState.skills.nodePackages.list.map((nodePackage) => (
                        <S.Skills.SkillTag $nodePackage key={nodePackage.id}>
                          {nodePackage.text}
                        </S.Skills.SkillTag>
                      ))}
                    </S.Skills.SkillList>
                  </S.Skills.SectionContent>
                </S.Skills.Section>
                <S.Skills.Section>
                  <S.Skills.SectionTitle>{pageDataState.skills.others.title}</S.Skills.SectionTitle>
                  <S.Skills.SectionContent>
                    <S.Skills.SkillList>
                      {pageDataState.skills.others.list.map((other) => (
                        <S.Skills.SkillTag key={other.id}>
                          {other.text}
                        </S.Skills.SkillTag>
                      ))}
                    </S.Skills.SkillList>
                  </S.Skills.SectionContent>
                </S.Skills.Section>
              </S.Skills>
            </S.Main.SectionContent>
          </S.Main.SectionInner>
        </S.Main.Section>
        <S.Main.Section
          ref={(instance) => instance && (sectionElementRefList.current[3] = instance)}
          data-section-id={SectionIdEnum.WorkExperience}
        >
          <S.Main.SectionInner>
            <S.Main.SectionTitle>工作經歷</S.Main.SectionTitle>
            <S.Main.SectionContent>
              <S.WorkExperience>
                {pageDataState.workExperience.map((workExperience) => (
                  <S.WorkExperience.Item key={workExperience.id}>
                    <S.WorkExperience.ItemHeader>
                      <S.WorkExperience.CompanyLogo>
                        <img src={require(`assets/images/company/${workExperience.company.logo}`)} alt={workExperience.company.name} />
                      </S.WorkExperience.CompanyLogo>
                      <S.WorkExperience.JobInformation>
                        <S.WorkExperience.JobTitle>{workExperience.jobTitle}</S.WorkExperience.JobTitle>
                        <S.WorkExperience.CompanyName>{workExperience.company.name}</S.WorkExperience.CompanyName>
                        <S.WorkExperience.Period>
                          <span>{workExperience.period.startDate}</span>
                          <span>-</span>
                          <span>{workExperience.period.endDate ?? '至今'}</span>
                          <span>{commonService.calculateRangeDate(workExperience.period.startDate, workExperience.period.endDate)}</span>
                        </S.WorkExperience.Period>
                      </S.WorkExperience.JobInformation>
                    </S.WorkExperience.ItemHeader>
                    <S.WorkExperience.ItemBody>
                      {workExperience.preferment.length > 0 && (
                        <S.WorkExperience.Preferment>
                          {workExperience.preferment.map((preferment) => (
                            <S.WorkExperience.PrefermentItem key={preferment.id}>
                              <span>{preferment.date}</span>
                              <span>{preferment.jobTitle}</span>
                            </S.WorkExperience.PrefermentItem>
                          ))}
                        </S.WorkExperience.Preferment>
                      )}
                      <S.WorkExperience.ConductContent>
                        {workExperience.conductContent.map((conductItem) => (
                          <S.WorkExperience.ConductItem key={conductItem.id}>
                            {conductItem.text}
                          </S.WorkExperience.ConductItem>
                        ))}
                      </S.WorkExperience.ConductContent>
                    </S.WorkExperience.ItemBody>
                  </S.WorkExperience.Item>
                ))}
              </S.WorkExperience>
            </S.Main.SectionContent>
          </S.Main.SectionInner>
        </S.Main.Section>
        <S.Main.Section
          ref={(instance) => instance && (sectionElementRefList.current[4] = instance)}
          data-section-id={SectionIdEnum.ProjectExperience}
        >
          <S.Main.SectionInner>
            <S.Main.SectionTitle>專案經歷</S.Main.SectionTitle>
            <S.Main.SectionContent>
              <S.ProjectExperience>
                {pageDataState.projectExperience.map((projectExperience) => (
                  <S.ProjectExperience.Item key={projectExperience.id}>
                    <S.ProjectExperience.ItemMedia>
                      <video autoPlay muted loop>
                        <source src={require(`assets/videos/projects/${projectExperience.media.video}`)} type="video/mp4" />
                      </video>
                    </S.ProjectExperience.ItemMedia>
                    <S.ProjectExperience.ItemContent>
                      <S.ProjectExperience.Name>{projectExperience.name}</S.ProjectExperience.Name>
                      <S.ProjectExperience.Type>{projectExperience.type}</S.ProjectExperience.Type>
                      <S.ProjectExperience.Technologies>
                        {projectExperience.technologies.map((technology) => (
                          <S.ProjectExperience.Icon name={technology.icon.name} key={technology.id} />
                        ))}
                      </S.ProjectExperience.Technologies>
                      <S.ProjectExperience.NodePackages>
                        {projectExperience.nodePackages.map((nodePackage) => (
                          <S.ProjectExperience.NodePackageTag key={nodePackage.id}>
                            {nodePackage.text}
                          </S.ProjectExperience.NodePackageTag>
                        ))}
                      </S.ProjectExperience.NodePackages>
                      <S.ProjectExperience.ConductContent>
                        {projectExperience.conductContent.map((conductItem) => (
                          <S.ProjectExperience.ConductItem key={conductItem.id}>
                            {conductItem.text}
                          </S.ProjectExperience.ConductItem>
                        ))}
                      </S.ProjectExperience.ConductContent>
                    </S.ProjectExperience.ItemContent>
                  </S.ProjectExperience.Item>
                ))}
              </S.ProjectExperience>
            </S.Main.SectionContent>
          </S.Main.SectionInner>
        </S.Main.Section>
        <S.Main.Section
          ref={(instance) => instance && (sectionElementRefList.current[5] = instance)}
          data-section-id={SectionIdEnum.SideProjects}
        >
          <S.Main.SectionInner>
            <S.Main.SectionTitle>個人專案</S.Main.SectionTitle>
            <S.Main.SectionContent>
              <S.SideProjects>
                {pageDataState.sideProjects.map((sideProject) => (
                  <S.SideProjects.Item key={sideProject.id}>
                    <S.SideProjects.ItemLanguage>
                      <S.SideProjects.Icon name={sideProject.language.icon.name} />
                    </S.SideProjects.ItemLanguage>
                    <S.SideProjects.ItemContent>
                      <S.SideProjects.Header>
                        <S.SideProjects.Name>{sideProject.name}</S.SideProjects.Name>
                        <S.SideProjects.Links>
                          {sideProject.links.map((link) => (
                            <S.SideProjects.Link href={link.url} target="_blank" key={link.id}>
                              <S.SideProjects.Icon name={link.icon.name} />
                            </S.SideProjects.Link>
                          ))}
                        </S.SideProjects.Links>
                      </S.SideProjects.Header>
                      <S.SideProjects.Description>{sideProject.description}</S.SideProjects.Description>
                      <S.SideProjects.ConductContent>
                        {sideProject.conductContent.map((conductItem) => (
                          <S.SideProjects.ConductItem key={conductItem.id}>
                            {conductItem.text}
                          </S.SideProjects.ConductItem>
                        ))}
                      </S.SideProjects.ConductContent>
                    </S.SideProjects.ItemContent>
                  </S.SideProjects.Item>
                ))}
              </S.SideProjects>
            </S.Main.SectionContent>
          </S.Main.SectionInner>
        </S.Main.Section>
      </S.Main>
      )
    : null;
};

export default Main;
