import { createSlice } from "@reduxjs/toolkit";
import shortid from 'shortid'

const contactsInitialState = {
    items:[]
}

const contactsSlice = createSlice({
    name: "contacts",
    initialState: contactsInitialState,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.items.push(action.payload)
            },
            prepare(name, number) {
                return {
                    payload: {
                        id: shortid.generate(),
                        name,
                        number,
                    }
                }       
            },
        },
        deleteContact(state, action) {
            const index = state.items.findIndex(contact => contact.id === action.payload)
            state.items.splice(index, 1);
        }
    }
})

export const { addContact, deleteContact} = contactsSlice.actions;
export const contactsReducer = contactsSlice.reducer;