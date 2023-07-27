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
export default function Home() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const updateHeaderHeight = (newHeight: number) => {
    setHeaderHeight(newHeight);
  };

  return (
    <main className="main">
      <Header updateHeaderHeight={updateHeaderHeight} />
      <Container headerHeight={headerHeight}>
        <Image
          src="/hero.jpg"
          fill={true}
          alt="Hero image with farm and a lake in the background with blue berries and asparagus"
          priority
        />
      </Container>
      <AboutUs headerHeight={headerHeight} />
      <Prices />
      <OpenHours />
      <Payment />
      <Contact />
      <Footer />

      {/* <Hero /> */}
      {/* </Container> */}
    </main>
  );
}
