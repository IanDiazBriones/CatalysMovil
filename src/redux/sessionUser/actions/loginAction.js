import * as requestFromServer from '../../../axios';
import {actionsRoot} from '../RootRedux';

export const loginAction = (username, password) => {
    return async (dispatch) => {
        dispatch(actionsRoot.setLogging(true));
        dispatch(actionsRoot.setErrorLogin(false));
        if(username) dispatch(actionsRoot.setUser({fullname: username}));
        else dispatch(actionsRoot.setErrorLogin(true));
        dispatch(actionsRoot.setLogging(false));
        /*try {
          const response = await requestFromServer.login(username, password);
          if (response.data) {
            const accessToken = response.data.accessToken;
            dispatch(actionsRoot.setAccessToken(accessToken));
            dispatch(actionsRoot.setUser(response.data));
            dispatch(actionsRoot.setErrorLogin(false));
          } else {
            dispatch(actionsRoot.setErrorLogin(true));
          }
        } catch (err) {
          dispatch(actionsRoot.setErrorLogin(true));
          console.log('catch', err);
          // throw new Error('Unable to establish a login session.'); // here I'd like to send the error to the user instead
        } finally {
          dispatch(actionsRoot.setLogging(false));
        }*/
    };
};
