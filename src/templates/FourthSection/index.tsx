import { FourthSectionPropsType } from './types';
import * as S from './styles';

const FourthSection: React.FC<FourthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      teste
    </S.Container>
  );
};

export default FourthSection;
