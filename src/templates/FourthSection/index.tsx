import { FourthSectionPropsType } from './types';
import * as S from './styles';
import { useMediaQuery } from '@/hooks';

const FourthSection: React.FC<FourthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {

  const isMobile = useMediaQuery("mobile")
  return (
    <S.Container {...rest} >
      <S.ContainerTitleIcon>
        <S.Title>Read manga anytime, anywhere</S.Title>
        <S.ContainerIconApp>
          <S.ImgGoogle />
          <S.ImgApple />
        </S.ContainerIconApp>
      </S.ContainerTitleIcon>
      <S.ContainerImg>
        {isMobile ? <S.ImgAppMobile /> : <S.ImgAppWeb />}
      </S.ContainerImg>
    </S.Container>
  );
};

export default FourthSection;
