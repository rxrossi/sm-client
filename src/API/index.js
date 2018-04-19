export function signin({ email, password }) {
  if (email === "user@mail.com" && password === "pw") {
    return {
      token: "token"
    };
  }
  return {
    error: "Invalid credentials"
  };
}

export function signup({ email, password, confirmPassword } = {}) {
  const fieldErrors = {};
  if (!email) {
    fieldErrors.email = "Required";
  }
  if (!password) {
    fieldErrors.password = "Required";
  }
  if (!confirmPassword) {
    fieldErrors.confirmPassword = "Required";
  }

  if (Object.keys(fieldErrors).length > 0) {
    return fieldErrors;
  }

  if (password !== confirmPassword) {
    return {
      error: "Passwords does not match"
    };
  }

  return {
    token: "token"
  };
}
