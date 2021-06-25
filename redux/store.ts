import { createStore, applyMiddleware, combineReducers, Action, Store, AnyAction } from "redux";
import { createWrapper, HYDRATE, MakeStore } from "next-redux-wrapper";
import thunkMiddleware from "redux-thunk";
import { rootReducer } from './reducers';
import { RootState } from "./types";

export interface StoreWithPersistor extends Store {
  __persistor: any;
}

const bindMiddleware = (middleware: any) => {
  if (process.env.NODE_ENV !== 'production') {
    const { composeWithDevTools } = require('redux-devtools-extension');
    return composeWithDevTools(applyMiddleware(...middleware));
  }
  return applyMiddleware(...middleware);
}

const makeStore = ({ isServer }) => {
  if (isServer) {
    return createStore(rootReducer, bindMiddleware([thunkMiddleware]));
  } else {
    const { persistStore, persistReducer } = require("redux-persist");
    const storage = require("redux-persist/lib/storage").default;

    const persistConfig = {
      key: "nextjs",
      whitelist: ["cart", 'fromClient'],
      storage,
    };

    const persistedReducer = persistReducer(persistConfig, rootReducer);

    const store = createStore(
      persistedReducer,
      bindMiddleware([thunkMiddleware])
    ) as Store & { __persistor: any };

    store.__persistor = persistStore(store);

    return store;
  }
};

export const wrapper = createWrapper(makeStore as MakeStore<Store<RootState, AnyAction>>);