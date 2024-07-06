import "./App.css";
import { app } from "./firebase";
import { getFirestore, collection, addDoc } from "firebase/firestore";

const firestore = getFirestore(app);

const writeData = async () => {
  const result = await addDoc(collection(firestore, "cities"), {
    name: "Karachi",
    pincode: 75050,
    lat: 445,
    long: 123,
  });
  console.log("Result", result);
};
const makeSubCollection = async () => {
  const result = await addDoc(
    collection(firestore, "cities/edAixB5XQBvh04vSHybt/places"),
    {
      name: "Quaidabad",
      district: "malir",
      date: 1,
    }
  );
  console.log("Result of subCollection", result);
};
function App() {
  return (
    <>
      <div className="text-center">
        <h1 className="text-3xl font-extrabold text-center">
          FireStore with React
        </h1>
        <button
          onClick={writeData}
          className="bg-blue-400 text-white p-3 rounded-lg"
        >
          Put 1 collection in a document
        </button>
        <button
          onClick={makeSubCollection}
          className="bg-blue-400 ml-3 text-white p-3 rounded-lg"
        >
          Put data in a subcollection
        </button>
      </div>
    </>
  );
}

export default App;
