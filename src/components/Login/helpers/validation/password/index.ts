const numbersRegex = /\d/;
const minLength = 8;

export const validatePassword = (password: string) => {
  return password.length >= minLength && numbersRegex.test(password);
};
