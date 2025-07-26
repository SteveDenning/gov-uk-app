import "./styles/default.scss";

import Header from "./views/header";

import "./App.scss";
import Accordion from "./components/accordion";

function App() {
  const testItems = [
    { name: "Item 1", title: "Title 1", overview: "Overview 1", episode_count: "3" },
    { name: "Item 2", title: "Title 2", overview: "Overview 2", episode_count: "5" },
    { name: "Item 3", title: "Title 3", overview: "Overview 3", episode_count: "0" },
    { name: "Item 4", title: "Title 4", overview: "Overview 4", episode_count: "2" },
    { name: "Item 5", title: "Title 5", overview: "Overview 5", episode_count: "1" },
  ];
  return (
    <>
      <Header title="Ministry of Defence" />
      <div className="container">
        <title>Ministry of Defence</title>

        <Accordion
          items={testItems}
          label="Test Accordion"
        />
        <div className="govuk-form-group">
          <fieldset
            className="govuk-fieldset"
            aria-describedby="waste-hint"
          >
            <legend className="govuk-fieldset__legend govuk-fieldset__legend--l">
              <h1 className="govuk-fieldset__heading">Which types of waste do you transport?</h1>
            </legend>
            <div
              id="waste-hint"
              className="govuk-hint"
            >
              Select all that apply
            </div>
            <div
              className="govuk-checkboxes"
              data-module="govuk-checkboxes"
            >
              <div className="govuk-checkboxes__item">
                <input
                  className="govuk-checkboxes__input"
                  id="waste"
                  name="waste"
                  type="checkbox"
                  value="carcasses"
                />
                <label
                  className="govuk-label govuk-checkboxes__label"
                  htmlFor="waste"
                >
                  Waste from animal carcasses
                </label>
              </div>
              <div className="govuk-checkboxes__item">
                <input
                  className="govuk-checkboxes__input"
                  id="waste-2"
                  name="waste"
                  type="checkbox"
                  value="mines"
                />
                <label
                  className="govuk-label govuk-checkboxes__label"
                  htmlFor="waste-2"
                >
                  Waste from mines or quarries
                </label>
              </div>
              <div className="govuk-checkboxes__item">
                <input
                  className="govuk-checkboxes__input"
                  id="waste-3"
                  name="waste"
                  type="checkbox"
                  value="farm"
                />
                <label
                  className="govuk-label govuk-checkboxes__label"
                  htmlFor="waste-3"
                >
                  Farm or agricultural waste
                </label>
              </div>
            </div>
          </fieldset>
        </div>
      </div>
    </>
  );
}

export default App;
