export const validate = (data, type) => {
  const errors = {};

  if (!data.email) {
    errors.email = "email required";
  } else if (!/\S+@\S+/.test(data.email)) {
    errors.email = "Email address is invalid";
  } else {
    delete errors.email;
  }

  if (!data.password) {
    errors.password = "Password required";
  } else if (data.password.length < 6) {
    errors.password = "password is short";
  } else {
    delete errors.password;
  }

  if (type === "signup") {
    if (!data.name.trim()) {
      errors.name = "Username required";
    } else {
      delete errors.name;
    }
    if (!data.confirmPassword) {
      errors.confirmPassword = "Confirm the Password";
    } else if (data.confirmPassword !== data.password) {
      errors.confirmPassword = "password dont match";
    } else {
      delete errors.confirmPassword;
    }

    if (data.isAccepted) {
      delete errors.isAccepted;
    } else {
      errors.isAccepted = "accept our regulations";
    }
  }

  return errors;
};
