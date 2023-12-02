export default function Contact({ id, name, number, deleteContact }) {
  return (
    <>
      <p>Name: {name}</p>
      <p>Number: {number}</p>
      <button onClick={() => deleteContact(id)}>
        delete
      </button>
    </>
  );
}
