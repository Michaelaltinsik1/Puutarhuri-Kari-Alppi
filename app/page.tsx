'use client';
import Header from '@/components/header';
import Container from '@/components/container';

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
import Hero from '../public/hero.jpg';
export default function Home() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const updateHeaderHeight = (newHeight: number) => {
    setHeaderHeight(newHeight);
  };
  const ContainerStyled1 = styled.div<{ $headerHeight?: number }>`
    position: relative;

    height: 100vh;
  `;
  return (
    <main className="main">
      <Header updateHeaderHeight={updateHeaderHeight} />
      {/* <Image
        src={Hero}
        style={{ width: '100%', height: 'auto' }}
        alt="Hero image with farm and a lake in the background with blue berries and asparagus"
      /> */}
      <ContainerStyled1 $headerHeight={headerHeight}>
        <Image
          src="/hero.jpg"
          fill={true}
          alt="Hero image with farm and a lake in the background with blue berries and asparagus"
          priority
        />
      </ContainerStyled1>
      {/* <Container headerHeight={headerHeight} /> */}
      <AboutUs headerHeight={headerHeight} />
      <Prices headerHeight={headerHeight} />
      <Recipes headerHeight={headerHeight} />
      <OpenHours headerHeight={headerHeight} />
      <Payment headerHeight={headerHeight} />
      <Contact headerHeight={headerHeight} />
      <Footer headerHeight={headerHeight} />
    </main>
  );
}
