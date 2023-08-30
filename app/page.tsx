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
import HeroMobile from '../public/HeroMobile.jpg';
import { ToastContainer } from 'react-toastify';
import { GoogleReCaptchaProvider } from 'react-google-recaptcha-v3';
import { Title } from '@/styles/styles';

const ImageStyled = styled(Image)`
  width: 100%;
  height: auto;
`;

const ContainerHero = styled.div`
  position: absolute;
  top: 100px;
  left: 50%;
  transform: translate(-50%, 0);
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
        {/* <Image
        src={Hero}
        style={{ width: '100%', height: 'auto' }}
        alt="Hero image with farm and a lake in the background with blue berries and asparagus"
      /> */}
        {/* <ContainerStyled1 $headerHeight={headerHeight}> */}
        <div style={{ position: 'relative' }}>
          <picture style={{ display: 'flex' }}>
            <source media="(max-width: 767px)" srcSet="/HeroMobile.jpg" />
            <source media="(min-width: 768px)" srcSet="/HeroDesktop.jpg" />
            <ImageStyled src={HeroMobile} alt="hero image" />
          </picture>
          <ContainerHero>
            <Title>Puutarhuri Mahnalassa</Title>
            <div>
              <button>test</button>
              <button>test</button>
            </div>
          </ContainerHero>
        </div>
        {/* <Image
            src="/hero.jpg"
            fill={true}
            alt="Hero image with farm and a lake in the background with blue berries and asparagus"
            priority
          /> */}
        {/* </ContainerStyled1> */}
        {/* <Container headerHeight={headerHeight} /> */}
        <AboutUs headerHeight={headerHeight} />
        <Prices headerHeight={headerHeight} />
        <Recipes headerHeight={headerHeight} />
        <OpenHours headerHeight={headerHeight} />
        <Payment headerHeight={headerHeight} />
        <Contact headerHeight={headerHeight} />
        <Footer headerHeight={headerHeight} />
        <ToastContainer />
      </main>
    </GoogleReCaptchaProvider>
  );
}
