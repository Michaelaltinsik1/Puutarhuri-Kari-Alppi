import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import { CopyRight, SecondaryHeading } from '@/styles/styles';

import { FooterLink } from '@/styles/styles';
import Image from 'next/image';
import { devices } from '@/utils/devices';
import mapMobile from '../public/MapMobile.jpg';
import { Subheading } from '@/styles/styles';

interface FooterProps {
  headerHeight: number;
}

const NavStyled = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
`;
const DivStyled = styled.div<{ $headerHeight?: number }>`
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray_50};
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  padding: 24px 16px;
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
`;
const Container = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${devices.laptop}) {
    align-items: center;
    justify-content: center;
    min-width: 75%;
  }
`;
const FooterHeading = styled(Subheading)`
  margin-bottom: 0px;
  text-align: left;
  @media (min-width: ${devices.laptop}) {
    min-width: 585px;
    margin-bottom: 16px;
  }
  @media (min-width: ${devices.desktop}) {
    margin-bottom: 16px;
    min-width: 700px;
  }
`;
const NavContainer = styled.nav`
  display: flex;
  flex-direction: column;
  @media (min-width: ${devices.laptop}) {
    justify-content: center;
    flex-direction: row;
    min-width: 75%;
  }
`;
const ImageStyled = styled(Image)`
  width: 100%;
  height: auto;
  margin: 24px 0px;
  border: 1px solid black;
  border-radius: 12px;
  &:hover {
    filter: brightness(90%);
  }
  @media (min-width: ${devices.tablet}) {
    width: 100%;
    margin: 24px auto;
  }
  @media (min-width: ${devices.laptop}) {
    max-width: 45vh;
    width: auto;
    //width: 100%;
    margin: 0px 60px;
  }

  @media (min-width: ${devices.desktop}) {
    width: auto;
    min-width: 500px;
    margin: 0px 120px;
  }

  @media (min-width: ${devices.desktop}) and (max-width: 1550px) {
    width: auto;
    margin: 0px 80px;
  }
`;

const Footer = ({ headerHeight }: FooterProps) => {
  const destinationLat = 61.574391246702795;
  const destinationLng = 23.286892840078547;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="footer">
      <Container>
        <FooterHeading>Katso tästa ajo-ohjeet.</FooterHeading>
        <NavContainer>
          <a href={googleMapsUrl} target="_blank">
            <picture style={{ display: 'flex' }}>
              <source media="(max-width: 767px)" srcSet="/MapMobile.jpg" />
              <source media="(min-width: 768px)" srcSet="/MapDesktop.jpg" />
              <ImageStyled src={mapMobile} alt="Map to location" />
            </picture>
          </a>

          <NavStyled>
            <FooterLink href="#aboutUs">Yrityksestä</FooterLink>
            <FooterLink href="#prices">Tuotteet ja hinnasto</FooterLink>
          </NavStyled>
        </NavContainer>
      </Container>
      <CopyRight>
        &copy; Puutarhuri Kari Alppi. Kaikki oikeudet pidätetään.
      </CopyRight>
    </DivStyled>
  );
};

export default Footer;
