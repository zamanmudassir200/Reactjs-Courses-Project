import TodoItem from "./TodoItem";
import styles from "./TodoItems.module.css";
const TodoItems = ({ todoItems }) => {
  return (
    <>
      <div className={styles["items-container"]}>
        {todoItems.map((item, index) => (
          <TodoItem
            key={index}
            todoDate={item.dueDate}
            todoName={item.name}
          ></TodoItem>
        ))}
      </div>
    </>
  );
};
export default TodoItems;
