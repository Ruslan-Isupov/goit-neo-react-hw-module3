import { useState, useEffect } from "react";
import css from "./App.module.css";
import ContactForm from "./components/ContactForm/ContactForm";
import SearchBox from "./components/SearchBox/SearchBox";
import ContactList from "./components/ContactList/ContactList";

function App() {
  const [contacts, setContacts] = useState(() => {
    const localStorageContacts = localStorage.getItem("localContacts");

    return JSON.parse(localStorageContacts) ?? [];
  });
  const [filter, setFilter] = useState("");

  useEffect(() => {
    localStorage.setItem("localContacts", JSON.stringify(contacts));
  }, [contacts]);

  const creatingContact = (contact) => {
    setContacts((prevContacts) => [...prevContacts, contact]);
  };

  const filteredContacts = contacts.filter((contact) =>
    contact.name.toLowerCase().includes(filter)
  );

  const deleteContact = (id) => {
    const deletedContact = contacts.filter((contact) => {
      return contact.id !== id;
    });
    setContacts(deletedContact);
  };

  return (
    <div className={css.mainWrapper}>
      <h2 className={css.title}>Phonebook</h2>
      <ContactForm creatingContact={creatingContact} />
      <SearchBox valueContacts={filter} setFilter={setFilter} />
      <ContactList contacts={filteredContacts} del={deleteContact} />
    </div>
  );
}
export default App;
