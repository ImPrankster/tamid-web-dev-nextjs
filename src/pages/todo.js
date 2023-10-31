const TodoPage = () => {
  return (
    <main className="main-container">
      <h1>Todo Page</h1>
      <div className="todo-list"></div>
      <div className="input-group">
        <input type="text" placeholder="Add a todo" />
        <button>Add</button>
      </div>
    </main>
  );
};

export default TodoPage;
