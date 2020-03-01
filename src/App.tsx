import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';
import { TodoList } from './TodoList';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };
  const toggleTodo: ToggleTodo = selectedTodo => {
    const newTodos = todos.map(todo => {
      if (todo === selectedTodo) {
        return {
          ...todo,
          complete: !todo.complete
        };
      }
      return todo;
    });
    setTodos(newTodos);
  };
  console.log(todos);
  return (
    <>
      <AddTodoForm addTodo={addTodo} />
      <TodoList todos={todos} toggleTodo={toggleTodo} />
    </>
  );
};

export default App;
