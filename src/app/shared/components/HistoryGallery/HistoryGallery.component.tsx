import React, { useState, useEffect, useCallback } from 'react';
import { Autoplay } from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Props } from './HistoryGallery.types';
import * as S from './HistoryGallery.styles';

const HistoryGallery: React.FC<Props> = (props) => {
  const [dataSourceState, setDataSourceState] = useState<Props['dataSource']>(props.dataSource);
  const executeDataSourceDoubledCB = useCallback(executeDataSourceDoubled, [props.dataSource]);

  useEffect(() => {
    executeDataSourceDoubledCB();
  }, [executeDataSourceDoubledCB]);

  function executeDataSourceDoubled () {
    const slideElemList = document.querySelectorAll<HTMLDivElement>('.swiper-slide');
    const slideElemListTotalWidth = Array.from(slideElemList).reduce((acc, curr) => acc + curr.offsetWidth, 0);
    if (slideElemListTotalWidth > window.innerWidth) setDataSourceState((prevState) => prevState.concat(props.dataSource));
  }

  return (
    <S.HistoryGallery>
      <Swiper
        modules={[Autoplay]}
        direction="horizontal"
        slidesPerView="auto"
        allowTouchMove={false}
        loop
        speed={6000}
        autoplay={{
          delay: 1
        }}
      >
        {dataSourceState.map((data) => (
          <SwiperSlide key={data.id}>
            <S.HistoryGallery.Card>
              <S.HistoryGallery.CardInner>
                <S.HistoryGallery.CardMedia>
                  <img src={require(`assets/images/personal/history/${data.year}/${data.media.image}`)} alt={data.enName} />
                </S.HistoryGallery.CardMedia>
                <S.HistoryGallery.CardInfo>
                  <S.HistoryGallery.Year>
                    <span>{data.year}</span>
                    <span>{data.yearUnitText}</span>
                  </S.HistoryGallery.Year>
                  <S.HistoryGallery.CompanyName>{data.companyName}</S.HistoryGallery.CompanyName>
                  <S.HistoryGallery.JobTitle>{data.jobTitle}</S.HistoryGallery.JobTitle>
                  <S.HistoryGallery.Technologies>
                    {data.technologies.map((technology) => (
                      <S.HistoryGallery.TechnologyTag key={technology.id}>
                        {technology.text}
                      </S.HistoryGallery.TechnologyTag>
                    ))}
                  </S.HistoryGallery.Technologies>
                </S.HistoryGallery.CardInfo>
              </S.HistoryGallery.CardInner>
            </S.HistoryGallery.Card>
          </SwiperSlide>
        ))}
      </Swiper>
    </S.HistoryGallery>
  );
};

export default HistoryGallery;
