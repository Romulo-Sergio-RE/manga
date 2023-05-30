import { HeaderPropsType } from './types';
import * as S from './styles';
import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from 'next/link';

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
        <Link href={"/"} className='link'>Genres</Link>
        <Link href={"/"} className='link'>Weekly Release</Link>
        <Link href={"/"} className='link'>Contact</Link>
      </div>
    </S.ContainerInternal>
  );
};

export default Header;
