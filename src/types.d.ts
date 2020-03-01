type ITodo = {
  text: string;
  complete: boolean;
};

type AddTodo = (newTodo: string) => void;

type ToggleTodo = (selectedTodo: ITodo) => void;
