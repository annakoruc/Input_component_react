import logo from "./logo.svg";
import "./App.css";
import { Input } from "./components/Input";

function App() {
  return (
    <div className="App">
      <Input placeholder="Placeholder" />
      <Input placeholder="Placeholder" error />
      <Input placeholder="Placeholder" disabled />
      <Input placeholder="Placeholder" helperText="Some interesting text" />
      <Input
        placeholder="Placeholder"
        helperText="Some interesting text"
        error
      />
    </div>
  );
}

export default App;
