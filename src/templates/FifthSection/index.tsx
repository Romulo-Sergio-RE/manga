import { FifthSectionPropsType } from './types';
import * as S from './styles';
import CardThrid from '@/components/CardThrid';
import { useApiManga } from '@/context/apiMangaContext';

const FifthSection: React.FC<FifthSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const api = useApiManga()

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
