import iconDelete from "../../../assets/icon-delete.svg"


export const Cards = ({ transaction, functionDeleteCard }) => {
  const { description, type, value } = transaction;

  return (
    <li>
      <div className="card-div-description">
        <h3>{description}</h3>
        <p>{type}</p>
      </div>
      <div className="card-div-value-button">
        <p>R$ {value}</p>
        <button onClick={() => functionDeleteCard(description)}>
          <img src={iconDelete} alt="lixeira" />
        </button>
      </div>
    </li>
  );
};
