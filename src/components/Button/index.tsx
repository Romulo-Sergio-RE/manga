import { ButtonPropsType } from './types';
import * as S from './styles';

const Button: React.FC<ButtonPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      Romulo Sergio
    </S.Container>
  );
};

export default Button;
