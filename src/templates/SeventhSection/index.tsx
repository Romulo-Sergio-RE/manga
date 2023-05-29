import { SeventhSectionPropsType } from './types';
import * as S from './styles';
import { useMediaQuery } from '@/hooks';

const SeventhSection: React.FC<SeventhSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const isMobile = useMediaQuery("tablet")
  return (
    <S.Container {...rest} >
      <S.Title>MANGA</S.Title>
      <S.Text>Se você  quer se aventurar nas grandes historias
        dos heróis dos mangás com outros leitores de todo o mundo,
        o MANGA é o melhor lugar para você para se aventurar.
      </S.Text>

      <S.ContainerIcons>
        <S.ImgFaceBook />
        <S.ImgTwitter />
        <S.ImgInstagram />
        <S.ImgYoutube />
      </S.ContainerIcons>
      <S.Footer>@todos os direitor reservados</S.Footer>
    </S.Container>
  );
};

export default SeventhSection;
