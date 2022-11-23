import logo from "../../assets/logo-home.svg";
import imgPrincipal from "../../assets/img-principal.svg";
import "./style.css"

export const Home = ({children}) => {
  return (
    <div className="page-home">
      <section className="section-description-app">
        <img src={logo} className="app-logo" alt="logo" />
        <div>
          <h1>Centralize o controle das suas finanças</h1>
          <p>de forma rápida e segura</p>
          {children}
        </div>
      </section>
      <section>
      <img src={imgPrincipal} className="app-img-home" alt="logo" />
      </section>
    </div>
  );
};
