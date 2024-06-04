import React, { useState } from "react";
import Button from "../Button/Button";
import Form from "../Form/Form";
import { MdMessage, MdMail } from "react-icons/md";
import { IoIosCall } from "react-icons/io";
import styles from "./ContactForm.module.css";

const ContactForm = () => {
  const [myName, setMyName] = useState("");
  const [email, setEmail] = useState("");
  const [text, setText] = useState("");

  const viaCallHandler = () => {
    console.log("i am from call");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    setMyName(event.target[0].value);
    setEmail(event.target[1].value);
    setText(event.target[2].value);
    event.target[0].value = "";
    event.target[1].value = "";
    event.target[2].value = "";
  };
  return (
    <>
      <div className={styles.contactForm_section}>
        <div className={styles.left}>
          <div className={`${styles.top_btns}`}>
            <Button text="Via Message" icon={<MdMessage />} />
            <Button
              onClick={viaCallHandler}
              text="Via Call"
              icon={<IoIosCall />}
            />
          </div>
          <Button isOutline={true} text="Via Email Form" icon={<MdMail />} />
          <Form onSubmit={() => onSubmitHandler(event)} />
        </div>
        <div className="right">
          <img src="src\assets\contactFormImage.png" alt="" />
        </div>
      </div>
      <div className="container form_values">
        <ul>
          <p>Name: {myName}</p>
          <p>Email: {email}</p>
          <p>Text: {text}</p>
        </ul>
      </div>
    </>
  );
};

export default ContactForm;
