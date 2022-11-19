export const Cards = ({ transaction, functionDeleteCard }) => {
  const { description, type, value } = transaction;

  return (
    <li>
      <div>
        <h3>{description}</h3>
        <p>{type}</p>
      </div>
      <div>
        <p>{value}</p>
        <button onClick={() => functionDeleteCard(description)}>Delete</button>
      </div>
    </li>
  );
};
