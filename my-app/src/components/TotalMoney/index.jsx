export const TotalMoney = ({ contador }) => {
  return (
    <div className="container-total">
      <h3>
        Valor total: <span>${contador}</span>
      </h3>
      <p>O valor se refere ao saldo</p>
    </div>
  );
};
