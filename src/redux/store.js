// import { createStore } from "redux";
// import { devToolsEnhancer } from "@redux-devtools/extension";
// import { rootReducer } from "./reducer";



// const  enhancer = devToolsEnhancer();
// export const store = createStore(rootReducer, enhancer)


import { configureStore } from "@reduxjs/toolkit";
import { contactsReducer} from "./contactsSlice";
import {filterReducer } from "./filterSlice";
import storage from 'redux-persist/lib/storage'
import {
  persistStore,
  persistReducer,
  FLUSH,
  REHYDRATE,
  PAUSE,
  PERSIST,
  PURGE,
  REGISTER,
} from 'redux-persist';


const persistConfig = {
  key: 'contacts',
  storage,
}


const persistedReducer = persistReducer(persistConfig, contactsReducer)



export const store = configureStore({
    reducer: {
        contacts: persistedReducer,
        filter: filterReducer,
    },
     middleware(getDefaultMiddleware) {
    return getDefaultMiddleware({
      serializableCheck: {
        ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
      },
    });
  },
});

export const persistor = persistStore(store)