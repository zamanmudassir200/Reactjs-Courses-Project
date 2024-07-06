import { useState } from "react";
import "./App.css";

function App() {
  const [textArea, setTextArea] = useState("");
  const [wordCounter, setWordCounter] = useState("");
  const [sentenceCounter, setSentenceCounter] = useState("");
  const [letterCounter, setLetterCounter] = useState("");
  const handleReload = () => {
    if (wordCounter === "" && sentenceCounter === "" && letterCounter === "") {
      alert("All the counts are already cleared");
    } else {
      confirm("Are you sure? You want to clear all the counts ");
      setWordCounter("");
      setSentenceCounter("");
      setLetterCounter("");
    }
  };

  const handleLettersCount = () => {
    if (textArea.trim().length !== 0) {
      let letterCounterArr = textArea.trim().split("");
      let filteredLetters = letterCounterArr.filter((letter) => {
        return letter !== " ";
      });
      setLetterCounter(filteredLetters);
    } else {
      alert(
        "Please enter something... You cannot check letter count for empty spaces 😂"
      );
    }
  };
  const handleWordCount = () => {
    if (textArea.trim().length !== 0) {
      setWordCounter(textArea.trim().split(" "));
    } else {
      alert(
        "Please enter something... You cannot check word count for empty spaces 😂"
      );
    }
  };
  const handleSentencesCount = () => {
    if (textArea.trim().length !== 0) {
      // if (
      //   textArea.trim().split(". ") ||
      //   textArea.trim().split("? ") ||
      //   textArea.trim().split("! ")
      // ) {
      // }
      const sentences = textArea
        .trim()
        .split(/[.!?]+(?:\s|$)/)
        .filter((sentence) => sentence.length > 0);
      setSentenceCounter(sentences);
      console.log(sentences);
    } else {
      alert(
        "Please enter something... You cannot check sentences count for empty spaces 😂"
      );
    }
  };
  return (
    <>
      <div className="bg-purple-600 min-h-screen w-full px-5 text-center py-5">
        <h1 className="font-bold text-4xl py-5 text-white">CountMaster</h1>
        <div className="border-2 rounded-lg max-w-[1000px] min-h-[screen] px-5 py-3 mx-auto">
          <div className="flex flex-col text-white gap-2 items-start justify-center">
            <label className="font-bold " htmlFor="textArea">
              Type or Copy Paste here to count:
            </label>
            <textarea
              onChange={(e) => setTextArea(e.target.value)}
              placeholder="Enter paragraph to count words"
              className="w-[100%] outline-none rounded-lg resize-none px-2 py-1 text-black"
              name=""
              rows={10}
              id="textArea"
              value={textArea}
            ></textarea>
            <div className="flex gap-4 my-3 flex-wrap justify-center items-center">
              <button
                onClick={handleLettersCount}
                className="bg-purple-800 p-3 rounded-lg cursor-pointer"
              >
                Count Letters
              </button>
              <button
                onClick={handleWordCount}
                className="bg-purple-800 p-3 rounded-lg cursor-pointer"
              >
                Count Words
              </button>
              <button
                onClick={handleSentencesCount}
                className="bg-purple-800 p-3 rounded-lg cursor-pointer"
              >
                Count Sentences
              </button>
              <button
                onClick={handleReload}
                className="bg-purple-800 p-3 rounded-lg cursor-pointer"
              >
                Reload
              </button>
            </div>
            <div className="flex gap-5 flex-wrap px-2 py-4 items-center justify-center rounded-lg ">
              <span className="font-semibold text-lg">
                {letterCounter.length > 1 ? "Letters" : "Letter"}:{" "}
                {letterCounter.length}
              </span>
              <span className="font-semibold text-lg">
                {wordCounter.length > 1 ? "Words" : "Word"}:{" "}
                {wordCounter.length}
              </span>
              <span className="font-semibold text-lg">
                {sentenceCounter.length > 1 ? "Sentences" : "Sentence"}:{" "}
                {sentenceCounter.length}
              </span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
