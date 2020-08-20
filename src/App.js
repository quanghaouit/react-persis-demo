// Imports: Dependencies
import React from 'react';
import { PersistGate } from 'redux-persist/es/integration/react'
import { Provider } from 'react-redux';
import './App.css';

// Imports: Screens
import Counter from './screens/Counter';

// Imports: Redux Persist Persister
import { store, persistor } from './redux/store/store';

// React Native: App
const App = () => {
  return (
    // Redux: Global Store
    <Provider store={store}>
      <PersistGate 
        loading={null}
        persistor={persistor}
      >
        <Counter />
      </PersistGate>
    </Provider>
  );
};

export default App