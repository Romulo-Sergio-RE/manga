import { ThirdSectionPropsType } from './types';
import * as S from './styles';
import { useMediaQuery } from '@/hooks';
import CardSecond from '@/components/CardSecond';

const ThirdSection: React.FC<ThirdSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {

  const isMobile = useMediaQuery('laptop');

  return (
    <S.Container {...rest}>
      <S.Title>Explore os seus Interesses </S.Title>
      <CardSecond
        imgManga={<S.ImgAnimeSportMobile />}
        titleManga='Esporte'
        descriptionManga='Historia involvendo o esporte e competiçoes'
      />
      <CardSecond
        imgManga={<S.ImgAnimeActionMobile />}
        titleManga='Ação'
        descriptionManga='Sentimento de tensão nas lutas'
      />
      <CardSecond
        imgManga={<S.ImgAnimeComedyMobile />}
        titleManga='Comedia'
        descriptionManga='Mergulhe em um mundo imaginario e inspirador'
      />
      <CardSecond
        imgManga={<S.ImgAnimeHorrorMobile />}
        titleManga='Terror'
        descriptionManga='Aproveite a sensação de medo'
      />
      <CardSecond
        imgManga={<S.ImgAnimeDramaMobile />}
        titleManga='Drama'
        descriptionManga='Aproveite o sentimento de drama'
      />
      <CardSecond
        imgManga={<S.ImgAnimeSliceOfLifeMobile />}
        titleManga='Slice of Life'
        descriptionManga='Mergulhe no estilo de vida dos personagens'
      />
    </S.Container>
  );
};

export default ThirdSection;
