const AddTodoItem1 = () => {
  let todoItem = "Buy Chocolates";
  let todoDate = "10/2/2024";
  return (
    <div className="container">
      <div class="row kg-row">
        <div class="col-6">{todoItem}</div>
        <div class="col-4">{todoDate} </div>

        <div class="col-2">
          <button type="button" class="btn btn-danger kg-button">
            Delete
          </button>
        </div>
      </div>
    </div>
  );
};
export default AddTodoItem1;
