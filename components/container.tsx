import { ReactNode } from 'react';
import { styled } from 'styled-components';

interface ContainerTypes {
  children: ReactNode;
  headerHeight: number;
}

const ContainerStyled = styled.div<{ $headerHeight?: number }>`
  position: relative;
  ${(props) =>
    props.$headerHeight && {
      height: `calc(100vh - ${props.$headerHeight}px)`,
    }}//height: calc(100% - $headerHeight);
`;
const Container = ({ children, headerHeight }: ContainerTypes) => {
  return (
    <ContainerStyled $headerHeight={headerHeight}>{children}</ContainerStyled>
  );
};
export default Container;
