import { createStore, applyMiddleware } from "redux"
import rootReducer from "reducers"
import thunk from "redux-thunk"
import logger from "redux-logger"
import { persistStore, persistReducer } from "redux-persist"
import { createWrapper } from "next-redux-wrapper"


const makeConfiguredStore = (reducer, state) =>
  createStore(
    reducer, 
    state, 
    applyMiddleware(thunk, logger))

const createAppStore = (initialState) => {
  const isClient = typeof window !== "undefined"
  let store

  // We will persist store for client only
  if (isClient) {
    const storage = require("redux-persist/lib/storage").default
    const persistConfig = { key: "root", storage }
    const persistedReducer = persistReducer(
      persistConfig, rootReducer)

    store = makeConfiguredStore(persistedReducer, initialState)

    store.__PERSISTOR = persistStore(store)
  } else {
    store = makeConfiguredStore(rootReducer, {})
  }

  return store
}

export const wrapper = createWrapper(
  createAppStore, 
  // { debug: true }
)