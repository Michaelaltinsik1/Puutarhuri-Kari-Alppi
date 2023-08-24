export const verifyCaptchaAction = async (token: string) => {
  let isValid = false;

  const apiEndpoint = '/api/recaptcha';

  const response = await fetch(apiEndpoint, {
    method: 'POST',
    body: JSON.stringify({ token }),
  })
    .then((res) => res.json())
    .then((response) => {
      isValid = response.isValid;
    })
    .catch((err) => {
      console.log(err);
    });
  return isValid;
};
