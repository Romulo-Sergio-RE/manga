import { FirstSectionPropsType } from './types';
import * as S from './styles';
import CardPrimary from '@/components/CardPrimary';

const FirstSection: React.FC<FirstSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      fisrt section
    </S.Container>
  );
};

export default FirstSection;
