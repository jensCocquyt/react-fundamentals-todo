function TodoForm() {
  return (
    <div className="rounded-md border border-grey px-3 py-1 flex w-1/2 m-auto">
      <form className="block w-full">
        <div className="pb-4">
          <label htmlFor="title" className="block text-sky-900  text-sm">
            Title
          </label>
          <input type="text" id="title" className="w-full border border-grey" />
        </div>
        <div className="pb-4">
          <label htmlFor="content" className="block text-sky-900  text-sm">
            Content
          </label>
          <input
            id="content"
            type="textarea"
            className="w-full border border-grey h-20"
          />
        </div>
        <div className="pb-4 text-center">
          <input
            id="todo-save"
            type="submit"
            value="Save todo"
            className=" bg-sky-900 p-2 rounded-md text-white "
          />
        </div>
      </form>
    </div>
  );
}

export default TodoForm;
