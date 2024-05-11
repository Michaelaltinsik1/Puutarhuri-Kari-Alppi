'use client';
import Header from '@/components/header';

import 'react-toastify/dist/ReactToastify.css';
import AboutUs from '@/components/aboutus';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import OpenHours from '@/components/openhours';
import Payment from '@/components/payment';
import Image from 'next/image';
import { useState } from 'react';
import Prices from '@/components/prices';
import styled from 'styled-components';
import Recipes from '@/components/recipes';
import HeroMobile from '../public/HeroPuutarhuri.png';
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
  top: 100px;
  transform: translate(-50%, 0);
  background-color: rgb(250, 250, 250, 0.65);
  padding: 16px;
  border-radius: 8px;
  color: ${colors.gray_900};
  @media (min-width: ${devices.tablet}) {
    top: 16px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 32px;
    top: 50px;
  }
  @media (min-width: ${devices.desktop}) {
    padding: 40px;
    top: 100px;
  }
`;
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: column;
  @media (min-width: ${devices.desktop}) {
    flex-direction: row;
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
            <source media="(max-width: 767px)" srcSet="/HeroPuutarhuri.png" />
            <source
              media="(min-width: 768px)"
              srcSet="/HeroPuutarhurikarialppi.png"
            />
            <ImageStyled src={HeroMobile} alt="hero image" />
          </picture>
          <ContainerHero>
            <Title>Parsaa ja pensasmustikkaa Mahnalasta!</Title>
            <ButtonContainer>
              <ButtonLink $btnType={ButtonType.outlined} href="#prices">
                Katso tarjonta ja saatavuus
              </ButtonLink>
              <ButtonLink $btnType={ButtonType.outlined} href="#contact">
                Ota yhteyttä
              </ButtonLink>
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
