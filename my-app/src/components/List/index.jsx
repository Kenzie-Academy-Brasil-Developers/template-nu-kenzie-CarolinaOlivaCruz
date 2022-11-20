import { Cards } from "./Cards";

export const List = ({ listTransactions, filterCards, functionDeleteCard }) => {
  return (
    <>
      <div className="container-button-nav">
        <h3>Resumo financeiro</h3>
        <nav className="nav-button-filter">
          <button
            value="todos"
            onClick={(event) => filterCards(event.target.value)}
          >
            Todos
          </button>
          <button
            value="entrada"
            onClick={(event) => filterCards(event.target.value)}
          >
            Entradas
          </button>
          <button
            value="saída"
            onClick={(event) => filterCards(event.target.value)}
          >
            Saídas
          </button>
        </nav>
      </div>
      <div>
        <ul className="container-list-cards">
          {listTransactions.map((transaction, index) => (
            <Cards
              key={index}
              transaction={transaction}
              functionDeleteCard={functionDeleteCard}
            />
          ))}
        </ul>
      </div>
    </>
  );
};
