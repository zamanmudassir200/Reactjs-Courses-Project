// import React from "react";
// import { FaEye } from "react-icons/fa6";
// import { FaEyeSlash } from "react-icons/fa";
// import { useState } from "react";

// const Form = ({
//   //   lastNameError,
//   //   firstNameError,
//   firstName,
//   allFieldsErrors,
//   passwordError,
//   emailError,
//   lastName,
//   email,
//   password,
//   showFormValues,
//   handleFirstName,
//   handleLastName,
//   handleEmail,
//   handlePassword,
// }) => {
//   const [showPassword, setShowPassword] = useState("password");

//   return (
//     <>
//       <div className="flex flex-col  h-screen border-2 max-w-[100vw] mx-auto px-1  items-center justify-center">
//         <h1 className="inline-block text-center py-4 font-bold text-3xl ">
//           Form Validation
//         </h1>
//         <form
//           action=""
//           className="flex flex-col rounded-md gap-2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] py-7 px-3 border-2"
//         >
//           <label className="font-semibold" htmlFor="first">
//             First Name
//           </label>

//           <input
//             required
//             className="transition-all hover:border-green-500 rounded-md border-2 w-[100%] py-2 px-1 outline-none font-semibold "
//             type="text"
//             value={firstName}
//             placeholder="First Name"
//             id="first"
//             onChange={handleFirstName}
//           />

//           <label className="font-semibold" htmlFor="last">
//             Last Name
//           </label>
//           <input
//             required
//             className="transition-all hover:border-green-500 rounded-md border-2 w-[100%] py-2 px-1 outline-none font-semibold "
//             type="text"
//             value={lastName}
//             placeholder="Last Name"
//             id="last"
//             onChange={handleLastName}
//           />

//           <label className="font-semibold" htmlFor="email">
//             Email
//           </label>
//           <input
//             required
//             className="transition-all hover:border-green-500 rounded-md border-2 w-[100%] py-2 px-1 outline-none font-semibold "
//             type="email"
//             value={email}
//             placeholder="Email"
//             id="email"
//             onChange={handleEmail}
//           />
//           <p className="text-red-600 font-semibold">{emailError}</p>

//           <label className="font-semibold" htmlFor="password">
//             Password
//           </label>
//           <div className="relative ">
//             <input
//               required
//               value={password}
//               className={`transition-all  ${
//                 password && password.length > 0 && password.length <= 3
//                   ? "bg-red-600"
//                   : password && password.length > 3 && password.length < 8
//                   ? "bg-yellow-500"
//                   : password && password.length >= 8
//                   ? "bg-green-600"
//                   : ""
//               } hover:border-green-500 rounded-md border-2 w-[100%] py-2 px-1 outline-none font-semibold`}
//               type={showPassword}
//               onChange={handlePassword}
//               placeholder="Password"
//               id="password"
//             />

//             <p className={`font-semibold `}>{passwordError}</p>
//             {/* {password.length > 0 && (
//               <FaEyeSlash
//                 onClick={() => {
//                   setShowPassword("text");
//                 }}
//                 style={{
//                   width: "70px",
//                   position: "absolute",
//                   cursor: "pointer",
//                 }}
//               />
//             )} */}
//             <div className="absolute bg-white top-[15px] flex right-16">
//               {showPassword === "password" ? (
//                 <FaEyeSlash
//                   onClick={() => {
//                     setShowPassword("text");
//                   }}
//                   style={{
//                     width: "70px",
//                     position: "absolute",
//                     cursor: "pointer",
//                   }}
//                 />
//               ) : (
//                 <FaEye
//                   onClick={() => {
//                     setShowPassword("password");
//                   }}
//                   style={{
//                     width: "70px",
//                     position: "absolute",
//                     cursor: "pointer",
//                   }}
//                 />
//               )}
//             </div>
//           </div>
//           <p className="text-red-600 font-semibold">{allFieldsErrors}</p>
//           <button
//             onClick={showFormValues}
//             type="submit"
//             className=" py-2 mt-5 rounded-md  text-white font-semibold hover:bg-blue-700 transition-all bg-blue-500"
//           >
//             Sumbit
//           </button>
//         </form>
//       </div>
//     </>
//   );
// };

// export default Form;
import React, { useState, useRef } from "react";
import { FaEye } from "react-icons/fa6";
import { FaEyeSlash } from "react-icons/fa";
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
};
const Form = ({
  firstName,
  allFieldsErrors,
  passwordError,
  emailError,
  lastName,
  email,
  password,
  showFormValues,
  handleFirstName,
  handleLastName,
  handleEmail,
  handlePassword,
}) => {
  const [showPassword, setShowPassword] = useState("password");
  const passwordRef = useRef(null);

  return (
    <div className="flex flex-col h-screen border-2 max-w-[100vw] mx-auto px-1 items-center justify-center">
      <h1 className="inline-block text-center py-4 font-bold text-3xl">
        Form Validation
      </h1>
      <form
        action=""
        className="flex flex-col rounded-md gap-2 w-[90%] sm:w-[80%] md:w-[60%] lg:w-[45%] py-7 px-3 border-2"
      >
        <label className="font-semibold" htmlFor="first">
          First Name
        </label>
        <input
          required
          className="transition-all hover:border-green-500 rounded-md border-2 w-[100%] py-2 px-1 outline-none font-semibold"
          type="text"
          value={firstName}
          placeholder="First Name"
          id="first"
          onChange={handleFirstName}
        />

        <label className="font-semibold" htmlFor="last">
          Last Name
        </label>
        <input
          required
          className="transition-all hover:border-green-500 rounded-md border-2 w-[100%] py-2 px-1 outline-none font-semibold"
          type="text"
          value={lastName}
          placeholder="Last Name"
          id="last"
          onChange={handleLastName}
        />

        <label className="font-semibold" htmlFor="email">
          Email
        </label>
        <input
          required
          className="transition-all hover:border-green-500 rounded-md border-2 w-[100%] py-2 px-1 outline-none font-semibold"
          type="email"
          value={email}
          placeholder="Email"
          id="email"
          onChange={handleEmail}
        />
        <p className="text-red-600 font-semibold">{emailError}</p>

        <label className="font-semibold" htmlFor="password">
          Password
        </label>
        <div className="relative">
          <input
            required
            ref={passwordRef}
            value={password}
            className={`transition-all  hover:border-green-500 rounded-md border-2 w-[100%] py-2 px-1 outline-none font-semibold`}
            type={showPassword}
            onChange={handlePassword}
            placeholder="Password"
            id="password"
          />
          <p className="font-semibold">{passwordError}</p>
          <div className="absolute bg-white top-[15px] flex right-16">
            {showPassword === "password" ? (
              <FaEyeSlash
                onClick={() => {
                  setShowPassword("text");
                }}
                style={{
                  width: "70px",
                  position: "absolute",
                  cursor: "pointer",
                }}
              />
            ) : (
              <FaEye
                onClick={() => {
                  setShowPassword("password");
                }}
                style={{
                  width: "70px",
                  position: "absolute",
                  cursor: "pointer",
                }}
              />
            )}
          </div>
        </div>
        <p className="text-red-600 font-semibold">{allFieldsErrors}</p>
        <button
          onClick={showFormValues}
          type="submit"
          className="py-2 mt-5 rounded-md text-white font-semibold hover:bg-blue-700 transition-all bg-blue-500"
        >
          Submit
        </button>
      </form>
    </div>
  );
};

export default Form;
