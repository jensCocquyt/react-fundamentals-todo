function TodoForm() {
  return (
    <div className="rounded-md border border-grey px-3 py-1 flex w-1/2 m-auto">
      <form className="block w-full">
        <div className="pb-4">
          <label className=" block text-sky-900  text-sm">Title</label>
          <input type="text" className="w-full border border-grey" />
        </div>
        <div className="pb-4">
          <label className="block text-sky-900  text-sm">Content</label>
          <input type="textarea" className="w-full border border-grey h-20" />
        </div>
        <div className="pb-4 text-center">
          <input
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
