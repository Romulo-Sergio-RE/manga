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
    <S.Container {...rest} id="contact">
      <S.Title>MANGA</S.Title>
      <S.Text>
        If you want to venture into the great stories
        of manga heroes with other readers around the world,
        MANGA is the best place for you to venture.
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
