import logo from './logo.svg';
import './App.css';


import { createStore } from 'redux';
//import itemReducer from './reducers/itemReducer';
import { Provider } from 'react-redux';
import MyRoutes from './MyRoutes';
//import cartReducer from './reducers/cartReducer';
//import rootReducer from './reducers/rootReducer';
import finalReducer from './reducers/finalRootReducers';

//to store data in localstorage
import { persistStore, persistReducer } from 'redux-persist'
import storage from 'redux-persist/lib/storage'
import { PersistGate } from 'redux-persist/integration/react';


//const store = createStore(itemReducer)
//const store = createStore(cartReducer)
//const store=createStore(rootReducer)
const store = createStore(finalReducer)

function App() {
  const my_persistConfig = {
    key:'root',
    storage,
  }

  const my_persistedReducer = persistReducer(my_persistConfig,finalReducer)

  const  my_store = createStore(my_persistedReducer)

  const my_persistor = persistStore(my_store)


  return (
   // <GlobalcontextProvider>
   <Provider store={my_store}>
    <PersistGate persistor={my_persistor}>
      <MyRoutes/>
    </PersistGate>
    </Provider>
    
  );
}

export default App;
