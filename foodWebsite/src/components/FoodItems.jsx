import Item from "./Item";

const FoodItems = ({ Items }) => {
  return (
    <>
      <ul className="list-group">
        {Items.map((item, index) => (
          <Item
            key={index}
            foodItem={item}
            HandleBuyBtn={() => console.log(`${item} bought`)}
          ></Item>
        ))}
      </ul>
    </>
  );
};
export default FoodItems;
