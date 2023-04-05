const getUpper = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 65));
};

const getLower = (): string => {
  return String.fromCharCode(Math.floor(Math.random() * 26 + 97));
};

const getNumber = (): string => {
  return Math.floor(Math.random() * 10).toString();
};

const getSymbol = (): string => {
  const randomSymbols = [
    String.fromCharCode(Math.floor(Math.random() * 15 + 33)),
    String.fromCharCode(Math.floor(Math.random() * 7 + 58)),
    String.fromCharCode(Math.floor(Math.random() * 6 + 91)),
    String.fromCharCode(Math.floor(Math.random() * 4 + 123)),
  ];

  return randomSymbols[Math.floor(Math.random() * 4)][0];
};

export const generatePassword = (
  length: number,
  {
    upperCase,
    lowerCase,
    numbers,
    symbols,
  }: {
    upperCase: boolean;
    lowerCase: boolean;
    numbers: boolean;
    symbols: boolean;
  }
): string => {
  let password: string[] = [];

  if (upperCase && password.length < length) password.push(getUpper());
  if (lowerCase && password.length < length) password.push(getLower());
  if (symbols && password.length < length) password.push(getSymbol());

  while (password.length < length) {
    let x = Math.random();

    if (x < 0.35) {
      if (lowerCase && password.length < length) password.push(getLower());
    } else if (x < 0.65) {
      if (upperCase && password.length < length) password.push(getUpper());
    } else if (x < 0.85) {
      if (numbers && password.length < length) password.push(getNumber());
    } else if (symbols && password.length < length) {
      if (symbols && password.length < length) password.push(getSymbol());
    }
  }

  //rearanging password
  let newPassword = "";
  while (password.length > 0) {
    const random = Math.floor(Math.random() * password.length);
    newPassword = newPassword.concat(password[random]);
    password.splice(random, 1);
  }

  return newPassword;
};
