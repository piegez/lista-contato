import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { adicionarContato } from "./contatosSlice";
import { Botao, Input } from "../../components/styledComponents";

const AdicionarContato: React.FC = () => {
  const dispatch = useDispatch();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");

  const acertarAdicionarContato = () => {

    dispatch(adicionarContato({ id: Date.now(), name, email, phone }));
    setName("");
    setEmail("");
    setPhone("");
  };
  return (
    <div>
      <h2>Adicionar Contato</h2>
      <Input
        type="text"
        placeholder="Nome"
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
        placeholder="Telefone"
        value={phone}
        onChange={(e) => setPhone(e.target.value)}
      />

      <Botao onClick={acertarAdicionarContato}>Adicionar Contato</Botao>
    </div>
  );
};

export default AdicionarContato;
