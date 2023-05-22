import { SecondSectionPropsType } from './types';
import * as S from './styles';
import CardPrimary from '@/components/CardPrimary';
import { useMediaQuery } from '@/hooks';

const SecondSection: React.FC<SecondSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {

  const isMobile = useMediaQuery('laptop');

  return (
    <S.Container {...rest}>
      <S.Title>Lançamento</S.Title>
      <CardPrimary
        imgManga={<S.ImgJujutsuKaisenMobile />}
        nameManga='Jujutsu Kaisen'
        capManga='223'
        ratingManga='10'
      />
      <CardPrimary
        imgManga={<S.ImgBungouStrayDogsMobile />}
        nameManga='Bungou Stray Dogs'
        capManga='107'
        ratingManga='5'
      />
      <CardPrimary
        imgManga={<S.ImgBlueLockMobile />}
        nameManga='Blue Lock'
        capManga='219'
        ratingManga='5'
      />
    </S.Container>
  );
};

export default SecondSection;
