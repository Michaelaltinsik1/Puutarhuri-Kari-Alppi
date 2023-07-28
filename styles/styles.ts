import Link from 'next/link';
import { colors } from '@/utils/colors';
import { styled } from 'styled-components';
import { devices } from '@/utils/devices';

export const Title = styled.h1`
  display: none;
  color: ${colors.gray_900};
  font-size: 64px;
  line-height: 130%;
  letter-spacing: -1px;
  @media (min-width: ${devices.tablet}) {
    display: block;
  }
  @media (min-width: ${devices.desktop}) {
    display: block;
    margin-right: 40px;
  }
  margin: auto 0px;
`;

export const SecondaryHeading = styled.h2`
  color: ${colors.gray_900};
  font-size: 32px;
  line-height: 140%;
  letter-spacing: 0px;
  margin-bottom: 20px;
  @media (min-width: ${devices.desktop}) {
    font-size: 48px;
    letter-spacing: -1px;
    margin-bottom: 40px;
  }
`;
export const Body = styled.p`
  color: ${colors.gray_900};
  font-size: 16px;
  line-height: 150%;
  letter-spacing: 0px;
  margin-bottom: 16px;
`;
export const NavLink = styled(Link)`
  box-sizing: border-box;
  white-space: nowrap;
  color: ${colors.gray_900};
  font-size: 40px;
  line-height: 150%;
  letter-spacing: 0px;
  padding: 24px 16px;
  width: 100%;
  text-align: center;
  text-decoration: none;
  display: inline-block;
  &:hover {
    text-decoration: underline;
    text-underline-offset: 8px;
  }
  @media (min-width: ${devices.desktop}) {
    font-size: 40px;
    line-height: 140%;
    letter-spacing: -1px;
    padding: 32px 24px;
    display: inline;
  }
`;
