import { SixthSectionPropsType } from './types';
import * as S from './styles';
import Button from '@/components/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks';
import CardThrid from '@/components/CardThrid';
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination } from "swiper";
import Loading from '@/components/Loading';

const SixthSection: React.FC<SixthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const [mangas, setMangas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("tablet");

  useEffect(() => {
    const arrayInit = [
      {
        "id": 0,
        "name": "One Piece",
        "imgManga": <S.ImgOnePieceMobile />
      },
      {
        "id": 1,
        "name": "Boku No Hero",
        "imgManga": <S.ImgBokuNoheroMobile />
      },
    ]
    setMangas(arrayInit)
  }, [])
  const arrayDayOfWeek = [
    {
      "id": 0,
      "day": "Monday",
      "images": [
        {
          "id": 0,
          "name": "One Piece",
          "imgManga": <S.ImgOnePieceMobile />
        },
        {
          "id": 1,
          "name": "Boku No Hero",
          "imgManga": <S.ImgBokuNoheroMobile />
        },
      ]
    },
    {
      "id": 1,
      "day": "Tuesday",
      "images": [
        {
          "id": 0,
          "name": "Chainsaw Man",
          "imgManga": <S.ImgChainsawManMobile />
        },
        {
          "id": 1,
          "name": "One Punch Man",
          "imgManga": <S.ImgOnePunchManMobile />
        },

      ]
    },
    {
      "id": 2,
      "day": "Wednesday",
      "images": [
        {
          "id": 0,
          "name": "Tokyo Revengers",
          "imgManga": <S.ImgTokyoRevengersMobile />
        },
        {
          "id": 1,
          "name": "Boku No Hero",
          "imgManga": <S.ImgBokuNoheroMobile />
        },

      ]
    },
    {
      "id": 3,
      "day": "Thursday",
      "images": [
        {
          "id": 0,
          "name": "Tokyo Revengers",
          "imgManga": <S.ImgBlackCloverMobile />
        },
        {
          "id": 1,
          "name": "One Piece",
          "imgManga": <S.ImgOnePieceMobile />
        },
      ]
    }, {
      "id": 4,
      "day": "Friday",
      "images": [
        {
          "id": 0,
          "name": "Chainsaw Man",
          "imgManga": <S.ImgChainsawManMobile />
        },
        {
          "id": 1,
          "name": "One Piece",
          "imgManga": <S.ImgOnePieceMobile />
        },
      ]
    },
    {
      "id": 5,
      "day": "Saturday",
      "images": [
        {
          "id": 0,
          "name": "Boku no Hero",
          "imgManga": <S.ImgBokuNoheroMobile />
        },
        {
          "id": 1,
          "name": "Tokyo Revengers",
          "imgManga": <S.ImgTokyoRevengersMobile />
        },
      ]
    },
    {
      "id": 6,
      "day": "Sunday",
      "images": [
        {
          "id": 0,
          "name": "One Punch Man",
          "imgManga": <S.ImgOnePunchManMobile />
        },
        {
          "id": 1,
          "name": "Chainsaw Man",
          "imgManga": <S.ImgChainsawManMobile />
        },
      ]
    },
  ]
  const clickChangeMangas = (day: string) => {
    setMangas([])
    setLoading(true)
    setTimeout(() => {
      arrayDayOfWeek.map((dados) => {
        if (day === dados.day) {
          setMangas(dados.images)
          setLoading(false)
        }
      })
    }, 500)
  }
  const clickChangeMangasSwiper = (slide: any) => {
    setMangas([])
    setLoading(true)
    setTimeout(() => {
      arrayDayOfWeek.map((dados) => {
        if (slide === dados.id) {
          setMangas(dados.images)
          setLoading(false)
        }
      })
    }, 500)
  }
  return (
    <S.Container {...rest} id='release'>
      <S.Title>Releases of the week</S.Title>
      <S.ContainerRelease>
        <S.ContainerCarousel>
          {isMobile ?
            <Swiper
              navigation={true}
              modules={[Navigation]}
              onSlideChange={(slideChange) => {
                clickChangeMangasSwiper(slideChange.activeIndex)
              }}
            >
              {
                arrayDayOfWeek.map(({ id, day }) => {
                  return (
                    <SwiperSlide key={id} >
                      <S.ContainerDayOfWeek>
                        <S.DayOfWeekButton>
                          {day}
                        </S.DayOfWeekButton>
                      </S.ContainerDayOfWeek>
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            :
            <S.ContainerDayOfWeek>
              {
                arrayDayOfWeek.map(({ id, day }) => {
                  return (
                    <S.DayOfWeekButton onClick={() => clickChangeMangas(day)} key={id}>
                      {day}
                    </S.DayOfWeekButton>
                  )
                })
              }
            </S.ContainerDayOfWeek>
          }
        </S.ContainerCarousel>
        <S.ContainerManga>
          {isMobile ?
            <>
              {
                loading ? <Loading />
                  :
                  <Swiper
                    pagination={true}
                    modules={[Pagination]}
                  >
                    {
                      mangas.map((manga) => {
                        return (
                          <SwiperSlide key={manga.id}>
                            <CardThrid
                              imgManga={manga.imgManga}
                              nameManga={manga.name}
                              colorTitleManga={"#fff"}
                            />
                          </SwiperSlide>
                        )
                      })
                    }
                  </Swiper>
              }
            </>
            :
            <>
              {
                loading ? <Loading />
                  :
                  <>
                    {mangas.map((manga) => {
                      return (
                        <CardThrid
                          imgManga={manga.imgManga}
                          nameManga={manga.name}
                          colorTitleManga={"#fff"}
                        />
                      )
                    })}
                  </>
              }
            </>
          }
        </S.ContainerManga>
      </S.ContainerRelease>
      <Button title='Release' />
    </S.Container>
  );
};

export default SixthSection;
