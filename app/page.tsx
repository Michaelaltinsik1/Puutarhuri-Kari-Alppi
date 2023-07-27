'use client';
import Header from '@/components/header';
import Container from '@/components/container';
import Hero from '@/components/hero';
import AboutUs from '@/components/aboutus';
import Contact from '@/components/contact';
import Footer from '@/components/footer';
import OpenHours from '@/components/openhours';
import Payment from '@/components/payment';
import Image from 'next/image';
export default function Home() {
  return (
    <main className="main">
      <Header />
      <Container>
        <Image
          src="/hero.jpg"
          fill={true}
          alt="Hero image with farm and a lake in the background with blue berries and asparagus"
          priority
        />
      </Container>
      <AboutUs />
      <OpenHours />
      <Payment />
      <Contact />
      <Footer />
      {/* <Hero /> */}
      {/* </Container> */}
    </main>
  );
}
