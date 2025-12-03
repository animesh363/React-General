function ToDoItem1(){

    let todoName = 'Go To collage'
    let todoDate = '04/10/2023'
    return (
        <div class="container ">
  <div class="row s-row">
    <div class="col-6">
      {todoName}
    </div>
    <div class="col-4">
      {todoDate}
    </div>
    <div class="col-2">
      <button type="button" class="btn btn-danger s-button">Delete</button>
    </div>
  </div>
  </div>

    );
    

    
}

export default ToDoItem1;