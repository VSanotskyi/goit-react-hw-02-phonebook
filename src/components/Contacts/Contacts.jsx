import Contact from './Contact/Contact';

export default function Contacts({ contacts, deleteContact }) {
  return (
    <>
      <h3>Contacts</h3>
      <ul>
        {
          contacts().map(({ id, name, number }) => (
            <li key={id}>
              <Contact
                id={id}
                name={name}
                number={number}
                deleteContact={deleteContact}
              />
            </li>
          ))
        }
      </ul>
    </>
  );
}
