import TodoItem from "./TodoItem";
import { Todo } from "./todo.interface";

function TodoList({
  todoItems,
  ...props
}: {
  todoItems: Todo[];
  onDeleteItem: (id: number) => void;
  onUpdateItem: (todo: Todo) => void;
}) {
  if (!todoItems?.length) {
    return <div className="italic text-center">Geen items gevonden</div>;
  }
  return (
    <>
      {todoItems.map((todo) => (
        <TodoItem key={todo.id} todo={todo} {...props} />
      ))}{" "}
    </>
  );
}

export default TodoList;
