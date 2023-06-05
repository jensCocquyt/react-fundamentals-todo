import { PlusCircleIcon } from "@heroicons/react/24/outline";
import format from "date-fns/format";
import { useState } from "react";
import TodoList from "./TodoList";
import { Todo } from "./todo.interface";

function TodoOverview() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  function handleItemAdd(title: string, content?: string) {
    const todo: Todo = {
      id: new Date().getTime(),
      title,
      content,
      date: format(new Date(), "dd/MM/yyyy"),
    };
    setTodoItems([...todoItems, todo]);
  }
  function handleItemDelete(id: number) {
    setTodoItems([...todoItems.filter((item) => item.id !== id)]);
  }
  function handleItemUpdate(updatedTodo: Todo) {
    const editedItem = todoItems.find((item) => item.id === updatedTodo.id);
    if (!editedItem) {
      return;
    }
    setTodoItems([
      ...todoItems.filter((item) => item.id !== updatedTodo.id),
      {
        ...updatedTodo,
      },
    ]);
  }

  return (
    <div className="flex w-1/2 m-auto gap-4 flex-col p-4">
      <h2 className="text-center text-xl">Todo Items</h2>
      <TodoList
        todoItems={todoItems}
        onDeleteItem={handleItemDelete}
        onUpdateItem={handleItemUpdate}
      />
      <div className="flex justify-center">
        <PlusCircleIcon
          onClick={() => handleItemAdd("test title", "test content")}
          className="h-10 w-10 text-sky-900 cursor-pointer"
        />
      </div>
    </div>
  );
}

export default TodoOverview;
