import React, { Fragment } from 'react';
import { TodoListItem } from './TodoListItem';

interface TodoListProps {
  todos: Array<ITodo>;
  toggleTodo: ToggleTodo;
  removeTodo: RemoveTodo;
}
export const TodoList: React.FC<TodoListProps> = ({
  todos,
  toggleTodo,
  removeTodo
}) => {
  return (
    <ul>
      {todos.map((todo, index: number) => (
        <TodoListItem
          key={index}
          index={index}
          todo={todo}
          toggleTodo={toggleTodo}
          removeTodo={removeTodo}
        />
      ))}
    </ul>
  );
};
