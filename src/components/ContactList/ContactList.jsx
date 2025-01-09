import Contact from '../Contact/Contact';
import css from "./ContactList.module.css";
const ContactList = ({ contacts, del }) => {
  return (
    <ul className={css.contactList}>
      {contacts.map(contact => {
        return (
          <li className={css.contactItem} key={contact.id}>
            <Contact
              deleteButton={del}
              name={contact.name}
              number={contact.number}
              id={contact.id}
            />
          </li>
        );
      })}
    </ul>
  );
};

export default ContactList

