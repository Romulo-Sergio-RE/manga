import { FourthSectionPropsType } from './types';
import * as S from './styles';
import { useMediaQuery } from '@/hooks';

const FourthSection: React.FC<FourthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {

  const isMobile = useMediaQuery("tablet")
  return (
    <S.Container {...rest} >
      <S.ContainerTitleIcon>
        <S.Title>Leia mangás em qualquer hora e lugar</S.Title>
        <S.ContainerIconApp>
          <S.ImgGoogle />
          <S.ImgApple />
        </S.ContainerIconApp>
      </S.ContainerTitleIcon>
      {isMobile ? <S.ImgAppMobile /> : <S.ImgAppWeb />}
    </S.Container>
  );
};

export default FourthSection;
