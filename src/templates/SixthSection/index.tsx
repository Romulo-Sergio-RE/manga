import { SixthSectionPropsType } from './types';
import * as S from './styles';
import Button from '@/components/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";
import { useState } from 'react';


const SixthSection: React.FC<SixthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const [teste, setTeste] = useState("")
  const arrayDayOfWeek = [
    {
      "id": 1,
      "day": "Monday",
    },
    {
      "id": 2,
      "day": "Tuesday",
    },
    {
      "id": 3,
      "day": "Wednesday",
    },
    {
      "id": 4,
      "day": "Thursday",
    }, {
      "id": 5,
      "day": "Friday",
    },
    {
      "id": 6,
      "day": "Saturday",
    },
    {
      "id": 7,
      "day": "Sunday",
    },
  ]
  const dayWeek = (a: string) => {
    setTeste(a)
    alert(a)
  }
  return (
    <S.Container {...rest}>

      <S.Title>Releases of the week</S.Title>
      <S.ContainerRelease>
        <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
          {
            arrayDayOfWeek.map(({ id, day }) => {
              return (
                <SwiperSlide key={id}>
                  <S.ContainerDayOfWeek onClick={() => dayWeek(day)}>
                    <S.DayOfWeekButton>
                      {day}
                    </S.DayOfWeekButton>
                  </S.ContainerDayOfWeek>
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        {/* <S.ContainerDayOfWeek>
          {
            arrayDayOfWeek.map(({ id, day }) => {
              return (
                <S.DayOfWeekButton onClick={() => dayWeek(day)}>
                  {day}
                </S.DayOfWeekButton>
              )
            })
          }
        </S.ContainerDayOfWeek> */}
      </S.ContainerRelease>
      <Button title='testes' />
    </S.Container>
  );
};

export default SixthSection;
