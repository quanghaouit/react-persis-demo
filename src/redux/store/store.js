// Imports: Dependencies
import { createStore, applyMiddleware } from 'redux';
import { persistStore, persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage'

// Imports: Redux
import rootReducer from '../reducers/index';

// Middleware: Redux Persist Config
const persistConfig = {
  // Root?
  key: 'root',
  // Whitelist (Save Specific Reducers),
  storage: storage,// define which storage to use
  whitelist: [
    'authReducer',
  ],
  // Blacklist (Don't Save Specific Reducers)
  blacklist: [
    'counterReducer',
  ],
};

// Middleware: Redux Persist Persisted Reducer
const persistedReducer = persistReducer(persistConfig, rootReducer)

// Redux: Store
const store = createStore(
  persistedReducer,
  applyMiddleware(),
);

// Middleware: Redux Persist Persister
let persistor = persistStore(store);

// Exports
export {
  store,
  persistor,
};