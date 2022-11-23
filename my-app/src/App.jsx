import { useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home/Home";
import "./styles/globalStyles.css";
import "./styles/button.css";

// Detalhes que faltam:
// css responsivo

export function App() {
  const [listTransactions, setListTransactions] = useState([]);
  const [filter, setFilter] = useState(listTransactions);

  const addTransaction = (transactionData) => {
    const data = {
      ...transactionData,
      id: listTransactions.length,
    };
    setListTransactions([...listTransactions, data]);
    setFilter([...listTransactions, data]);
  };

  const deleteTransaction = (id) => {
    const newList = listTransactions.filter(
      (transaction) => transaction.id !== id
    );
    setListTransactions(newList);
    setFilter(newList);
  };

  const filterCards = (buttonValue) => {
    if (buttonValue === "todos") {
      setFilter(listTransactions);
    } else {
      const filterButton = listTransactions.filter(
        (element) => element.type.toLowerCase() === buttonValue.toLowerCase()
      );
      setFilter(filterButton);
    }
  };

  const contador = listTransactions.reduce((accumulator, currentValue) => {
    if (currentValue.type === "Entrada") {
      return accumulator + currentValue.value;
    } else {
      return accumulator - currentValue.value;
    }
  }, 0);

  const [isHome, setIsHome] = useState(true);
  const togglePage = () => (isHome ? setIsHome(false) : setIsHome(true));

  return (
    <div>
      {isHome ? (
        <Home>
          <button type="button" className="button-go" onClick={togglePage}>
            Iniciar
          </button>
        </Home>
      ) : (
        <Dashboard
          listTransactions={listTransactions}
          filter={filter}
          functionAddCard={addTransaction}
          functionDeleteCard={deleteTransaction}
          filterCards={filterCards}
          contador={contador}
        >
          <button
            type="button"
            className="button-come-back"
            onClick={togglePage}
          >
            Início
          </button>
        </Dashboard>
      )}
    </div>
  );
}
