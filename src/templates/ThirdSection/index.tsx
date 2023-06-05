import { ThirdSectionPropsType } from './types';
import * as S from './styles';
import CardSecond from '@/components/CardSecond';

const ThirdSection: React.FC<ThirdSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const arrayCardsMangas = [
    {
      "id": 1,
      "imageManga": <S.ImgAnimeSportMobile />,
      "title": "Sport",
      "descrition": "History involving the sport and competitions",
    },
    {
      "id": 2,
      "imageManga": <S.ImgAnimeActionMobile />,
      "title": "Action",
      "descrition": "Feeling of tension in fights",
    },
    {
      "id": 3,
      "imageManga": <S.ImgAnimeComedyMobile />,
      "title": "Comedy",
      "descrition": "Enter a funny and imaginary world",
    },
    {
      "id": 4,
      "imageManga": <S.ImgAnimeHorrorMobile />,
      "title": "Horror",
      "descrition": "Feel the fear and anguish of the characters",
    },
    {
      "id": 5,
      "imageManga": <S.ImgAnimeDramaMobile />,
      "title": "Drama",
      "descrition": "Enjoy the feeling of drama",
    },
    {
      "id": 6,
      "imageManga": <S.ImgAnimeSliceOfLifeMobile />,
      "title": "Slice of Life",
      "descrition": "Get into the lifestyle of the characters",
    },


  ]
  return (
    <S.Container {...rest} id='genres'>
      <S.Title>Explore your Interests</S.Title>
      <S.ContainerGrid>
        {
          arrayCardsMangas.map(({ id, imageManga, title, descrition }) => {
            return (
              <CardSecond
                key={id}
                imgManga={imageManga}
                titleManga={title}
                descriptionManga={descrition}
              />
            )
          })
        }
      </S.ContainerGrid>
    </S.Container>
  );
};

export default ThirdSection;
