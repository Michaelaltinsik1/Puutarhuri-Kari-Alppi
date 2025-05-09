import Link from 'next/link';
import { colors } from '@/utils/colors';
import { styled } from 'styled-components';
import { devices } from '@/utils/devices';
import { ButtonType } from '@/components/minorComponents/Button';

export const Title = styled.h1`
  color: ${colors.textNew};
  font-size: 24px;
  line-height: 130%;
  font-family: var(--font-roboto);
  margin-bottom: 16px;
  letter-spacing: -1px;
  @media (min-width: ${devices.tablet}) {
    display: block;
    font-size: 32px;
  }
  @media (min-width: ${devices.desktop}) {
    display: block;
    font-size: 32px;
    margin-right: 40px;
  }
`;

export const SecondaryHeading = styled.h2`
  color: ${colors.textNew};
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0px;
  margin-bottom: 20px;

  @media (min-width: ${devices.desktop}) {
    font-size: 48px;
    letter-spacing: -1px;
    margin-bottom: 40px;
  }
  @media (max-width: ${devices.desktopHeaderEdgeCase}) {
    font-size: 40px;
  }
`;

export const TertiaryHeading = styled.h3`
  color: ${colors.textNew};
  font-size: 20px;
  line-height: 140%;
  letter-spacing: 0px;
  @media (min-width: ${devices.tablet}) {
    display: block;
  }
  @media (min-width: ${devices.desktop}) {
    font-size: 40px;
    letter-spacing: -1px;
  }
  @media (max-width: ${devices.desktopHeaderEdgeCase}) {
    font-size: 32px;
  }
`;

export const Subheading = styled.p`
  color: ${colors.textNew};
  font-size: 24px;
  line-height: 140%;
  letter-spacing: 0px;
  margin-bottom: 20px;
  @media (min-width: ${devices.desktop}) {
    font-size: 24px;
    letter-spacing: -1px;
    margin-bottom: 40px;
  }
  @media (max-width: ${devices.desktopHeaderEdgeCase}) {
    font-size: 24px;
  }
`;
export const Body = styled.p`
  color: ${colors.gray_900};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  margin-bottom: 16px;
`;
export const ErrorMessage = styled.p`
  font-size: 16px;
  color: ${colors.error};
  font-size: 14px;
  line-height: 150%;
  letter-spacing: 0px;
  font-weight: bold;
  min-height: 25px;
  margin: 4px 0px;
  display: flex;
  align-items: center;
`;
export const FooterLink = styled(Link)`
  font-size: 24px;
  line-height: 150%;
  width: 100%;
  text-align: center;
  display: inline-block;
  color: ${colors.textNew};
  text-decoration: underline;
  text-underline-offset: 8px;
  &:hover {
    text-decoration: none;
  }
  padding-top: 8px;
  padding-bottom: 8px;
  @media (min-width: ${devices.tablet}) {
    text-align: start;
  }
`;
export const CopyRight = styled.p`
  font-size: 24px;
  line-height: 150%;
  color: ${colors.gray_900};
  text-align: center;
  margin-top: 40px;
`;
export const NavLink = styled(Link)`
  box-sizing: border-box;
  white-space: nowrap;
  color: ${colors.textNew};
  font-size: 28px;
  line-height: 150%;
  letter-spacing: 0px;
  width: 100%;
  display: flex;
  text-align: center;
  text-decoration: none;

  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }

  @media (min-width: ${devices.desktop}) {
    font-size: 24px;
    line-height: 140%;
    letter-spacing: -1px;
    padding: 16px;
    display: inline;
  }
`;

export const SocialsHeading = styled.h2`
  line-height: 140%;
  letter-spacing: -1px;
  font-size: 20px;
  font-weight: bolder;
  margin-bottom: 16px;
  font-family: var(--font-allura);
  color: ${colors.gray_900};
`;
export const ButtonLink = styled(Link)<{ $btnType: ButtonType }>`
  height: 52px;
  font-family: var(--font-allura);
  font-size: 16px;
  font-weight: bold;
  border: 1px solid black;
  text-decoration: none;
  min-width: 100%;
  margin-bottom: 8px;
  @media (min-width: ${devices.desktop}) {
    margin-bottom: 0px;
  }

  &:nth-of-type(1) {
    @media (min-width: ${devices.desktop}) {
      margin-right: 16px;
    }
  }
  &:nth-of-type(2) {
    @media (min-width: ${devices.desktop}) {
      margin-left: 16px;
    }
  }
  @media (min-width: ${devices.desktop}) {
    min-width: 300px;
  }
  ${(props) =>
    props.$btnType === ButtonType.secondary && {
      backgroundColor: colors.buttonGreen,
      color: colors.textNew,
      borderRadius: '12px',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
  ${(props) =>
    props.$btnType === ButtonType.outlined && {
      backgroundColor: colors.buttonOutlined,
      border: '1px solid black',
      color: colors.textNew,
      borderRadius: '12px',
      marginTop: '8px',
      display: 'flex',
      alignItems: 'center',
      justifyContent: 'center',
    }}
    &:hover {
    ${(props) =>
      props.$btnType === ButtonType.secondary && {
        backgroundColor: colors.buttonGreenHover,
      }}
    ${(props) =>
      props.$btnType === ButtonType.outlined && {
        backgroundColor: colors.buttonOutlinedHover,
      }}
  }
  &:active {
    ${(props) =>
      props.$btnType === ButtonType.secondary && {
        backgroundColor: colors.buttonGreenActive,
      }}
    ${(props) =>
      props.$btnType === ButtonType.outlined && {
        backgroundColor: colors.buttonOutlinedActive,
      }}
  }
`;
