import { useEffect, useState } from "react";

export async function getServerSideProps() {
  const res = await fetch("https://jsonplaceholder.typicode.com/todos");
  const data = await res.json();
  return {
    props: {
      todos: data,
    },
  };
}

export default function Csr({todos}) {
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
