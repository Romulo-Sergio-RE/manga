import { SecondSectionPropsType } from './types';
import * as S from './styles';
import CardPrimary from '@/components/CardPrimary';
import { useMediaQuery } from '@/hooks';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination } from "swiper";

const SecondSection: React.FC<SecondSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {

  const isMobile = useMediaQuery('mobile');
  const isTablet = useMediaQuery('tablet');
  const arrayDataMangasMobile = [
    {
      "imageManga": <S.ImgJujutsuKaisenMobile />,
      "nameManga": "Jujutsu Kaisen",
      "capManga": "223",
      "ratingManga": "10",
    },
    {
      "imageManga": <S.ImgBungouStrayDogsMobile />,
      "nameManga": "Bungou Stray Dogs",
      "capManga": "107",
      "ratingManga": "6",
    },
    {
      "imageManga": <S.ImgBlueLockMobile />,
      "nameManga": "Blue Lock",
      "capManga": "219",
      "ratingManga": "4",
    },
  ]
  const arrayDataMangasWeb = [
    {
      "imageManga": <S.ImgJujutsuKaisenWeb />,
      "nameManga": "Jujutsu Kaisen",
      "capManga": "223",
      "ratingManga": "10",
    },
    {
      "imageManga": <S.ImgBungouStrayDogsWeb />,
      "nameManga": "Bungou Stray Dogs",
      "capManga": "107",
      "ratingManga": "6",
    },
    {
      "imageManga": <S.ImgBlueLockWeb />,
      "nameManga": "Blue Lock",
      "capManga": "219",
      "ratingManga": "4",
    },
  ]
  return (
    <S.Container {...rest}>
      <S.Title>Lançamento</S.Title>
      {isMobile ?
        <Swiper
          slidesPerView={1}
          spaceBetween={20}
          className="mySwiper"
        >
          {
            arrayDataMangasMobile.map(({ imageManga, nameManga, capManga, ratingManga }) => {
              return (
                <SwiperSlide>
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
              arrayDataMangasMobile.map(({ imageManga, nameManga, capManga, ratingManga }) => {
                return (
                  <CardPrimary
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
              arrayDataMangasWeb.map(({ imageManga, nameManga, capManga, ratingManga }) => {
                return (
                  <CardPrimary
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
