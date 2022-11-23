import { Form } from "../../components/Form";
import { TotalMoney } from "../../components/TotalMoney";
import { List } from "../../components/List";
import logo from "../../assets/logo-dashboard.svg";
import "./style.css";

export const Dashboard = ({
  children,
  filter,
  functionAddCard,
  functionDeleteCard,
  filterCards,
  contador,
}) => {
  return (
    <>
      <header className="app-header">
        <div className="container-header">
          <img src={logo} alt="Logo" />
          {children}
        </div>
      </header>
      <main className="app-main">
        <section className="container-form">
          <Form functionAddCard={functionAddCard}/>
          <TotalMoney contador={contador} />
        </section>
        <section className="container-list">
          <List
            filter={filter}
            filterCards={filterCards}
            functionDeleteCard={functionDeleteCard}
          />
        </section>
      </main>
    </>
  );
};
