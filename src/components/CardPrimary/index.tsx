import { CardPrimaryPropsType } from './types';
import * as S from './styles';

const CardPrimary: React.FC<CardPrimaryPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      {children}
    </S.Container>
  );
};

export default CardPrimary;
