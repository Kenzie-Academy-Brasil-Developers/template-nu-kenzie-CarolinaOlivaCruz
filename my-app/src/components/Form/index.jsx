import { useState } from "react";

export const Form = ({ functionAddCard, functionDeleteCard }) => {
  const [formData, setFormData] = useState({
    description: "",
    type: "Entrada",
    value: "",
  });

  const submit = (event) => {
    event.preventDefault();
    functionAddCard(formData);
    setFormData({
      description: "",
      type: "Entrada",
      value: "",
    });
  };

  return (
    <form onSubmit={submit} className="Container-Form-Submit">
      <div className="Form-Description">
        <label htmlFor="">Descrição</label>
        <input
          type="text"
          value={formData.description}
          onChange={(event) =>
            setFormData({ ...formData, description: event.target.value })
          }
          placeholder="Digite aqui sua descrição"
        ></input>
        <p>Ex: Compra de roupas</p>
      </div>
      <div>
        <label htmlFor="">Valor</label>
        <input
          type="text"
          value={formData.value}
          onChange={(event) =>
            setFormData({ ...formData, value: parseInt(event.target.value) })
          }
          placeholder="00,00"
        ></input>
      </div>
      <div>
        <label htmlFor="">Tipo de valor</label>
        <select
          defaultValue={formData.type}
          onChange={(event) => ({ ...formData, type: event.target.value })}
        >
          <option value="Entrada">Entrada</option>
          <option value="Saída">Saída</option>
        </select>
      </div>
      <button type="submit">Inserir valor</button>
    </form>
  );
};
