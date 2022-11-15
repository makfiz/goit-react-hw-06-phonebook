const initialState = {
  contacts: [
    {id: "DYBcaxL8I", name: "qweqwe", number: "12312312" },
    {id: "DYZcaxL8I", name: "qwe", number: "321321321" },
    {id: "DYUcaxL8I", name: "qqq", number: "123123123" },
    {id: "DYScaxL8I", name: "www", number: "2222222" },
    {id: "DYWcaxL8I", name: "qweewq", number: "3333333" },
  ],
  filter:"" 
};


export const rootReducer = (state = initialState, action) => {
    switch (action.type) {
        case "contacts/addContact": {
            return {
                ...state,
                contacts:[...state.contacts, action.payload,],
            }
        }
        
        case "contacts/deleteContact": {
            return {
                ...state,
                contacts:[...state.contacts.filter(contact => contact.id !==action.payload)]
            }
            
        }
        
        case "filter/filterByValue": {
            return {
                ...state,
                filter:action.payload
            }
        }   
        
        default:
            return state;
    }
}