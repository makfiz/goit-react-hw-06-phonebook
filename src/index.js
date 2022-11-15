import React from 'react';
import ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";

import { App } from 'components/App';
import { ThemeProvider } from 'styled-components';
import { theme } from 'components/utils/theme'
import {store} from "./redux/store"
import './index.css';


ReactDOM.createRoot(document.getElementById('root')).render(
  <ThemeProvider theme={theme}>
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  </ThemeProvider>
);
