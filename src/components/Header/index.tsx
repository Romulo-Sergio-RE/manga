import { HeaderPropsType } from './types';
import * as S from './styles';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';

const Header: React.FC<HeaderPropsType> = ({
  children,
  innerRef,
  ...rest
}) => {
  const [Nav, setNav] = useState(true);
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

export default Header;
