import { CardPrimaryPropsType } from './types';
import * as S from './styles';

const CardPrimary: React.FC<CardPrimaryPropsType> = ({
  children,
  innerRef,
  imgManga,
  capManga,
  nameManga,
  ratingManga,
  ...rest
}) => {

  return (
    <S.Container {...rest}>
      <S.ImgManga>
        <span>{ratingManga}/10</span>
        {imgManga}
      </S.ImgManga >
      <S.SubTitle>Capitulo: {capManga}</S.SubTitle>
      <S.Title>{nameManga}</S.Title>
    </S.Container>
  );
};

export default CardPrimary;
