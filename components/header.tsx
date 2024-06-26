import { colors } from '@/utils/colors';
import Image from 'next/image';
import { TertiaryHeading } from '@/styles/styles';
import { styled } from 'styled-components';
import { devices } from '@/utils/devices';
import { useState, useRef, useLayoutEffect } from 'react';
import { NavLink } from '@/styles/styles';

interface HeaderProps {
  updateHeaderHeight: (newvalue: number) => void;
}
const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  width: fit-content;
  justify-content: space-between;
`;
const HeaderStyled = styled.header`
  box-sizing: border-box;
  position: sticky;
  top: 0;
  z-index: 1000;
  display: flex;
  background-color: ${colors.green};
  padding: 8px 16px;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${devices.tablet}) {
    justify-content: flex-start;
  }
  @media (min-width: ${devices.desktop}) {
    justify-content: flex-start;
    padding: 0px 32px;
  }
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
  background-color: ${colors.green};
  height: 100vh;
  width: 100%;
  flex-direction: column;
  ${(props) =>
    props?.$isOpen
      ? {
          display: 'flex',
          position: 'absolute',
          top: '0',
          left: '0',
        }
      : { display: 'none' }}

  @media (min-width: ${devices.desktop}) {
    display: flex;
    margin-left: auto;
    flex-direction: row;
    max-width: 70%;
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
    justify-content: end;
    flex-direction: row;
    margin-bottom: 0px;
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
const Header = ({ updateHeaderHeight }: HeaderProps) => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const ref = useRef<HTMLDivElement>(null);
  const closeMenu = () => {
    setIsOpen(false);
  };
  const openMenu = () => {
    setIsOpen(true);
  };
  useLayoutEffect(() => {
    if (ref.current) {
      updateHeaderHeight(ref.current?.clientHeight);
    }
  });
  return (
    <HeaderStyled ref={ref}>
      <NavLink onClick={closeMenu} href="#">
        <LogoContainer>
          <picture>
            <source media="(min-width: 1201px)" srcSet="/Logo.png" />
            <source media="(max-width: 1200px)" srcSet="/LogoMobile.png" />
            <img
              src="/Logo.png"
              alt="Liiketoiminta logo"
              width={80}
              height={80}
            />
          </picture>
          <TertiaryHeading>Puutarhuri Kari Alppi</TertiaryHeading>
        </LogoContainer>
      </NavLink>
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
          {/*<ListItem>
            <NavLink onClick={closeMenu} href="#openHours">
              Öppettider
            </NavLink>
          </ListItem>*/}
          {/*<ListItem>
            <NavLink onClick={closeMenu} href="#payment">
              Beställ
            </NavLink>
          </ListItem>*/}
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
