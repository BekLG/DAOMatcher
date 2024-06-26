export const validateName = (
  name: string,
  setNameError: React.Dispatch<React.SetStateAction<string>>
) => {
  // Basic name validation
  if (!name || name.trim() === "") {
    return "Name cannot be empty";
  }

  // Allow letters, spaces, apostrophes, and hyphens
  if (!/^[A-Za-z '-]+$/.test(name)) {
    setNameError(
      "Name can only contain letters, spaces, apostrophes, and hyphens"
    );

    return false;
  }
  setNameError("");
  return true;
};

export const validateEmail = (
  email: string,
  setEmailError: React.Dispatch<React.SetStateAction<string>>
) => {
  // Basic email validation
  if (!email || !/^\S+@\S+\.\S+$/.test(email)) {
    setEmailError("Enter a valid email address");
    return false;
  }
  setEmailError("");
  return true;
};

export const validatePassword = (
  password: string,
  setPassError: React.Dispatch<React.SetStateAction<string>>
) => {
  if (
    !password ||
    !/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[\W])[A-Za-z\d\W]{8,}$/.test(password)
  ) {
    setPassError(
      "Password should contain at least 8 characters, one uppercase letter, one lowercase letter, one number, and one special character"
    );
    return false;
  }
  setPassError("");
  return true;
};

export const confirmPassword = (
  password: string,
  confirmPassword: string,
  setPassError: React.Dispatch<React.SetStateAction<string>>
) => {
  if (password !== confirmPassword) {
    setPassError("Passwords do not match");
    return false;
  }
  setPassError("");
  return true;
};
