import { CardPrimaryPropsType } from './types';
import * as S from './styles';
import { useMediaQuery } from '@/hooks';

const CardPrimary: React.FC<CardPrimaryPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const isMobile = useMediaQuery('laptop');

  return (
    <S.Container {...rest} ref={innerRef}>
      <div>
        <S.ImgJujutsuKaisenMobile />
      </div>
    </S.Container>
  );
};

export default CardPrimary;
