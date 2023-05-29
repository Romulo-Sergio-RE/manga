import { FirstSectionPropsType } from './types';
import * as S from './styles';
import CardPrimary from '@/components/CardPrimary';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import { useState } from 'react';
import { useMediaQuery } from '@/hooks';


const FirstSection: React.FC<FirstSectionPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const [Nav, setNav] = useState(true);
  const isMobile = useMediaQuery("tablet")
  return (
    <S.ContainerInternal>
      <div className={Nav ? "nav__menuOpen" : "nav__Down"}>
        <S.Teste>
          MANGA
        </S.Teste>
        <div>
          <AiOutlineClose
            className={"icone__close"}
            onClick={() => setNav(!Nav)}
          />
          <AiOutlineMenu
            className={"icone__menu"}
            onClick={() => setNav(!Nav)}
          />
        </div>
        <div className='link'>
          Gênero
        </div>
        <div className='link'>
          Lançamento Semanal
        </div>
        <div className='link'>
          Contato
        </div>
      </div>
    </S.ContainerInternal>
  );
};

export default FirstSection;
