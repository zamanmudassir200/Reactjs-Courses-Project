import React, { useContext } from "react";
import { AppContext } from "../context/context";
const Contact = () => {
  const { handleHideItems } = useContext(AppContext);

  return <section onClick={handleHideItems}>contact</section>;
};

export default Contact;
