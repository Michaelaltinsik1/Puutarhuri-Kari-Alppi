import { ReactNode } from 'react';
import { styled } from 'styled-components';

const HeroImage = styled.div`
  height: 100%;

  background-image: url('/hero.jpg');
  background-repeat: inherit;
  background-size: contain;
`;
const Hero = () => {
  return <HeroImage />;
};
export default Hero;
