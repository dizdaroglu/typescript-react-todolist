import React, { useState } from 'react';
import { AddTodoForm } from './AddTodoForm';

const App: React.FC = () => {
  const [todos, setTodos] = useState<ITodo[]>([]);

  const addTodo: AddTodo = newTodo => {
    newTodo.trim() !== '' &&
      setTodos([...todos, { text: newTodo, complete: false }]);
  };

  console.log(todos);
  return (
    <>
      <AddTodoForm addTodo={addTodo} />
    </>
  );
};

export default App;
