import { configureStore, getDefaultMiddleware } from '@reduxjs/toolkit';
import contactsReducer from '../contacts/contacts-reducer';
import logger from 'redux-logger';
// import thunk from 'redux-thunk';

const middleware = [...getDefaultMiddleware(), logger];

const store = configureStore({
  reducer: {
    contacts: contactsReducer,
  },
  middleware,
  devTools: process.env.NODE_ENV === 'development',
});

export default store;

/* vanilla redux logic */
// const rootReducer = combineReducers({
//   contacts: contactsReducer,
// });

// const store = createStore(rootReducer, devToolsEnhancer());
