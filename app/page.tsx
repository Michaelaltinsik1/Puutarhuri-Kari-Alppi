'use client';
import Header from '@/components/header';

import 'react-toastify/dist/ReactToastify.css';
import AboutUs from '@/components/aboutus';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import { useState } from 'react';
import Prices from '@/components/prices';
import styled from 'styled-components';
import { ToastContainer } from 'react-toastify';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { colors } from '@/utils/colors';
import { devices } from '@/utils/devices';
import Reko from '@/components/Reko';
import { libre_baskerville } from '../app/fonts';

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
  max-width: 400px;
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

const Container = styled.div`
  max-width: 1920px;
`;

const MainContainer = styled.main`
  background-color: ${colors.gray_50};
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export default function Home() {
  const [headerHeight, setHeaderHeight] = useState(0);
  // const updateHeaderHeight = (newHeight: number) => {
  //   setHeaderHeight(newHeight);
  // };
  // const ContainerStyled1 = styled.div<{ $headerHeight?: number }>`
  //   position: relative;
  //   height: 100vh;
  // `;
  const siteKey = process.env.NEXT_PUBLIC_RECAPTCHA_SITE_KEY || '';

  return (
    <GoogleReCaptchaProvider reCaptchaKey={siteKey} language="fi">
      <MainContainer className={libre_baskerville.className}>
        <Container>
          <Header />
          <AboutUs headerHeight={headerHeight} />
          <Prices headerHeight={headerHeight} />
          <Reko headerHeight={headerHeight} />
          <Contact headerHeight={headerHeight} />
          <Footer headerHeight={headerHeight} />
          <ToastContainer />
        </Container>
      </MainContainer>
    </GoogleReCaptchaProvider>
  );
}
