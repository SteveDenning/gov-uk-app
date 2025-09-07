import "./styles/default.scss";

import Header from "./views/header";

import "./App.scss";
import Accordion from "./components/accordion";
import Checkbox from "./components/checkbox";
import { useEffect, useState } from "react";
import Footer from "./views/footer";

function App() {
  const [user, setUser] = useState({
    name: "",
    email: "j",
  });
  const testItems = [
    { name: "Item 1", title: "Title 1", overview: "Overview 1", episode_count: "3" },
    { name: "Item 2", title: "Title 2", overview: "Overview 2", episode_count: "5" },
    { name: "Item 3", title: "Title 3", overview: "Overview 3", episode_count: "0" },
    { name: "Item 4", title: "Title 4", overview: "Overview 4", episode_count: "2" },
    { name: "Item 5", title: "Title 5", overview: "Overview 5", episode_count: "1" },
  ];

  const mockUsers = [
    { id: 1, name: "Alice Johnson", email: "alice.johnson@example.com" },
    { id: 2, name: "Bob Smith", email: "bob.smith@example.com" },
    { id: 3, name: "Charlie Nguyen", email: "charlie.nguyen@example.com" },
    { id: 4, name: "Diana Patel", email: "diana.patel@example.com" },
    { id: 5, name: "Ethan Wright", email: "ethan.wright@example.com" },
    { id: 6, name: "Fiona Chen", email: "fiona.chen@example.com" },
    { id: 7, name: "George Kim", email: "george.kim@example.com" },
    { id: 8, name: "Hannah Lee", email: "hannah.lee@example.com" },
    { id: 9, name: "Ian Thompson", email: "ian.thompson@example.com" },
    { id: 11, name: "Julia Martinez", email: "julia.martinez@example.com" },
  ];

  useEffect(() => {
    // Example usage of filter functions
    console.log(filterByNameOrEmail("Alice Johnson")); // Should return all users with 'julia' in their name or email
  }, []);

  // write a function to filter on the array of objects when we pass in only part of the email address
  const filterByEmail = (emailPart: string) => {
    return mockUsers.filter((user) => user.email.toLowerCase().includes(emailPart.toLowerCase()));
  };
  // write a function to filter on the array of objects when we pass in only part of the email address ro teh name field
  const filterByNameOrEmail = (searchTerm: string) => {
    return mockUsers.filter(
      (user) => user.email.toLowerCase().includes(searchTerm.toLowerCase()) || user.name.toLowerCase().includes(searchTerm.toLowerCase()),
    );
  };
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
      <Footer />
    </>
  );
}

export default App;
