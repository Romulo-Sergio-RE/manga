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
      "title": "Esporte",
      "descrition": "Historia involvendo o esporte e competiçoes",
    },
    {
      "id": 2,
      "imageManga": <S.ImgAnimeActionMobile />,
      "title": "Ação",
      "descrition": "Sentimento de tensão nas lutas",
    },
    {
      "id": 3,
      "imageManga": <S.ImgAnimeComedyMobile />,
      "title": "Comedia",
      "descrition": "Mergulhe em um mundo imaginario e inspirador",
    },
    {
      "id": 4,
      "imageManga": <S.ImgAnimeHorrorMobile />,
      "title": "Terror",
      "descrition": "Aproveite a sensação de medo",
    },
    {
      "id": 5,
      "imageManga": <S.ImgAnimeDramaMobile />,
      "title": "Drama",
      "descrition": "Aproveite o sentimento de drama",
    },
    {
      "id": 6,
      "imageManga": <S.ImgAnimeSliceOfLifeMobile />,
      "title": "Slice of Life",
      "descrition": "Mergulhe no estilo de vida dos personagens",
    },


  ]
  return (
    <S.Container {...rest}>
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
