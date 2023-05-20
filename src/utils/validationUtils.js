//email: a-z와 A-Z/숫자/+와 - 허용, @와 a-z 그리고 \. a-z 사용가능
export const validateEmail = (email) => {
  const emailRegEx = /[a-zA-Z0-9+_]+@[a-z]+\.[a-z]+/;
  return emailRegEx.test(email);
};

//password: a-z와 A-Z/숫자/특수 문자(공백 제외) 허용, 2개이상 조합, 최소 10자 이상
export const validatePassword = (password) => {
  const passwordRegEx = /^(?=.*[a-zA-Z])(?=.*[0-9])(?=.*[!@#$%^&*])(?=.{7,})/;
  return passwordRegEx.test(password);
};
