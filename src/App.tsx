import "./styles/default.scss";

import Header from "./views/header";

import "./App.scss";
import Accordion from "./components/accordion";
import Checkbox from "./components/checkbox";
import { useState } from "react";
import Footer from "./views/footer";

function App() {
  const testItems = [
    { name: "Item 1", title: "Title 1", overview: "Overview 1", episode_count: "3" },
    { name: "Item 2", title: "Title 2", overview: "Overview 2", episode_count: "5" },
    { name: "Item 3", title: "Title 3", overview: "Overview 3", episode_count: "0" },
    { name: "Item 4", title: "Title 4", overview: "Overview 4", episode_count: "2" },
    { name: "Item 5", title: "Title 5", overview: "Overview 5", episode_count: "1" },
  ];
  const [isChecked, setIsChecked] = useState(false);
  return (
    <>
      <Header title="Ministry of Defence" />
      <div className="container">
        <title>Ministry of Defence</title>

        <Accordion
          items={testItems}
          label="Test Accordion"
        />
        <Checkbox
          id="waste"
          name="waste"
          label="Waste from animal carcasses"
          onChange={() => setIsChecked(!isChecked)}
          checked={isChecked}
          required
        />
      </div>
      <Footer title="Ministry of Defence" />
    </>
  );
}

export default App;
