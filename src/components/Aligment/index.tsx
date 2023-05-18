import React from 'react';
import { AligmentStyled } from './styles';
import { AligmentProps } from './types';

const Aligment: React.FC<AligmentProps> = ({ children, ...props }) => {
  return <AligmentStyled {...props}>{children}</AligmentStyled>;
};

export { Aligment };
