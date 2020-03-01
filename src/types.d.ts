type ITodo = {
  text: string;
  complete: boolean;
};

type AddTodo = (newTodo: string) => void;
