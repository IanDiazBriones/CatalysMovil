import {persistReducer} from 'redux-persist';
import AsyncStorage from '@react-native-community/async-storage';
import {loginAction} from './actions/loginAction';

const initialStateRoot = {
    user: undefined,
    accessToken: undefined,
    logging: false,
    errorLogin:false
};
const persistConfig = {
    key: 'steward-tec-app',
    storage: AsyncStorage,
};
export const rootReducer = persistReducer(
    persistConfig,
    (state = initialStateRoot, action) => {
        switch (action.type) {
            case 'setUser': {
                const {user} = action.payload;
                return {...state, user: user};
            }
            case 'setLogging': {
                const {logging} = action.payload;
                return {...state, logging: logging};
            }
            case 'setErrorLogin': {
                const {errorLogin} = action.payload;
                return {...state, errorLogin: errorLogin};
            }
            case 'setAccessToken': {
                const {accessToken} = action.payload;
                return {...state, accessToken: accessToken};
            }
            case 'logout': {
                return {...initialStateRoot};
            }
            default:
                return state;
        }
    },
);

export const actionsRoot = {
    setUser: user => ({type: 'setUser', payload: {user}}),
    setLogging: logging => ({type: 'setLogging', payload: {logging}}),
    setErrorLogin: errorLogin => ({type: 'setErrorLogin', payload: {errorLogin}}),
    setAccessToken: accessToken => ({type: 'setAccessToken', payload: {accessToken}}),
    logout: () => ({type: 'logout'}),
    login:loginAction
};


