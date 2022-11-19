import { Form } from "../../components/Form";
import { TotalMoney } from "../../components/TotalMoney";
import { List } from "../../components/List";
import logo from "../../assets/logo-dashboard.svg";
import "./style.css";

export const Dashboard = ({
  children,
  listTransactions,
  functionAddCard,
  functionDeleteCard,
  filterCards,
  contador,
}) => {
  return (
    <>
      <header className="App-Header">
        <div className="Container-Header">
          <img src={logo} alt="Logo" />
          {children}
        </div>
      </header>
      <main className="App-Main">
        <section className="Container-Form">
          <Form functionAddCard={functionAddCard} />
          <TotalMoney contador={contador} />
        </section>
        <section className="Container-List">
          <List
            listTransactions={listTransactions}
            filterCards={filterCards}
            functionDeleteCard={functionDeleteCard}
          />
        </section>
      </main>
    </>
  );
};
