import { FirstSectionPropsType } from './types';
import * as S from './styles';
import { useMediaQuery } from '@/hooks';
import Header from '@/components/Header';
import Button from '@/components/Button';

const FirstSection: React.FC<FirstSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const isMobile = useMediaQuery("tablet");

  return (
    <S.Container {...rest}>
      <Header />
      <S.ContainerInfoManga>
        <S.Title>One Piece</S.Title>
        <S.Text>
          One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado, diz que escondeu o seu tesouro em algum lugar da Grand Line, um oceano extremamente perigoso....
        </S.Text>
        <Button title='Mais Informações' />
      </S.ContainerInfoManga>
    </S.Container>
  );
};

export default FirstSection;
