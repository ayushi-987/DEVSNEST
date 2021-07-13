
import Button from "./Button";

function App() {
  return (
    <div className="App">
      <div className="heading">
      There are 4 counter component instances that each manage their own state.
      </div>
      <div>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      <Button></Button>
      </div>
    </div>
  );
}

export default App;