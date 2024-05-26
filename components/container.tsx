import { ReactNode } from 'react';
import { styled } from 'styled-components';
import Image from 'next/image';
interface ContainerTypes {
  headerHeight: number;
}

const ContainerStyled = styled.div<{ $headerHeight?: number }>`
  position: relative;
  ${(props) =>
    props.$headerHeight && {
      height: `calc(100vh - ${props.$headerHeight}px)`,
    }}//height: 80vh;
`;
const Container = ({ headerHeight }: ContainerTypes) => {
  return (
    <ContainerStyled $headerHeight={headerHeight}>
      <Image
        src="/hero.jpg"
        fill={true}
        alt="Hero image with farm and a lake in the background"
        priority
      />
    </ContainerStyled>
  );
};
export default Container;
