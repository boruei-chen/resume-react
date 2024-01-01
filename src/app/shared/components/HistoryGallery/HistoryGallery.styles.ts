import styled from 'styled-components';
import { rgba } from 'polished';
import { variables } from 'assets/styles/styled-components/variables.styles';
import { responsive } from 'assets/styles/styled-components/responsive.styles';

const TechnologyTag = styled.li`
  border: 1px solid ${rgba(variables.palette.base.white, 0.5)};
  border-radius: 12px;
  font-size: .75rem;
  line-height: 1;
  box-sizing: border-box;
  padding: .3125rem .625rem;
  &:not(:last-child) {
    margin-right: .3125rem;
  }
`;

const Technologies = styled.ul`
  list-style: none;
  margin: .625rem 0 0 0;
  padding: 0;
  display: flex;
  flex-direction: row;
  align-items: center;
`;

const JobTitle = styled.div`
  margin-top: .3125rem;
`;

const CompanyName = styled.div`
  margin-top: .3125rem;
`;

const Year = styled.div`
  span {
    &:first-child {
      font-size: 2.5rem;
    }
    &:last-child {
      margin-left: .3125rem;
    }
  }
  ${responsive.breakpoint.medium} {
    span {
      &:first-child {
        font-size: 2.25rem;
      }
    }
  }
`;

const CardInfo = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, transparent 51.91%, ${rgba(variables.palette.base.black, 0.45)} 75.88%);
  color: ${variables.palette.base.white};
  font-size: .875rem;
  box-sizing: border-box;
  padding: 1rem 1.25rem;
  position: absolute;
  top: 0;
  left: 0;
  z-index: 2;
  display: flex;
  flex-direction: column;
  justify-content: flex-end;
`;

const CardMedia = styled.div`
  position: absolute;
  top: 50%;
  left: 0;
  z-index: 1;
  transform: translateY(-50%);
  img {
    width: 100%;
    vertical-align: top;
  }
`;

const CardInner = styled.div`
  width: 280px;
  height: 0;
  padding-bottom: 128.57%;
  border-radius: 35px;
  box-shadow: 0 8px 20px ${rgba(variables.palette.base.black, 0.15)};
  overflow: hidden;
  position: relative;
  ${responsive.breakpoint.medium} {
    width: 245px;
  }
`;

const Card = styled.div`
  width: 100%;
  box-sizing: border-box;
  padding: 1.875rem 1.25rem;
  ${responsive.breakpoint.medium} {
    padding: 1.5625rem .9375rem;
  }
`;

export const HistoryGallery = Object.assign(
  styled.div`
    .swiper-wrapper {
      transition-timing-function: linear;
    }
    .swiper-slide {
      width: auto;
    }
  `,
  {
    Card,
    CardInner,
    CardMedia,
    CardInfo,
    Year,
    CompanyName,
    JobTitle,
    Technologies,
    TechnologyTag
  }
);
