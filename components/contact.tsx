import { styled } from 'styled-components';
import { colors } from '@/utils/colors';
import InputField from './minorComponents/InputField';
import { devices } from '@/utils/devices';
import TextArea from './minorComponents/textAreaField';
import Button from './minorComponents/Button';
import { ButtonType } from './minorComponents/Button';
import { SecondaryHeading, Subheading } from '@/styles/styles';
import { Body } from '@/styles/styles';
import TextWithIcon from './TextWithIcon';
import { Icons } from './TextWithIcon';
interface ContactProps {
  headerHeight: number;
}
const DivStyled = styled.div<{ $headerHeight?: number }>`
  display: grid;
  /* flex-direction: column; */
  grid-template-areas: 'title' 'contact' 'form';
  background-color: ${colors.khabi};
  scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'};
  padding: 24px 16px;
  @media (min-width: ${devices.tablet}) {
    padding: 24px 40px;
  }
  @media (min-width: ${devices.laptop}) {
    grid-template-columns: 2fr 3fr;
    grid-template-areas: 'title title' 'contact form';
    padding: 40px 80px;
    flex-direction: row;
  }
  @media (min-width: ${devices.desktop}) {
    padding: 64px 180px;
  }
`;
const Container = styled.div`
  grid-area: contact;
  margin-bottom: 24px;
  @media (min-width: ${devices.laptop}) {
    margin-right: 160px;
  }
`;

const Form = styled.form`
  grid-area: form;
  width: 100%;
`;
const SecondaryHeadingGrid = styled(SecondaryHeading)`
  grid-area: title;
`;
const Contact = ({ headerHeight }: ContactProps) => {
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="contact">
      <SecondaryHeadingGrid>Kontakta us</SecondaryHeadingGrid>
      <Container>
        <Subheading>Hör gärna av er om ni har några frågor</Subheading>
        <TextWithIcon icon={Icons.phone} text="072 66 77 789" />
        <TextWithIcon icon={Icons.email} text="test@hotmail.com" />
        <TextWithIcon
          icon={Icons.location}
          text="Vasagatan 2. Stockholm, 12345, Sverige"
        />
      </Container>
      <Form
        action=""
        onSubmit={(event: React.FormEvent<HTMLFormElement>) =>
          event.preventDefault()
        }
      >
        <InputField label="Name" placeholder="Michael Altinisik" />
        <InputField label="Email" placeholder="Mickealt@hotmail.se" />
        <TextArea label="Description" placeholder="Vad har du på hjärtat?" />
        <Button btnType={ButtonType.submit}>Skicka meddelande</Button>
      </Form>
    </DivStyled>
  );
};

export default Contact;
