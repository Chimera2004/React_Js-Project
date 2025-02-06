import { useState } from "react";
import Alert from "./components/Alert";
import Button from "./components/Button";
import ListGroup from "./components/ListGroup";

function App() {
  let items = ["new York", "Berlin", "Tokyo", "Paris", "Moscow"];
  const handleSelectItem = (item: string) => {
    console.log(item);
  };
  const [alertVisible, setAlert] = useState(false);
  return (
    <div>
      <ListGroup
        items={items}
        heading={"Cities"}
        onSelectItem={handleSelectItem}
      />{" "}
      {alertVisible && <Alert onClose={() => setAlert(false)}>My Alert</Alert>}
      <Button color="danger" onClick={() => setAlert(true)}>
        My Button
      </Button>
    </div>
  );
}

export default App;
