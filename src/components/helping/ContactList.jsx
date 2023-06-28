import React from 'react';
import ContactsListItem from './ContactListItem';

const ContactList = () => {
  const contacts = [
    {
      id: 1,
      firstName: "Firstname 1",
      lastName: "Lastname contact 1",
      adresse: "7 rue jussieu",
      relation: "Fille de claudine",
      age: '32'
    },
    {
      id: 2,
      firstName: "Firstname 2",
      lastName: "Lastname contact 2",
      adresse: "7 rue jussieu",
      relation: "Fille de claudine",
      age: '32'
    },
    {
      id: 3,
      firstName: "Firstname 3",
      lastName: "Lastname contact ",
      adresse: "7 rue jussieu",
      relation: "Fille de claudine",
      age: '32'
    }
  ];

  return (
    <div>
      {contacts.map(contact => (
        <ContactsListItem contact={contact} key={contact.id} />
      ))}
    </div>
  );
}

export default ContactList;
