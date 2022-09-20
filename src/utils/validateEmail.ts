const EMAIL_REGEX =
  /^[A-Za-z0-9.-_+]{2,}@(?:[a-zA-Z0-9-]{3,}\.)+?(?:[a-zA-Z]{2,}\.?)+(?!.)$/;

export function validateEmail(email: string) {
  return EMAIL_REGEX.test(email);
}
