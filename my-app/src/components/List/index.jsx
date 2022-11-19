import { Cards } from "./Cards";

export const List = ({ listTransactions, filterCards, functionDeleteCard }) => {
  return (
    <section>
      <h3>Resumo financeiro</h3>
      <nav>
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
      <div>
        <ul>
          {listTransactions.map((transaction, index) => (
            <Cards
              key={index}
              transaction={transaction}
              functionDeleteCard={functionDeleteCard}
            />
          ))}
        </ul>
      </div>
    </section>
  );
};
