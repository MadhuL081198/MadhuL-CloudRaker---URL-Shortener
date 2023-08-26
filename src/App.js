import AddUrlComponent from "./Components/AddUrlComponent"
import ViewUrlComponent from "./Components/ViewUrlComponent";

function App() {
  return (
    <div className="mt-20 flex flex-col justify-center items-center w-screen">
      <AddUrlComponent />
      <ViewUrlComponent />
    </div>
  );
}

export default App;