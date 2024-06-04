import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import FoodItems from "./components/FoodItems";
import ErrorMsg from "./components/ErrorMsg";
import Container from "./components/Container";
import FoodInput from "./components/FoodInput";
import { useState } from "react";

function App() {
  //   let foodItems = [];

  let [foodItems, setFoodItems] = useState([]);
  const onKeyDown = (event) => {
    if (event.target.value !== "") {
      if (event.key === "Enter") {
        let newItem = event.target.value;
        let newFoodItems = [...foodItems, newItem];
        console.log(newFoodItems);
        setFoodItems(newFoodItems);
        event.target.value = "";
      }
    }
  };
  return (
    <>
      <Container>
        <h1 className="mainHeading">Healthy Food</h1>
        <FoodInput handleKeyDown={onKeyDown}></FoodInput>
        <ErrorMsg Items={foodItems}></ErrorMsg>
        {/* <p>{textToShow}</p> */}
        <FoodItems Items={foodItems}></FoodItems>
      </Container>

      {/* <Container>
        <p>
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit
          doloribus tempora repudiandae eaque nulla tempore ad fugit culpa
          dolorem nesciunt sed alias beatae quam facilis quia consectetur,
          animi, repellat error dolore consequatur magnam necessitatibus.
          Perferendis architecto dignissimos unde dolorem tenetur tempore, non
          perspiciatis, illum molestias ipsa libero accusamus sit quibusdam
          reiciendis culpa enim earum commodi expedita, deleniti dolores.
          Consectetur esse incidunt illo commodi! Delectus, accusamus voluptatem
          tempore quod iste dolorem, obcaecati dignissimos enim consequuntur
          blanditiis assumenda illum quas esse vero saepe animi quibusdam facere
          temporibus fugiat repudiandae expedita in aliquam corrupti! Optio,
          atque accusantium rerum magni recusandae voluptatibus ad eveniet?
        </p>
      </Container> */}
    </>
  );
}

export default App;
