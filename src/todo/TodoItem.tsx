import { PencilSquareIcon, TrashIcon } from "@heroicons/react/24/outline";
import { Todo } from "./todo.interface";

function TodoItem({
  todo,
  disabled,
  onDeleteItem,
  onEditItem,
}: {
  todo: Todo;
  disabled: boolean;
  onDeleteItem: (id: number) => void;
  onEditItem: (todo: Todo) => void;
}) {
  return (
    <div className="rounded-md border border-grey px-3 py-1">
      <div className="flex justify-between items-center pb-2	">
        <h3 className="text-xl uppercase text-sky-900">{todo.title}</h3>
        {!disabled && (
          <div className="flex gap-1 ">
            <PencilSquareIcon
              className="h-5 w-5 text-sky-900 cursor-pointer"
              onClick={() => onEditItem(todo)}
            />
            <TrashIcon
              className="h-5 w-5 text-sky-900 cursor-pointer"
              onClick={() => onDeleteItem(todo.id)}
            />
          </div>
        )}
      </div>

      <div className="text-sm  text-gray-800 italic">
        {todo.content ? todo.content : <span>No extra info given</span>}
      </div>

      <div className="text-xs text-right text-gray-400">({todo.date})</div>
    </div>
  );
}

export default TodoItem;
