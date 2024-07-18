import React, { useContext, useState } from "react";
import { AppContext } from "../context/context";

const Contact = () => {
  const [formStatus, setFormStatus] = useState(null);
  const [errStatus, setErrStatus] = useState(null);
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [message, setMessage] = useState("");
  const { handleHideItems } = useContext(AppContext);

  const onSubmit = async (event) => {
    event.preventDefault();
    const formData = new FormData(event.target);

    formData.append("access_key", "051cb480-555e-46f0-97b0-2733b46e2e77");

    const object = Object.fromEntries(formData);
    const json = JSON.stringify(object);

    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: json,
      });
      const result = await res.json();

      if (result.success) {
        setFormStatus("Success! Your message has been sent.");
        setEmail("");
        setName("");
        setMessage("");
      } else {
        setErrStatus("Error! Something went wrong, please try again.");
      }
    } catch (error) {
      setErrStatus("Error! Something went wrong, please try again.");
    }
  };

  return (
    <section className="bg-[#003d62]" onClick={handleHideItems}>
      <div className="max-w-[1250px] px-10 min-h-screen text-white mx-auto">
        <h1 className="text-6xl underline font-bold pt-[70px] mb-10 text-center">
          Contact
        </h1>
        <div className="max-w-[600px] mx-auto border-2 border-orange-300 my-0 rounded-lg p-8">
          <form
            onSubmit={onSubmit}
            className="flex text-black flex-col gap-16 text-3xl"
          >
            <div className=" flex flex-col relative mt-10">
              <label
                className={`top-4 left-3 absolute select-none transition-all  duration-200  ${
                  name
                    ? " text-white -top-11 -left-0"
                    : "text-3xl text-gray-500"
                }`}
                htmlFor="name"
              >
                Name
              </label>
              <input
                className="py-4 px-3 text-black focus:outline-orange-700 border-none rounded-lg"
                id="name"
                name="name"
                onChange={(e) => setName(e.target.value)}
                value={name}
                type="text"
                required
              />
            </div>
            <div className=" flex flex-col relative">
              <label
                className={`top-4 left-3 absolute select-none transition-all  duration-200  ${
                  email
                    ? "text-white text-3xl -top-11 -left-0"
                    : "text-3xl text-gray-500"
                }`}
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="py-4 px-3 text-black focus:outline-orange-700 border-none rounded-lg"
                id="email"
                name="email"
                value={email}
                type="email"
                required
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div className=" flex flex-col relative">
              <label
                className={`top-4 left-3 absolute select-none transition-all  duration-200  ${
                  message
                    ? "text-white text-3xl -top-11 -left-0"
                    : "text-3xl text-gray-500"
                }`}
                htmlFor="message"
              >
                Message
              </label>
              <textarea
                className="py-4 px-3 text-black focus:outline-orange-700 border-none rounded-lg"
                id="message"
                name="message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                rows={6}
                required
              ></textarea>
            </div>
            <button
              type="submit"
              className="p-4 rounded-xl bg-orange-500 w-[100px] hover:bg-white hover:border-orange-700 hover:text-black transition-all duration-200  text-white  font-bold border-2  border-orange-400 self-center"
            >
              Submit
            </button>
          </form>
          {formStatus ? (
            <p className="text-center mt-6 text-4xl">{formStatus}</p>
          ) : (
            <p className="text-center text-red-600 mt-6 text-4xl">
              {errStatus}
            </p>
          )}
        </div>
      </div>
    </section>
  );
};

export default Contact;
