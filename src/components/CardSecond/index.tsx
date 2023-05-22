import { CardSecondPropsType } from './types';
import * as S from './styles';

const CardSecond: React.FC<CardSecondPropsType> = ({
  children,
  innerRef,
  imgManga,
  titleManga,
  descriptionManga,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      <S.ImgManga>
        <span className='title'>{titleManga}</span>
        <span className='description'>{descriptionManga}</span>
        {imgManga}
      </S.ImgManga>
    </S.Container>
  );
};

export default CardSecond;
