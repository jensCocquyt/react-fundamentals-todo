import format from "date-fns/format";
import { useState } from "react";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";
import { Todo } from "./todo.interface";

function TodoOverview() {
  const [todoItems, setTodoItems] = useState<Todo[]>([]);
  const [itemToEdit, setItemToEdit] = useState<Todo | null>(null);
  const [showSubmitForm, setShowSubmitForm] = useState<boolean>(true);

  function handleItemAdd(title: string, content: string) {
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

  function handleItemEdit(id: number, title: string, content: string) {
    const indexToEdit = todoItems.findIndex((item) => item.id === id);
    if (indexToEdit < 0) {
      return;
    }
    const editedItems = [...todoItems];
    editedItems[indexToEdit] = {
      id,
      title,
      content,
      date: format(new Date(), "dd/MM/yyyy"),
    };
    setTodoItems(editedItems);
  }

  function handleSubmit(title: string, content: string) {
    itemToEdit
      ? handleItemEdit(itemToEdit.id, title, content)
      : handleItemAdd(title, content);
    closeForm();
  }

  function handleStartEdit(todo: Todo) {
    setItemToEdit(todo);
    openForm();
  }

  function closeForm() {
    setShowSubmitForm(false);
    setItemToEdit(null);
  }

  function openForm() {
    setShowSubmitForm(true);
  }

  return (
    <div className="flex w-1/2 m-auto gap-4 flex-col p-4">
      <h2 className="text-center text-xl">Todo Items</h2>
      <TodoList
        todoItems={todoItems}
        onDeleteItem={handleItemDelete}
        onEditItem={handleStartEdit}
        disabled={showSubmitForm}
      />
      <TodoForm
        onSubmit={handleSubmit}
        itemToEdit={itemToEdit}
        showSubmitForm={showSubmitForm}
        onClose={closeForm}
        onOpen={openForm}
      />
    </div>
  );
}

export default TodoOverview;
