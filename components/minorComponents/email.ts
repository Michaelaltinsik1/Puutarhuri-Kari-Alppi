interface EmailProps {
  name: string;
  email: string;
  message: string;
}

export const sendEmail = async ({
  name,
  email,
  message,
}: EmailProps): Promise<{ isError: boolean; message: string }> => {
  let reponseMessage = { isError: false, message: '' };

  // TODO: send email
  const apiEndpoint = '/api/email';

  await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify({ name, email, message }),
  })
    .then((res) => res.json())
    .then((response) => {
      reponseMessage = { isError: false, message: response.message };
    })
    .catch((err) => {
      reponseMessage = {
        isError: true,
        message:
          'Jotain meni pieleen. Ota yhteyttä sähköpostitse kari.alppi@gmail.com tai soita 040 77 06 163.',
      };
    });
  return reponseMessage;
};
