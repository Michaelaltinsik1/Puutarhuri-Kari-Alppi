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
import { useState } from 'react';
import { sendEmail } from './minorComponents/email';
import { useForm } from 'react-hook-form';
import * as yup from 'yup';
import { yupResolver } from '@hookform/resolvers/yup';
import Loader from './minorComponents/Loader';
import { toast } from 'react-toastify';

interface ContactProps {
  headerHeight: number;
}

interface FormFields {
  name: string;
  email: string;
  message: string;
}

const schema = yup.object({
  name: yup.string().required('Namn är ett obligatoriskt fält'),
  email: yup
    .string()
    .email('Ogiltig mailadress')
    .required('Mailadress är ett obligatoriskt fält'),
  message: yup.string().required('Ange ditt meddelande'),
});
const defaultValues = {
  name: '',
  email: '',
  message: '',
};

const DivStyled = styled.div<{ $headerHeight?: number }>`
  display: grid;

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
    const response: { isError: boolean; message: string } = await sendEmail({
      name: data.name,
      email: data.email,
      message: data.message,
    });
    if (response.isError) {
      toast.error(
        'Något gick fel. Kontakta oss via email michaelaltinisik1@gmail.com eller ring 0725577888.',
        {
          autoClose: false,
          type: 'error',
          position: 'bottom-right',
          closeOnClick: true,
        }
      );
    } else {
      toast.success('Ditt meddelande har skickats. Vi hör av oss inom kort.', {
        autoClose: 3000,
        type: 'success',
        position: 'bottom-right',
        closeOnClick: true,
      });
    }
    reset();
  });

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
      <Form onSubmit={onSubmit}>
        <InputField
          name="name"
          register={register}
          label="Name"
          placeholder="Michael Altinisik"
          errors={errors.name?.message}
        />
        <InputField
          register={register}
          name="email"
          label="Email"
          placeholder="Mickealt@hotmail.se"
          errors={errors.email?.message}
        />
        <TextArea
          errors={errors.message?.message}
          register={register}
          name="message"
          label="Message"
          placeholder="Vad har du på hjärtat?"
        />
        <Button type="submit" btnType={ButtonType.submit}>
          {isSubmitting ? <Loader /> : 'Skicka meddelande'}
        </Button>
      </Form>
    </DivStyled>
  );
};

export default Contact;
