import { SixthSectionPropsType } from './types';
import * as S from './styles';
import Button from '@/components/Button';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";

import { Navigation } from "swiper";


const SixthSection: React.FC<SixthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest}>

      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        <SwiperSlide>
          <S.ContainerDayOfWeek onClick={() => { alert("sdas") }}>
            <S.DayOfWeekButton>
              tesetse
            </S.DayOfWeekButton>
          </S.ContainerDayOfWeek>
        </SwiperSlide>
        <SwiperSlide>Slide 2</SwiperSlide>
        <SwiperSlide>Slide 3</SwiperSlide>
        <SwiperSlide>Slide 4</SwiperSlide>
        <SwiperSlide>Slide 5</SwiperSlide>
        <SwiperSlide>Slide 6</SwiperSlide>
        <SwiperSlide>Slide 7</SwiperSlide>
        <SwiperSlide>Slide 8</SwiperSlide>
        <SwiperSlide>Slide 9</SwiperSlide>
      </Swiper>
      {/* <S.Title>Releases of the week</S.Title>
      <S.ContainerRelease>
    
        <S.ContainerDayOfWeek>
          <div>Segunda</div>
          <div>Terca</div>
          <div>Quarta</div>
          <div>Quinta</div>
          <div>Sexta</div>
          <div>Sabado</div>
          <div>Domingo</div>
        </S.ContainerDayOfWeek>
      </S.ContainerRelease>
      <Button title='testes' /> */}
    </S.Container>
  );
};

export default SixthSection;
