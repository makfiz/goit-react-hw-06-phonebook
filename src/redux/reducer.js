// import { combineReducers } from "redux";
// import { createReducer } from "@reduxjs/toolkit";
// import {addContact, deleteContact, filterByValue,} from "./actions"
// const contactsInitialState = [
//     {id: "DYBcaxL8I", name: "qweqwe", number: "12312312" },
//     {id: "DYZcaxL8I", name: "qwe", number: "321321321" },
//     {id: "DYUcaxL8I", name: "qqq", number: "123123123" },
//     {id: "DYScaxL8I", name: "www", number: "2222222" },
//     {id: "DYWcaxL8I", name: "qweewq", number: "3333333" },
//   ]

// const filterInitialState = {
//   value:"" 
// };
// -----------------------------------------------------------------
// export const rootReducer = (state = initialState, action) => {
//     switch (action.type) {
//         case "contacts/addContact": {
//             return {
//                 ...state,
//                 contacts:[...state.contacts, action.payload,],
//             }
//         }
        
//         case "contacts/deleteContact": {
//             return {
//                 ...state,
//                 contacts:[...state.contacts.filter(contact => contact.id !==action.payload)]
//             }
            
//         }
        
//         case "filter/filterByValue": {
//             return {
//                 ...state,
//                 filter:action.payload
//             }
//         }
        
//         default:
//             return state;
//     }
// }

// ------------------------------------------------------------
// export const contactsReducer = (state = contactsInitialState, action) => {
//     switch (action.type) {
//         case "contacts/addContact": {
//             return [...state, action.payload]
//         }
        
//         case "contacts/deleteContact": {
//             return [...state.filter(contact => contact.id !== action.payload)]
         
//         }
            
//         default:
//             return state;
//     }
// }


    
// export const filterReducer = (state = filterInitialState, action) => {
//     switch (action.type) { 
//         case "filter/filterByValue": {
//             return {
//                 ...state,
//                 value:action.payload
//             }
//         }   
        
//         default:
//             return state;
//     }
// }
 // export const rootReducer = combineReducers ({
    // contacts: contactsReducer,
    // filter: filterReducer,
    
// })
// /////////////////////////////////////////////////////////////////////////

// export const contactsReducer = createReducer(contactsInitialState, {
//     // [addContact]: (state, action) => { return [...state, action.payload] },
//      [addContact]: (state, action) => { state.push(action.payload) },
//     // [deleteContact]: (state, action) => { return [...state.filter(contact => contact.id !== action.payload)] },
//     [deleteContact]: (state, action) => { 
//         const index = state.findIndex(contact => contact.id === action.payload)
//         state.splice(index, 1);
//      },
// })

// export const filterReducer = createReducer(filterInitialState, {
//     // [filterByValue]: (state, action) => { return {
//     //             ...state,
//     //             value:action.payload
//     //         } },
//     [filterByValue]: (state, action) => {
//         state.value = action.payload;
//      },
// })