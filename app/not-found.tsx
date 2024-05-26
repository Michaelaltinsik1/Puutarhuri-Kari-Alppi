'use client';
import Header from '@/components/header';
import { useState } from 'react';
import { Title, Body } from '@/styles/styles';
import { ButtonLink } from '@/styles/styles';
import { ButtonType } from '@/components/minorComponents/Button';
import { devices } from '@/utils/devices';
import styled from 'styled-components';

const Container = styled.div`
  max-width: 500px;
`;
const Wrapper = styled.div`
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  align-items: center;
  @media (min-width: ${devices.laptop}) {
    margin-top: 64px;
  }
`;
const Div = styled.div`
  min-height: 100vh;
`;
export default function NotFound() {
  const [headerHeight, setHeaderHeight] = useState(0);
  const updateHeaderHeight = (newHeight: number) => {
    setHeaderHeight(newHeight);
  };
  return (
    <Div>
      <Wrapper>
        <Container>
          <Title>Ei löydetty</Title>
          <Body>Etsimääsi sivua ei ole olemassa tai se on siirretty.</Body>
          <ButtonLink $btnType={ButtonType.outlined} href="/">
            Kotisivulle
          </ButtonLink>
        </Container>
      </Wrapper>
    </Div>
  );
}
