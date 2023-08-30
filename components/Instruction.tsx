import { styled } from 'styled-components';

interface Instruction {
  instruction: string;
  index: number;
}
const InstructionStyled = styled.p`
  font-size: 20px;
  line-height: 140%;
`;
const IndexStyled = styled.p`
  margin-right: 8px;
  font-size: 20px;
  line-height: 150%;
  font-weight: bold;
  height: 100%;
`;
const Container = styled.div`
  display: flex;
  margin-bottom: 24px;
  &:last-of-type {
    margin-bottom: 0px;
  }
`;
const Instruction = ({ instruction, index }: Instruction) => {
  return (
    <Container>
      <IndexStyled>{index}. </IndexStyled>
      <InstructionStyled>{instruction}</InstructionStyled>
    </Container>
  );
};
export default Instruction;
