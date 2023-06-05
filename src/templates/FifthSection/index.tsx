import { FifthSectionPropsType } from './types';
import * as S from './styles';
import CardThrid from '@/components/CardThrid';
import { useApiManga } from '@/context/apiMangaContext';
import { useMediaQuery } from '@/hooks';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";

const FifthSection: React.FC<FifthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const isMobile = useMediaQuery('mobile');
  const isTablet = useMediaQuery('tablet');

  const arrayDataMangasFavoriteMobile = [
    {
      "id": 0,
      "imageManga": <S.ImgBlackCloverMobile />,
      "nameManga": "Black Clover",
    },
    {
      "id": 1,
      "imageManga": <S.ImgOnePunchManMobile />,
      "nameManga": "One Punch Man",
    },
    {
      "id": 2,
      "imageManga": <S.ImgTokyoRevengersMobile />,
      "nameManga": "Tokyo evengers",
    },
    {
      "id": 3,
      "imageManga": <S.ImgOnePieceMobile />,
      "nameManga": "One Piece",
    },
  ]
  const arrayDataMangasFavoriteMobileTwo = [
    {
      "id": 0,
      "imageManga": <S.ImgChainsawManMobile />,
      "nameManga": "Chainsaw Man",
    },
    {
      "id": 1,
      "imageManga": <S.ImgBokuNoHeroMobile />,
      "nameManga": "Boku No Hero",
    },
    {
      "id": 2,
      "imageManga": <S.ImgOnePunchManMobile />,
      "nameManga": "One Punch Man",
    },

    {
      "id": 3,
      "imageManga": <S.ImgTokyoRevengersMobile />,
      "nameManga": "One Piece",
    },
  ]
  const arrayDataMangasFavoriteWeb = [
    {
      "id": 0,
      "imageManga": <S.ImgBlackCloverWeb />,
      "nameManga": "Black Clover",
    },
    {
      "id": 1,
      "imageManga": <S.ImgBokuNoHeroWeb />,
      "nameManga": "Boku No Hero",
    },
    {
      "id": 2,
      "imageManga": <S.ImgOnePunchManWeb />,
      "nameManga": "One Punch Man",
    },

    {
      "id": 3,
      "imageManga": <S.ImgOnePieceWeb />,
      "nameManga": "Blue Lock",
    },
  ]
  const arrayDataMangasFavoriteWebTwo = [
    {
      "id": 0,
      "imageManga": <S.ImgChainsawManWeb />,
      "nameManga": "Chainsaw Man",
    },
    {
      "id": 1,
      "imageManga": <S.ImgBokuNoHeroWeb />,
      "nameManga": "Boku No Hero",
    },
    {
      "id": 2,
      "imageManga": <S.ImgOnePunchManWeb />,
      "nameManga": "One Punch Man",
    },

    {
      "id": 3,
      "imageManga": <S.ImgTokyoRevengersWeb />,
      "nameManga": "One Piece",
    },
  ]
  return (
    <S.Container {...rest}>
      <>
        <S.Title>Favorite Mangas</S.Title>
        {
          isMobile ?
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              className="mySwiper"
            >
              {
                arrayDataMangasFavoriteMobile.map(({ id, imageManga, nameManga }) => {
                  return (
                    <SwiperSlide key={id}>
                      <CardThrid
                        imgManga={imageManga}
                        nameManga={nameManga}
                      />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            :
            isTablet ?
              <S.ContainerGridMangas>
                {
                  arrayDataMangasFavoriteMobile.map(({ id, imageManga, nameManga }) => {
                    return (
                      <div key={id}>
                        <CardThrid
                          imgManga={imageManga}
                          nameManga={nameManga}
                        />
                      </div>
                    )
                  })
                }
              </S.ContainerGridMangas>
              :
              <S.ContainerGridMangas>
                {
                  arrayDataMangasFavoriteWeb.map(({ id, imageManga, nameManga, }) => {
                    return (
                      <div key={id}>
                        <CardThrid
                          imgManga={imageManga}
                          nameManga={nameManga}
                        />
                      </div>
                    )
                  })
                }
              </S.ContainerGridMangas>
        }
      </>
      <>
        <S.Title>Most Viewed Mangas</S.Title>
        {
          isMobile ?
            <Swiper
              slidesPerView={1}
              spaceBetween={20}
              className="mySwiper"
            >
              {
                arrayDataMangasFavoriteMobileTwo.map(({ id, imageManga, nameManga }) => {
                  return (
                    <SwiperSlide key={id}>
                      <CardThrid
                        imgManga={imageManga}
                        nameManga={nameManga}
                      />
                    </SwiperSlide>
                  )
                })
              }
            </Swiper>
            :
            isTablet ?
              <S.ContainerGridMangas>
                {
                  arrayDataMangasFavoriteMobileTwo.map(({ id, imageManga, nameManga }) => {
                    return (
                      <div key={id}>
                        <CardThrid
                          imgManga={imageManga}
                          nameManga={nameManga}
                        />
                      </div>
                    )
                  })
                }
              </S.ContainerGridMangas>
              :
              <S.ContainerGridMangas>
                {
                  arrayDataMangasFavoriteWebTwo.map(({ id, imageManga, nameManga, }) => {
                    return (
                      <div key={id}>
                        <CardThrid
                          imgManga={imageManga}
                          nameManga={nameManga}
                        />
                      </div>
                    )
                  })
                }
              </S.ContainerGridMangas>
        }
      </>
    </S.Container>
  );
};

export default FifthSection;
