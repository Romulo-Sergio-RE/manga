import { FifthSectionPropsType } from './types';
import * as S from './styles';
import CardThrid from '@/components/CardThrid';

const FifthSection: React.FC<FifthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  return (
    <S.Container {...rest}>
      fifth section
      <CardThrid
        imgManga={<S.ImgJujutsuKaisenMobile />}
        nameManga='Black Clover'
      />
    </S.Container>
  );
};

export default FifthSection;
