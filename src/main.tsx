import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App.tsx';
import './styles/index.scss';
import { Provider } from 'react-redux';
import { store } from './store/store.ts';
import { PersistGate } from 'redux-persist/integration/react';
import { Loader } from 'src/components/loader';
import { persistStore } from 'redux-persist';

const persistor = persistStore(store);

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor} loading={<Loader />}>
        <App />
      </PersistGate>
    </Provider>
  </React.StrictMode>
);
