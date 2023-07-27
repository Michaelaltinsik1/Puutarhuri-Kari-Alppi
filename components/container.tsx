import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ContainerTypes {
  children: ReactNode;
}

const ContainerStyled = styled.div`
  height: 80vh;
  position: relative;
`;
const Container = ({ children }: ContainerTypes) => {
  return <ContainerStyled>{children}</ContainerStyled>;
};
export default Container;
