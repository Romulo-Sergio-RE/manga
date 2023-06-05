import { LoadingPropsType } from './types';
import * as S from './styles';

const Loading: React.FC<LoadingPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest} ref={innerRef}>
      Loading...
    </S.Container>
  );
};

export default Loading;
