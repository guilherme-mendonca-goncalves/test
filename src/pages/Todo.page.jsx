import TodoList from "./components/TodoList/TodoList";
import './styles/TodoStyle.css';


function TodoPage() {
  return (
    <div className="todo-app">
      <TodoList />
    </div>
  );
}

export default TodoPage;
