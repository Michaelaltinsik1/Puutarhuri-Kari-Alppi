'use client';
import Header from '@/components/header';

import 'react-toastify/dist/ReactToastify.css';
import AboutUs from '@/components/aboutus';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import Image from 'next/image';
import { useState } from 'react';
import Prices from '@/components/prices';
import styled from 'styled-components';
import HeroMobile from '../public/HeroPuutarhuri.jpg';
import { ToastContainer } from 'react-toastify';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Title } from '@/styles/styles';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';

import { ButtonType } from '@/components/minorComponents/Button';
import { ButtonLink } from '@/styles/styles';
const ImageStyled = styled(Image)`
  width: 100%;
  height: auto;
`;

const ContainerHero = styled.div`
  position: absolute;
  left: 50%;
  top: 20px;
  transform: translate(-50%, 0);
  background-color: rgb(250, 250, 250, 0.65);
  padding: 16px;
  border-radius: 8px;
  color: ${colors.gray_900};
  min-width: 80%;
  max-width: 450px;
  @media (max-width: 330px) {
    display: none;
  }
  @media (min-width: ${devices.tablet}) {
    min-width: auto;
    top: 10px;
  }
  @media ((min-width: 769px) AND (max-width: 1000px)) {
    min-width: auto;
    padding: 32px;
    top: 75px;
  }
  @media (min-width: ${devices.laptop}) {
    min-width: auto;
    padding: 32px;
    top: 20px;
  }
  @media (min-width: ${devices.desktop}) {
    padding: 40px;
    min-width: auto;
    top: 50px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
`;
const Button = styled(ButtonLink)`
  margin-left: 0px;
  margin-right: 0px;
  &:nth-of-type(1) {
    margin-right: 0px;
  }
  &:nth-of-type(2) {
    margin-left: 0px;
  }
  @media (min-width: ${devices.laptop}) {
    &:nth-of-type(1) {
      margin-bottom: 8px;
    }
  }
`;
export default function Home() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const updateHeaderHeight = (newHeight: number) => {
    setHeaderHeight(newHeight);
  };
  const ContainerStyled1 = styled.div<{ $headerHeight?: number }>`
    position: relative;
    height: 100vh;
  `;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey} language="fi">
      <main className="main">
        <Header updateHeaderHeight={updateHeaderHeight} />

        <div style={{ position: 'relative' }}>
          <picture style={{ display: 'flex' }}>
            <source media="(max-width: 1000px)" srcSet="/HeroPuutarhuri.jpg" />
            <source
              media="(min-width: 1001px)"
              srcSet="/HeroPuutarhurikarialppi.jpg"
            />
            <ImageStyled src={HeroMobile} alt="hero image" />
          </picture>
          <ContainerHero>
            <Title>Parsaa ja pensasmustikkaa Mahnalasta!</Title>
            <ButtonContainer>
              <Button $btnType={ButtonType.outlined} href="#prices">
                Katso tarjonta ja saatavuus
              </Button>
              <Button $btnType={ButtonType.outlined} href="#contact">
                Ota yhteyttä
              </Button>
            </ButtonContainer>
          </ContainerHero>
        </div>

        <AboutUs headerHeight={headerHeight} />
        <Prices headerHeight={headerHeight} />
        {/* <Recipes headerHeight={headerHeight} /> */}
        {/* <OpenHours headerHeight={headerHeight} /> */}
        {/*<Payment headerHeight={headerHeight} />*/}
        <Contact headerHeight={headerHeight} />
        <Footer headerHeight={headerHeight} />
        <ToastContainer />
      </main>
    </GoogleReCaptchaProvider>
  );
}
