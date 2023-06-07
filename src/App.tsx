import "./App.css";
import TodoOverview from "./todo/TodoOverview";

function App() {
  return (
    <>
      <button className=" m-2 p-2 rounded-md  bg-sky-900 text-white">
        theme
      </button>
      <div className="container mx-auto px-4">
        <TodoOverview />
      </div>
    </>
  );
}

export default App;
