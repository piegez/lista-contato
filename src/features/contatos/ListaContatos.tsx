import React from "react";
import { useSelector } from "react-redux";
import { RootState } from '../../app/store'
import ItemContato from "./ContactItem";

const ListaContatos: React.FC = () => {
    const contatos = useSelector((state: RootState) => state.contatos.contatos);

    return (
        <div>
            <h2>Lista de Contatos</h2>
            {contatos.map(contato => (
                <ItemContato
                key={contato.id}
                id={contato.id}
                name={contato.name}
                email={contato.email}
                phone={contato.phone}
                />
            ))}
        </div>
    )
}

export default ListaContatos