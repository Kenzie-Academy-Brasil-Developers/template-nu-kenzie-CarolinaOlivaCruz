import { useState } from "react";
import { Dashboard } from "./pages/Dashboard";
import { Home } from "./pages/Home/Home";
import "./styles/globalStyles.css";
import "./styles/button.css";
import { transactionsData } from "./data/data";

export function App() {
  const [listTransactions, setListTransactions] = useState(transactionsData);

  const addTransaction = (transactionData) => {
    setListTransactions([...listTransactions, transactionData]);
  };

  const deleteTransaction = (transactionDescription) => {
    const newList = listTransactions.filter(
      (transaction) => transaction.description !== transactionDescription
    );
    setListTransactions(newList);
  };

  const filterCards = (buttonValue) => {
    if (buttonValue === "todos") {
      setListTransactions(listTransactions);
    } else {
      const filterButton = listTransactions.filter(
        (element) => element.type === buttonValue
      );
      setListTransactions(filterButton);
    }
  };

  const contador = listTransactions.reduce(
    (accumulator, currentValue) => accumulator + currentValue.value,
    0
  );

  const [isHome, setIsHome] = useState(true);
  const togglePage = () => (isHome ? setIsHome(false): setIsHome(true));
  
  return (
    <div className="App">
      {isHome ? (
        <Home>
          <button type="button" className="ButtonGo" onClick={togglePage}>
            Iniciar
          </button>
        </Home>
      ) : (
        <Dashboard
          listTransactions={listTransactions}
          setListTransactions={setListTransactions}
          functionAddCard={addTransaction}
          functionDeleteCard={deleteTransaction}
          filterCards={filterCards}
          contador={contador}
        >
          <button type="button" className="ButtonComeBack" onClick={togglePage}>
            Início
          </button>
        </Dashboard>
      )}
    </div>
  );
}


// Detalhes que faltam:
// css
// backgroud-color pages
// bug filter
// bug render de cards novos e delete