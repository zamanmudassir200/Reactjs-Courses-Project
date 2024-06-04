function Btn() {
  let buttonValues = ["1", "2", "4", 6, 7, 8, 8, 8, 9, 0, 4, 6, 7, 8];

  return (
    <>
      {/* {buttonValues.map((btnValue) => (
      ))} */}
      {buttonValues.map((btnValue) => (
        <button>{btnValue}</button>
      ))}
    </>
  );
}

export default Btn;
