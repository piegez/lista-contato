import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface Contato {
    id: number;
    name: string;
    email: string;
    phone: string;
}

interface ContactsState {
    contatos: Contato[];
}

const initialState: ContactsState = {
    contatos: [],
}

const contactsSlice = createSlice({
    name: 'contatos',
    initialState,
    reducers: {
        adicionarContato(state, action : PayloadAction<Contato>){
            state.contatos.push(action.payload);
        },
        removerContato(state, action: PayloadAction<number>) {
            state.contatos = state.contatos.filter(contato => contato.id !== action.payload)
        },
        editarContato(state, action: PayloadAction<Contato>) {
            const index = state.contatos.findIndex(contato => contato.id === action.payload.id);
            if (index !== -1) {
                state.contatos[index] = action.payload;
            }
        },
    },
});

export const { adicionarContato, removerContato, editarContato } = contactsSlice.actions;
export default contactsSlice.reducer;