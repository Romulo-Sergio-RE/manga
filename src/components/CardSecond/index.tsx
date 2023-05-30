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
        <p className='title'>{titleManga}</p>
        <p className='description'>{descriptionManga}</p>
        {imgManga}
      </S.ImgManga>
    </S.Container>
  );
};

export default CardSecond;
