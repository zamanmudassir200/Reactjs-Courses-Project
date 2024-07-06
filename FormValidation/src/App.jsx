import Form from "./component/Form";
import Modal from "./component/Modal";
import { useState, useRef } from "react";
function App() {
  const [isVisble, setIsVisible] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [emailError, setEmailError] = useState(null);
  const [passwordError, setPasswordError] = useState(null);
  const [allFieldsErrors, setAllFieldsError] = useState(null);
  const [firstNameError, setFirstNameError] = useState(null);
  const [lastNameError, setLastNameError] = useState(null);
  const passwordRef = useRef(null);

  const showFormValues = (e) => {
    e.preventDefault();
    const trimmedFirstName = firstName.trim();
    const trimmedLastName = lastName.trim();
    const trimmedEmail = email.trim();
    const trimmedPassword = password.trim();
    if (
      trimmedFirstName === "" ||
      trimmedLastName === "" ||
      trimmedEmail === "" ||
      trimmedPassword === ""
    ) {
      setAllFieldsError("All fields must be filled and not an empty string");

      setIsVisible(false);
      console.log(
        `firstname ${trimmedFirstName}, lastname: ${trimmedLastName},email: ${trimmedEmail}, password : ${trimmedPassword}`
      );
    } else {
      setAllFieldsError(null);
      setIsVisible(true);
    }

    if (!trimmedEmail.includes("@")) {
      setEmailError("Email must contain '@'");
      // valid = false;
    } else {
      // setIsVisible(true);
      setEmailError(null);
    }
    if (trimmedPassword > 0 && trimmedPassword <= 3) {
      setPasswordError("Password must be greater than 3 characters");
      setIsVisible(true);
      // valid = false;
    } else {
      setPasswordError(null);
    }
  };

  const handleFirstName = (e) => {
    setFirstName(e.target.value);
  };
  const handleLastName = (e) => {
    setLastName(e.target.value);
  };
  const handleEmail = (e) => {
    setEmail(e.target.value);
    if (email.includes("@")) {
      setEmailError(null);
    } else {
      setEmailError("Email must contain '@'");
    }
  };
  const applyPasswordStyles = () => {
    const length = passwordRef.current.value.length;
    const passwordInput = passwordRef.current;

    if (length > 0 && length <= 3) {
      passwordInput.classList.add("text-red-600");
      passwordInput.classList.remove("text-yellow-500", "text-green-600");
    } else if (length > 3 && length < 8) {
      passwordInput.classList.add("text-yellow-500");
      passwordInput.classList.remove("text-red-600", "text-green-600");
    } else if (length >= 8) {
      passwordInput.classList.add("text-green-600");
      passwordInput.classList.remove("text-red-600", "text-yellow-500");
    } else {
      passwordInput.classList.remove(
        "text-red-600",
        "text-yellow-500",
        "text-green-600"
      );
    }
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
    applyPasswordStyles();

    if (password.length > 0 && password.length <= 3) {
      setPasswordError(
        "Please Enter a strong password. Password must be greater than 3 charaters"
      );
      setIsVisible(false);
    } else if (password.length > 3 && password.length < 8) {
      setIsVisible(false);
      setPasswordError("Weak Password");
    } else if (password.length >= 10 && password.length < 15) {
      setPasswordError("Medium Password");
    } else if (password.length >= 15) {
      setPasswordError("Strong Password");
    }
  };
  return (
    <>
      <Form
        passwordRef={passwordRef}
        lastNameError={lastNameError}
        firstNameError={firstNameError}
        allFieldsErrors={allFieldsErrors}
        passwordError={passwordError}
        emailError={emailError}
        showFormValues={showFormValues}
        handleFirstName={handleFirstName}
        handleLastName={handleLastName}
        handleEmail={handleEmail}
        handlePassword={handlePassword}
      />
      <Modal isVisble={isVisble} onClose={() => setIsVisible(false)}>
        Mein Name ist{" "}
        <b>
          {firstName} {lastName}
        </b>
        . Ich bin dreiundzwanzig jahre alt und komme ich aus Pakistan. Ich lebe
        in Karachi, Quaidabad. Meine Email und password sind there{" "}
        <b>
          {email}, {password}
        </b>
        . Danke.
      </Modal>
    </>
  );
}

export default App;
