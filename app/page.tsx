'use client';
import styled from 'styled-components';

const TextStyled = styled.h2`
  font-size: 50px;
  color: red;
`;

export default function Home() {
  return (
    <main>
      <TextStyled>Styled component heading</TextStyled>
      <h2>Normal heading</h2>
    </main>
  );
}
