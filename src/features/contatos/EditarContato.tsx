import React, { useState } from "react";
import {  useDispatch } from "react-redux";
import { editarContato } from "./contatosSlice";
import { Botao, Input } from "../../components/styledComponents";


interface EditarContatosProps {
  id: number;
  nomeInicial: string;
  emailInicial: string;
  telInicial: string;
  edicaoCompleta: () => void;
}

const EditarContato: React.FC<EditarContatosProps> = ({
  id,
  nomeInicial,
  emailInicial,
  telInicial,
  edicaoCompleta,
}) => {
  const dispatch = useDispatch();
  const [name, setName] = useState(nomeInicial);
  const [email, setEmail] = useState(emailInicial);
  const [phone, setPhone] = useState(telInicial);

  const realizarEdicaoContato = () => {
    dispatch(editarContato({ id, name, email, phone }));
    edicaoCompleta();
  };

  return (
    <div>
      <h2>Editar contato</h2>
      <Input
        type="text"
        placeholder="Name"
        value={name}
        onChange={(e) => setName(e.target.value)}
      />
      <Input
        type="email"
        placeholder="Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <Input
        type="text"
        placeholder="Phone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />
      
      <Botao onClick={realizarEdicaoContato}>Salvar</Botao>
    </div>
  );
};

export default EditarContato;
