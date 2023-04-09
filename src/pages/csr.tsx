import { useEffect, useState } from "react";

export default function Csr() {
  const [todos, setTodos] = useState([]);
  useEffect(() => {
    const fetchTodos = async () => {
      setTimeout(async () => {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos");
        setTodos(await res.json());
      }, 0);
    };
    fetchTodos();
  }, []);

  return (
    <div>
      {todos.length > 0
        ? todos.map((todo) => {
            return (
              <div key={todo.id}>
                {todo.id} : {todo.title}
              </div>
            );
          })
        : "Loading ..."}
    </div>
  );
}
