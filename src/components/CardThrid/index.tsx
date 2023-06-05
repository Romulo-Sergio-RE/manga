import { CardThridPropsType } from './types';
import * as S from './styles';

const CardThrid: React.FC<CardThridPropsType> = ({
  children,
  innerRef,
  imgManga,
  nameManga,
  colorTitleManga,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.ImgManga>
        {imgManga}
      </S.ImgManga >
      <S.Title colorTitle={colorTitleManga}>{nameManga}</S.Title>
    </S.Container>
  );
};

export default CardThrid;
