import { colors } from '@/utils/colors';
import Image from 'next/image';
import { TertiaryHeading, Subheading } from '@/styles/styles';
import { styled } from 'styled-components';
import { devices } from '@/utils/devices';
import { useState, useRef, useLayoutEffect } from 'react';
import { NavLink } from '@/styles/styles';
import HeroMobile from '../public/HeroPuutarhuriMobile.jpg';
import HeroDesktop from '../public/HeroPuutarhuriDesktop.jpg';
import { allura } from '../app/fonts';

// interface HeaderProps {
//   updateHeaderHeight: (newvalue: number) => void;
// }

const HeaderStyled = styled.header`
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  background-color: ${colors.gray_50};
  padding: 24px 16px;
  padding-bottom: 0px;
  @media (min-width: ${devices.tablet}) {
    padding: 24px 40px;
    padding-bottom: 0px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 40px 80px;
    padding-bottom: 0px;
  }
  @media (min-width: ${devices.desktop}) {
    align-items: center;
    padding: 64px 180px;
    padding-bottom: 0px;
  }
`;
const HeaderContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  min-width: 100%;
`;

const MenuToggleButton = styled(Image)<{ $isLeftAligned?: boolean }>`
  display: flex;
  margin-left: auto;
  ${(props) =>
    props.$isLeftAligned && {
      padding: '20px 16px',
      alignSelf: 'end',
      marginBottom: '20px',
    }}
  @media (min-width: ${devices.laptop}) {
    ${(props) =>
      props.$isLeftAligned && {
        padding: '56px 16px',
        marginBottom: '32px',
      }}
  }
  @media (min-width: ${devices.tablet}) {
    margin-left: auto;
  }
  @media (min-width: ${devices.desktop}) {
    display: none;
  }
`;

const Nav = styled.nav<{ $isOpen?: boolean }>`
  background-color: ${colors.gray_50};
  height: 100vh;
  width: 100%;
  flex-direction: column;
  ${(props) =>
    props?.$isOpen
      ? {
          display: 'flex',
          position: 'fixed',
          top: '0',
          left: '0',
          zIndex: '9999',
        }
      : { display: 'none' }}

  @media (min-width: ${devices.desktop}) {
    margin: 0 64px;
    display: flex;
    margin-left: auto;
    flex-direction: row;
    position: unset;
    height: fit-content;
  }
`;
const NavContainer = styled.ul`
  width: 100%;
  display: flex;
  flex-direction: column;
  margin-bottom: 16px;
  @media (min-width: ${devices.desktop}) {
    justify-content: space-between;
    flex-direction: row;
    margin-bottom: 0px;
  }
`;
const ImgContainer = styled.div`
  min-width: 100%;
  position: relative;
  margin-top: 20px;
  @media (min-width: ${devices.desktop}) {
    margin-top: 40px;
  }
`;
const ListItem = styled.li`
  box-sizing: border-box;
  max-width: 100%;
  padding: 12px 16px;
  @media (min-width: ${devices.desktop}) {
    width: auto;
  }
`;

const SubHeadingHeader = styled(Subheading)`
  text-align: center;
  position: absolute;
  left: 0;
  text-align: center;
  top: 10%;
  color: ${colors.gray_50};
  width: 100%;
  @media (min-width: ${devices.desktop}) {
    font-size: 32px;
  }
  @media (min-width: ${devices.tablet}) {
    top: 15%;
  }
`;
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const openMenu = () => {
    setIsOpen(true);
  };
  // useLayoutEffect(() => {
  //   if (ref.current) {
  //     updateHeaderHeight(ref.current?.clientHeight);
  //   }
  // });
  return (
    <HeaderStyled ref={ref}>
      <HeaderContainer>
        <TertiaryHeading>Puutarhuri Kari Alppi</TertiaryHeading>
        {isOpen ? (
          <MenuToggleButton
            onClick={closeMenu}
            src="/Close.svg"
            alt="Close menu icon"
            width={80}
            height={80}
          />
        ) : (
          <MenuToggleButton
            onClick={openMenu}
            src="/Menu.svg"
            alt="Open menu icon"
            width={80}
            height={80}
          />
        )}
      </HeaderContainer>
      <ImgContainer>
        <SubHeadingHeader className={allura.className}>
          Parsaa ja pensasmustikkaa Hämeenkyrön Mahnalasta
        </SubHeadingHeader>
        <picture>
          <source media="(min-width: 769px)" srcSet={HeroDesktop.src} />
          <Image
            style={{ borderRadius: '5px' }}
            src={HeroMobile}
            alt="Responsive Image"
            layout="responsive"
          />
        </picture>
      </ImgContainer>
      <Nav $isOpen={isOpen}>
        <MenuToggleButton
          $isLeftAligned={true}
          onClick={closeMenu}
          src="/Close.svg"
          alt="Close menu icon"
          width={80}
          height={80}
        />
        <NavContainer>
          <ListItem>
            <NavLink onClick={closeMenu} href="#aboutUs">
              Yrityksestä
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={closeMenu} href="#prices">
              Tuotteet ja hinnasto
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={closeMenu} href="#reko">
              REKO
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink
              style={{ pointerEvents: 'none', opacity: '0.5' }}
              onClick={closeMenu}
              href="#"
            >
              Kuvagalleria
            </NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={closeMenu} href="#contact">
              Yhteystiedot
            </NavLink>
          </ListItem>
        </NavContainer>
      </Nav>
    </HeaderStyled>
  );
};
export default Header;
