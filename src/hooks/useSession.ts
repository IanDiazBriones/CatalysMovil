import axios from "axios";

const REQUEST_URL = "api/me";

export const useSession = (navigation) => {
   const getMe = () => axios.get(`${REQUEST_URL}`,{params:{}});
    const checkAxiosError = error => {
        if (error.response && error.response.status === 401) navigation.navigate('Login');
    }

    getMe().then(response => console.log("session ok"))
        .catch(error => checkAxiosError(error));
}
