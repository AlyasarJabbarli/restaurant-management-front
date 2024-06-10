import axios from "axios";
import { changeStateValue } from "../redux/MainReducer";
import { base_url } from "../api";



export const login = (email, password) => async dispatch => {
    try {
        const response = await axios.post(`${base_url}/api/login`,
            { email, password },
            {
                headers: {
                    'Content-Type': 'application/json'
                }
            });
        const token = response.data.token;
        dispatch(changeStateValue({ name: 'token', value: token }));
        localStorage.setItem('token', token); // Store token in local storage
    } catch (error) {
        console.log(error);
    }
}