import { SixthSectionPropsType } from './types';
import * as S from './styles';
import Button from '@/components/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useEffect, useState } from 'react';
import { useMediaQuery } from '@/hooks';


const SixthSection: React.FC<SixthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const [mangas, setMangas] = useState<any[]>([]);
  const [loading, setLoading] = useState(false);
  const isMobile = useMediaQuery("tablet");
  useEffect(() => {
    setMangas(["teste1", "teste2"])
  }, [])
  const arrayDayOfWeek = [
    {
      "id": 0,
      "day": "Monday",
      "images": [
        "One piece",
        "naruto",
      ]
    },
    {
      "id": 1,
      "day": "Tuesday",
      "images": [
        "boku no hero",
        "bungou stray dogs",
      ]
    },
    {
      "id": 2,
      "day": "Wednesday",
      "images": [
        "boku no hero",
        "bungou stray dogs",
      ]
    },
    {
      "id": 3,
      "day": "Thursday",
      "images": [
        "boku no hero",
        "bungou stray dogs",
      ]
    }, {
      "id": 4,
      "day": "Friday",
      "images": [
        "boku no hero",
        "bungou stray dogs",
      ]
    },
    {
      "id": 5,
      "day": "Saturday",
      "images": [
        "boku no hero",
        "bungou stray dogs",
      ]
    },
    {
      "id": 6,
      "day": "Sunday",
      "images": [
        "boku no hero",
        "bungou stray dogs",
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
    }, 1000)
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
    }, 1000)
  }

  return (
    <S.Container {...rest}>

      <S.Title>Releases of the week</S.Title>
      <S.ContainerRelease>
        {isMobile ?

          <Swiper
            navigation={true}
            modules={[Navigation]}

            onSlideChange={(slideChange) => {
              clickChangeMangasSwiper(slideChange.activeIndex)
            }}
            className="mySwiper"
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
        <S.ContainerManga>
          {loading ? "loading..."
            :
            <>{mangas.map((manga) => {
              return (
                <div>{manga}</div>
              )
            })}</>
          }
        </S.ContainerManga>
      </S.ContainerRelease>
      <Button title='Release' />
    </S.Container>
  );
};

export default SixthSection;
