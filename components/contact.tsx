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
import { sendEmail } from './minorComponents/email';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Loader from './minorComponents/Loader';
import { toast } from 'react-toastify';
import { useGoogleReCaptcha } from 'react-google-recaptcha-v3';
import { verifyCaptchaAction } from './minorComponents/captcha';

interface ContactProps {
  headerHeight: number;
}

interface FormFields {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('Nimi on pakollinen.'),
  email: yup
    .string()
    .email('Virheellinen sähköpostiosoite.')
    .required('Sähköpostiosoite on pakollinen.'),
  message: yup.string().required('Kirjoita viestisi.'),
});
const defaultValues = {
  name: '',
  email: '',
  message: '',
};

const DivStyled = styled.div<{ $headerHeight?: number }>`
  /* scroll-margin-top: ${(props) =>
    props.$headerHeight ? `${props.$headerHeight}px` : '0px'}; */
  background-color: ${colors.gray_50};
  padding: 24px 16px;
  @media (min-width: ${devices.tablet}) {
    padding: 24px 40px;
  }
  @media (min-width: ${devices.laptop}) {
    padding: 40px 80px;
  }
  @media (min-width: ${devices.desktop}) {
    padding: 64px 180px;
  }
`;
const Container = styled.div`
  margin-bottom: 24px;
  background-color: ${colors.gray_50};
  padding: 24px 16px;
  border-radius: 5px;
  @media (min-width: ${devices.laptop}) {
    padding: 24px 32px;
    margin-right: 160px;
  }
`;

const Wrapper = styled.div`
  background-color: ${colors.blueBGNew};
  display: grid;
  grid-template-areas: 'contact' 'form';
  padding: 24px 16px;
  border-radius: 5px;
  @media (min-width: ${devices.laptop}) {
    padding: 48px 40px;
    grid-template-columns: 4fr 4fr;
    grid-template-areas: 'contact form';
  }
`;

const ContactInfoContainer = styled.div`
  margin-top: 24px;
  @media (min-width: ${devices.laptop}) {
    margin-top: 40px;
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
  const { executeRecaptcha } = useGoogleReCaptcha();
  const destinationLat = 61.574391246702795;
  const destinationLng = 23.286892840078547;
  const googleMapsUrl = `https://www.google.com/maps/dir/?api=1&destination=${destinationLat},${destinationLng}`;
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors, isSubmitting },
  } = useForm<FormFields>({
    defaultValues,
    mode: 'onSubmit',

    resolver: yupResolver(schema),
  });

  const onSubmit = handleSubmit(async (data) => {
    if (!executeRecaptcha) {
      console.log('Execute recaptcha not yet available ');
      return;
    }
    const token = await executeRecaptcha('onSubmit');

    const verified = await verifyCaptchaAction(token);

    if (verified) {
      const response: { isError: boolean; message: string } = await sendEmail({
        name: data.name,
        email: data.email,
        message: data.message,
      });
      if (response.isError) {
        toast.error(
          'Jotain meni pieleen. Ota yhteyttä sähköpostitse kari.alppi@gmail.com tai soita 040 77 06 163.',
          {
            autoClose: false,
            type: 'error',
            position: 'bottom-right',
            closeOnClick: true,
          }
        );
      } else {
        toast.success('Viestisi on lähetetty. Otamme pian yhteyttä.', {
          autoClose: 3000,
          type: 'success',
          position: 'bottom-right',
          closeOnClick: true,
        });
      }
      reset();
    }
  });

  const submitEnquiryForm = (
    gReCaptchaToken: string,
    name: string,
    email: string,
    message: string
  ) => {
    fetch('/api/recaptcha', {
      method: 'POST',
      headers: {
        Accept: 'application/json, text/plain, */*',
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        name: name,
        email: email,
        message: message,
        gRecaptchaToken: gReCaptchaToken,
      }),
    })
      .then((res) => res.json())
      .then((res) => {
        if (res?.status === 'success') {
          //setNotification(res?.message);
        } else {
          //setNotification(res?.message);
        }
      });
  };
  return (
    <DivStyled $headerHeight={headerHeight - 1} id="contact">
      <SecondaryHeadingGrid>Yhteystiedot</SecondaryHeadingGrid>
      <Wrapper>
        <Container>
          <Body>
            Ottamalla yhteyttä varmistat saatavuuden. Voit kysyä saatavuutta ja
            tehdä tilauksen vieressä olevan lomakkeen kautta.
          </Body>
          <Body>
            Avoinna sopimuksen mukaan.<br></br>Soitot klo 08 - 18.
          </Body>
          <ContactInfoContainer>
            <TextWithIcon icon={Icons.phone} text="040 77 06 163" />
            <TextWithIcon icon={Icons.email} text="kari.alppi@gmail.com" />
            <TextWithIcon
              url={googleMapsUrl}
              icon={Icons.location}
              text="Maisematie 618, 39100 Hämeenkyrö"
            />
          </ContactInfoContainer>
        </Container>
        <Form onSubmit={onSubmit}>
          <InputField
            name="name"
            register={register}
            label="Nimi"
            placeholder="Nimi"
            errors={errors.name?.message}
          />
          <InputField
            register={register}
            name="email"
            label="Sähköpostiosoite"
            placeholder="nimi.sukunimi@gmail.com"
            errors={errors.email?.message}
          />
          <TextArea
            errors={errors.message?.message}
            register={register}
            name="message"
            label="Viesti"
            placeholder='Kirjoita viesti tähän'
          />
          <Button
            type="submit"
            isSubmitting={isSubmitting}
            btnType={ButtonType.outlined}
          >
            {isSubmitting ? <Loader /> : 'Lähetä viesti'}
          </Button>
        </Form>
      </Wrapper>
    </DivStyled>
  );
};

export default Contact;
