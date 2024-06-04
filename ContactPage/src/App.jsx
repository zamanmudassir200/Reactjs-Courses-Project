import "./App.css";
import Navbar from "./components/Navbar/Navbar.jsx";
import Contact from "./components/Contact/Contact.jsx";
import ContactForm from "./components/ContactForm/ContactForm.jsx";
function App() {
  return (
    <div className="container">
      <Navbar></Navbar>
      <div className="main_container">
        <Contact></Contact>
        <ContactForm></ContactForm>
      </div>
    </div>
  );
}

export default App;
