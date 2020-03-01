import React from 'react';

interface TodoListItemProps {
  todo: ITodo;
  toggleTodo: ToggleTodo;
}
export const TodoListItem: React.FC<TodoListItemProps> = ({
  todo,
  toggleTodo
}) => {
  return (
    <li>
      <label>{todo.text}</label>
    </li>
  );
};
