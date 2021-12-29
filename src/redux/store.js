import {persistStore} from "redux-persist";
import {rootReducer} from "./sessionUser/RootRedux"
import {applyMiddleware, createStore} from 'redux';
import thunk from 'redux-thunk'

const store = createStore(rootReducer,applyMiddleware(thunk))

export const persistor = persistStore(store);

export default store;
