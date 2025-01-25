import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';
import Card from './Card';
import yrityksestä from '../public/Yrityksestä.jpg';
interface AboutUsProps {
  headerHeight: number;
}
const Wrapper = styled.div<{ $headerHeight?: number }>`
  background-color: ${colors.gray_50};
  padding: 24px 16px;
  /* scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'}; */
  @media (min-width: ${devices.tablet}) {
    padding: 24px 40px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 40px 80px;
  }
  @media (min-width: ${devices.desktop}) {
    align-items: center;
    padding: 64px 180px;
  }

  & > div:first-of-type {
    margin-top: 0px;
  }
`;

const AboutUs = ({ headerHeight }: AboutUsProps) => {
  return (
    <Wrapper $headerHeight={headerHeight - 1} id="aboutUs">
      <Card
        staticImage={yrityksestä}
        alt="Yrityksestä"
        shouldCenterMainCardInfo={true}
        body={[
          'Viljelen parsaa ja pensasmustikkaa Mahnalassa Maisematien varrella.',
          'Tuotteita on saatavilla sekä suoramyyntinä että tilauksesta',
        ]}
      />
    </Wrapper>
  );
};

export default AboutUs;
