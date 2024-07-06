import "./App.css";
import Modal from "./Modal";
import { useState } from "react";
function App() {
  const [showModal, setShowModal] = useState(false);
  const [showModal1, setShowModal1] = useState(false);
  const [showModal2, setShowModal2] = useState(false);
  const [input, setInput] = useState("");
  const [password, setPassword] = useState("");

  const [displayEmail, setDisplayEmail] = useState("");
  const [displayPassword, setDisplayPassword] = useState("");

  const handleInput = (e) => {
    setInput(e.target.value);
  };
  const handlePassword = (e) => {
    setPassword(e.target.value);
  };
  const handleSubmitBtn = (e) => {
    e.preventDefault();

    setDisplayEmail(input);
    setDisplayPassword(password);

    setShowModal2(false);
  };
  return (
    <>
      <div className="my-0 mx-auto h-screen max-w-[900px] bg-red-700">
        <div className="flex items-start justify-center mx-auto max-w-[600px] h-full">
          <button
            onClick={() => {
              setShowModal(true);
            }}
            className="ml-5 p-4 border-2 bg-blue-900 transition-all hover:scale-[1.2] focus:scale-95 focus:transition-shadow hover:bg-blue-600 text-white rounded-lg"
          >
            Text
          </button>
          <button
            onClick={() => {
              setShowModal1(true);
            }}
            className="ml-5 p-4 border-2 bg-blue-900 transition-all hover:scale-[1.2] focus:scale-95 focus:transition-shadow hover:bg-blue-600 text-white rounded-lg"
          >
            Video
          </button>
          <button
            onClick={() => {
              setShowModal2(true);
            }}
            className="ml-5 p-4 border-2 bg-blue-900 transition-all hover:scale-[1.2] focus:scale-95 focus:transition-shadow hover:bg-blue-600 text-white rounded-lg"
          >
            Form
          </button>
          <div className="bg-green-400">
            <p>{displayEmail}</p>
            <p>{displayPassword}</p>
          </div>
        </div>

        <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
          <h1>Hello world</h1>
          <p className="text-justify">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit. Adipisci
            magni fugit consequuntur deserunt omnis vero repellendus saepe harum
            odit est quis laudantium repellat, officiis asperiores tenetur
            iusto, ab a corrupti deleniti fugiat quibusdam exercitationem sequi.
            Consectetur ullam nisi vero esse, iusto eaque quasi! Harum nobis
            eaque ullam minima sunt aliquid adipisci aut excepturi quisquam
            alias perspiciatis consequatur neque cumque officia debitis,
            incidunt maxime dignissimos atque ab? Libero ipsa assumenda
            doloribus sunt error necessitatibus est eligendi, cumque aspernatur
            nam. Obcaecati non molestias in. Voluptatum officiis aut iure at ab
            alias nam, perferendis placeat expedita provident itaque blanditiis
            eveniet perspiciatis necessitatibus quidem!
          </p>
        </Modal>
        <Modal isVisible={showModal1} onClose={() => setShowModal1(false)}>
          <h1>Video</h1>
          <iframe
            width="100%"
            height="315"
            src="https://www.youtube.com/embed/nwJK-jo91vA?si=9JwcX15dc1IK83ZC"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerpolicy="strict-origin-when-cross-origin"
            allowfullscreen
          ></iframe>
        </Modal>
        <Modal isVisible={showModal2} onClose={() => setShowModal2(false)}>
          <h1>Form</h1>
          <form className="w-full max-w-lg mx-auto p-6 bg-white shadow-md rounded-md">
            <div className="mb-4">
              <label
                htmlFor="exampleInputEmail1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Email address
              </label>
              <input
                onChange={handleInput}
                value={input}
                type="email"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="exampleInputEmail1"
                aria-describedby="emailHelp"
                placeholder="Enter email"
              />
              <small
                id="emailHelp"
                className="block mt-1 text-xs text-gray-600"
              >
                We'll never share your email with anyone else.
              </small>
            </div>
            <div className="mb-4">
              <label
                htmlFor="exampleInputPassword1"
                className="block text-gray-700 text-sm font-bold mb-2"
              >
                Password
              </label>
              <input
                onChange={handlePassword}
                value={password}
                type="password"
                className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
                id="exampleInputPassword1"
                placeholder="Password"
              />
            </div>
            <div className="mb-4">
              <label className="inline-flex items-center">
                <input
                  type="checkbox"
                  className="form-checkbox h-5 w-5 text-gray-600"
                  id="exampleCheck1"
                />
                <span className="ml-2 text-gray-700">Check me out</span>
              </label>
            </div>
            <button
              onClick={handleSubmitBtn}
              type="submit"
              className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline"
            >
              Submit
            </button>
          </form>
        </Modal>
      </div>
    </>
  );
}

export default App;
