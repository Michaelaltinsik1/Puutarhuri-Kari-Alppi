import { colors } from '@/utils/colors';
import Image from 'next/image';
import { Title } from '@/styles/styles';
import { styled } from 'styled-components';
import { devices } from '@/utils/devices';
import { useState } from 'react';
import { NavLink } from '@/styles/styles';
const HeaderStyled = styled.header`
  display: flex;
  background-color: ${colors.green};
  padding: 20px 16px;
  align-items: center;
  justify-content: space-between;
  @media (min-width: ${devices.tablet}) {
    justify-content: flex-start;
  }
  @media (min-width: ${devices.desktop}) {
    justify-content: flex-start;
    padding: 24px 48px;
  }
`;

const MenuToggleButton = styled(Image)<{ isLeftAligned?: boolean }>`
  display: flex;
  ${(props) =>
    props.isLeftAligned && {
      padding: '20px 16px',
      alignSelf: 'end',
      marginBottom: '20px',
    }}
  @media (min-width: ${devices.laptop}) {
    ${(props) =>
      props.isLeftAligned && {
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

const Nav = styled.nav<{ isOpen?: boolean }>`
  background-color: ${colors.green};
  height: 100vh;
  width: 100vw;
  flex-direction: column;
  ${(props) =>
    props.isOpen
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
const NavContainer = styled.ul<{ isOpen?: boolean }>`
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
  width: 100%;
  @media (min-width: ${devices.desktop}) {
    width: auto;
  }
`;
const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const closeMenu = () => {
    setIsOpen(false);
  };
  const openMenu = () => {
    setIsOpen(true);
  };
  return (
    <HeaderStyled>
      <picture>
        <source media="(min-width: 1201px)" srcSet="/Logo.png" />
        <source media="(max-width: 1200px)" srcSet="/LogoMobile.png" />
        <img src="/Logo.png" alt="Liiketoiminta logo" />
      </picture>
      <Title>Puutarhuri Kari Alppi</Title>
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
      <Nav isOpen={isOpen}>
        <MenuToggleButton
          isLeftAligned={true}
          onClick={closeMenu}
          src="/Close.svg"
          alt="Close menu icon"
          width={80}
          height={80}
        />
        <NavContainer isOpen={isOpen}>
          <ListItem>
            <NavLink href="#">Hem</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#">Om oss</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#">Vårt utbud</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#">Öppettider</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#">Beställ</NavLink>
          </ListItem>
          <ListItem>
            <NavLink href="#">Kontakt</NavLink>
          </ListItem>
        </NavContainer>
      </Nav>
    </HeaderStyled>
  );
};
export default Header;
