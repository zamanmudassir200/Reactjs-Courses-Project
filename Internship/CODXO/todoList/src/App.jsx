import React, { useContext } from "react";
import Header from "./components/Header";
import TodoList from "./components/TodoList";
import Modal from "./components/Modal";
import Footer from "./components/Footer";
import "./App.css";

import TodoContext from "./context/TodoContext";
import Navbar from "./components/Navbar";

const App = () => {
  const { showModal, setShowModal } = useContext(TodoContext);

  return (
    <>
      {/* <Navbar /> */}
      <div className="px-10 py-5 bg-purple-300 min-h-screen">
        <Header />
        <div className="my-[100px] flex-col h-auto text-center items-center justify-center top-[100px] left-[50px] shadow-xl rounded-lg p-4 bg-white gap-2 flex w-[100%]">
          <h1 className="text-4xl mt-4 text-center sm:pt-0 font-bold">
            Todo List
          </h1>
          <Modal isVisible={showModal} onClose={() => setShowModal(false)}>
            <h2 className="text-red-500 font-bold text-xl">Warning</h2>
            <p className="text-red-500 text-xl font-semibold italic">
              You cannot save the empty todo item. Please write something...
            </p>
          </Modal>
          <TodoList />
        </div>
      </div>
      <Footer />
    </>
  );
};

export default App;
