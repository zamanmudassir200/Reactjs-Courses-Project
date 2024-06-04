import styles from "./Button.module.css";
const Item = ({ foodItem, HandleBuyBtn }) => {
  return (
    <li className="list-group-item">
      {foodItem}
      <button
        className={`btn btn-info ${styles.button}`}
        onClick={HandleBuyBtn}
      >
        Buy
      </button>
    </li>
  );
};
export default Item;
