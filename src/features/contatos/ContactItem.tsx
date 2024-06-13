import React, {useState} from "react";
import { useDispatch } from "react-redux";
import { removerContato } from "./contatosSlice";
import { ItemLista, Botao } from "../../components/styledComponents";
import EditarContato from "./EditarContato";

interface ItemContatoProps {
    id: number;
    name: string;
    email: string;
    phone: string;
}

const ItemContato: React.FC<ItemContatoProps> = ({ id, name, email, phone }) => {
    const dispatch = useDispatch();
    const [estaEditando, setEstaEditando] = useState(false);

    const inserirRemocaoContato = () => {
        dispatch(removerContato(id));
    };

    return (
        <ItemLista>
            {estaEditando ? (
                <EditarContato
                id={id}
                nomeInicial={name}
                emailInicial={email}
                telInicial={phone}
                edicaoCompleta={() => setEstaEditando(false)}
                />
            ) : (
                <>
                <div>
                    <p>{name}</p>
                    <p>{email}</p>
                    <p>{phone}</p>
                </div>
                <div>
                    <Botao onClick={() => setEstaEditando(true)}>Editar</Botao>
                    <Botao onClick={inserirRemocaoContato}>Remover</Botao>
                </div>
                </>
            )}
        </ItemLista>
    )
}

export default ItemContato