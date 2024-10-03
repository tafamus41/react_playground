import React from 'react'
import { useSelector } from 'react-redux'
import TodoItem from "./TodoItem";
const TodoList = () => {

  const {gorevler} =useSelector((state)=>state.todoReducer)
  return (
    <div>
      <div>
        {gorevler.map((gorev) => (
          <TodoItem gorev={gorev} />
        ))}
      </div>
    </div>
  );
}

export default TodoList