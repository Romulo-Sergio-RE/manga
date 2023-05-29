import { FirstSectionPropsType } from './types';
import * as S from './styles';
import { useMediaQuery } from '@/hooks';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { useApiManga } from '@/context/apiMangaContext';
import Image from 'next/image';

const FirstSection: React.FC<FirstSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const isMobile = useMediaQuery("tablet");
  const api = useApiManga();

  function truncate(str: string, n: number) {
    return str.length > n ? str.substring(0, n - 1) + "..." : str;
  }
  return (
    <S.Container {...rest}>
      <Header />
      <S.ContainerInfo>
        <S.ImgBack />
        {isMobile ? <S.ImgOnePiece /> : <S.ImgOnePieceWeb />}
        <S.ContainerManga>
          <S.ContainerInfoManga>
            <S.Title>One Piece</S.Title>
            <S.Text>
              {truncate("One Piece começa quando Gol D. Roger, o Rei Dos Piratas que possuiu tudo nesse mundo, antes de ser executado, diz que escondeu o seu tesouro em algum lugar da Grand Line, um oceano extremamente perigoso....", 100)}
            </S.Text>
          </S.ContainerInfoManga>
          <Button title='Mais Informacoes' />
        </S.ContainerManga>
      </S.ContainerInfo>
    </S.Container >
  );
};

export default FirstSection;
/*
     {api.allMangas.map((a) => {
          return (
            <S.ContainerInfoManga>
              <S.Title>{a.attributes.canonicalTitle}</S.Title>
              <S.Text>
                {truncate(a.attributes.description, 100)}
              </S.Text>
              <div>
                {a.attributes.coverImage.original}
              </div>
            </S.ContainerInfoManga>
          )
        })}
*/