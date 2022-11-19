import logo from "../../assets/logo-home.svg";
import imgPrincipal from "../../assets/img-principal.svg";
import "./style.css"

export const Home = ({children}) => {
  return (
    <>
      <section>
        <img src={logo} className="App-logo" alt="logo" />
        <div>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          {children}
        </div>
      </section>
      <section>
      <img src={imgPrincipal} className="App-logo" alt="logo" />
      </section>
    </>
  );
};
