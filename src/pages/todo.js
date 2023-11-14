import { useState } from "react";
import { useAutoAnimate } from "@formkit/auto-animate/react";

const TodoPage = () => {
  const [todoArr, setTodoArr] = useState([]);
  const [todoText, setTodoText] = useState("");
  const [parent] = useAutoAnimate(/* optional config */);

  return (
    <main className="main-container">
      <h1>Todo Page</h1>
      <div className="todo-list" ref={parent}>
        {todoArr.map((item, index) => {
          return (
            <div
              className="todo-item"
              key={index}
              onClick={() => {
                setTodoArr(
                  todoArr.filter((_, todoIndex) => {
                    return todoIndex !== index;
                  })
                );
              }}
            >
              {item}
            </div>
          );
        })}
      </div>
      <div className="input-group">
        <input
          type="text"
          placeholder="Add a todo"
          onChange={(event) => {
            setTodoText(event.target.value);
          }}
        />
        <button
          onClick={() => {
            setTodoArr([...todoArr, todoText]);
          }}
        >
          Add
        </button>
      </div>
    </main>
  );
};

export default TodoPage;
