import { FirstSectionPropsType } from './types';
import * as S from './styles';
import { useMediaQuery } from '@/hooks';
import Header from '@/components/Header';
import Button from '@/components/Button';
import { useApiManga } from '@/context/apiMangaContext';

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
  const ArrayNameManga = [
    ["One Piece", <S.ImgOnePiece />, <S.ImgOnePieceWeb />],
    ["Bungou Stray Dogs", <S.ImgBungou />, <S.ImgBungouWeb />],
    ["Haikyuu!!", <S.ImgHaikyuu />, <S.ImgHaikyuuWeb />],
    ["Kimetsu no Yaiba", <S.ImgKimestu />, <S.ImgKimestuWeb />],
  ];

  const nameManga = api.randomManga.map((a) => a.attributes.canonicalTitle)
  const imageCoverManga = api.randomManga.map((a) => a.attributes.coverImage.original)

  const getImageManga = () => {
    let arrayTeste = []
    if (nameManga !== undefined) {
      for (let i = 0; i < ArrayNameManga.length; i++) {
        if (ArrayNameManga[i][0] === nameManga[0]) {
          arrayTeste.push(ArrayNameManga[i])
          break;
        }
      }
    }
    return (
      <>
        {isMobile ? arrayTeste[0]?.[1] : arrayTeste[0]?.[2]}
      </>
    )
  }
  return (
    <S.Container {...rest}>
      <Header />
      <S.ContainerInfo>
        <S.ImgBack coverimg={imageCoverManga[0]} />
        {getImageManga()}
        <S.ContainerManga>
          {api.randomManga.map((manga) => {
            return (
              <S.ContainerInfoManga key={manga.id}>
                <S.Title>{manga.attributes.canonicalTitle}</S.Title>
                <S.Text>
                  {truncate(manga.attributes.description, 100)}
                </S.Text>
              </S.ContainerInfoManga>
            )
          })}
          <Button title='More Information' />
        </S.ContainerManga>
      </S.ContainerInfo>
    </S.Container >
  );
};

export default FirstSection;