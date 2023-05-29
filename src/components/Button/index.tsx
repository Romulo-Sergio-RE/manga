import { ButtonPropsType } from './types';
import * as S from './styles';

const Button: React.FC<ButtonPropsType> = ({
  children,
  innerRef,
  title,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      {title}
    </S.Container>
  );
};

export default Button;
