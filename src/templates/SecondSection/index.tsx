import { SecondSectionPropsType } from './types';
import * as S from './styles';
import CardPrimary from '@/components/CardPrimary';
import { useMediaQuery } from '@/hooks';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const SecondSection: React.FC<SecondSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {

  const isMobile = useMediaQuery('mobile');
  const isTablet = useMediaQuery('tablet');
  const arrayDataMangasMobile = [
    {
      "id": 1,
      "imageManga": <S.ImgJujutsuKaisenMobile />,
      "nameManga": "Jujutsu Kaisen",
      "capManga": "223",
      "ratingManga": "10",
    },
    {
      "id": 2,
      "imageManga": <S.ImgBungouStrayDogsMobile />,
      "nameManga": "Bungou Stray Dogs",
      "capManga": "107",
      "ratingManga": "6",
    },
    {
      "id": 3,
      "imageManga": <S.ImgBlueLockMobile />,
      "nameManga": "Blue Lock",
      "capManga": "219",
      "ratingManga": "4",
    },
  ]
  const arrayDataMangasWeb = [
    {
      "id": 1,
      "imageManga": <S.ImgJujutsuKaisenWeb />,
      "nameManga": "Jujutsu Kaisen",
      "capManga": "223",
      "ratingManga": "10",
    },
    {
      "id": 2,
      "imageManga": <S.ImgBungouStrayDogsWeb />,
      "nameManga": "Bungou Stray Dogs",
      "capManga": "107",
      "ratingManga": "6",
    },
    {
      "id": 3,
      "imageManga": <S.ImgBlueLockWeb />,
      "nameManga": "Blue Lock",
      "capManga": "219",
      "ratingManga": "4",
    },
  ]
  return (
    <S.Container {...rest}>
      <S.Title>Releases</S.Title>
      {isMobile ?
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          className="mySwiper"
        >
          {
            arrayDataMangasMobile.map(({ id, imageManga, nameManga, capManga, ratingManga }) => {
              return (
                <SwiperSlide key={id}>
                  <CardPrimary
                    imgManga={imageManga}
                    nameManga={nameManga}
                    capManga={capManga}
                    ratingManga={ratingManga}
                  />
                </SwiperSlide>
              )
            })
          }
        </Swiper>
        :
        isTablet ?
          <S.ContainerMangas>
            {
              arrayDataMangasMobile.map(({ id, imageManga, nameManga, capManga, ratingManga }) => {
                return (
                  <CardPrimary
                    key={id}
                    imgManga={imageManga}
                    nameManga={nameManga}
                    capManga={capManga}
                    ratingManga={ratingManga}
                  />
                )
              })
            }
          </S.ContainerMangas>
          :
          <S.ContainerMangas>
            {
              arrayDataMangasWeb.map(({ id, imageManga, nameManga, capManga, ratingManga }) => {
                return (
                  <CardPrimary
                    key={id}
                    imgManga={imageManga}
                    nameManga={nameManga}
                    capManga={capManga}
                    ratingManga={ratingManga}
                  />
                )
              })
            }
          </S.ContainerMangas>
      }

    </S.Container>
  );
};

export default SecondSection;
