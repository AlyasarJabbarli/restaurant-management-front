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
        localStorage.setItem('token', token);
    } catch (error) {
        console.log(error);
    }
}

export const logOut = () => async (dispatch) => {
    try {
        await axios.post(`${base_url}/api/logout`, {}, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        dispatch(changeStateValue({ name: 'token', value: '' }));
        localStorage.removeItem('token');
    } catch (error) {
        console.error('Logout error', error);
    }
};



export const getTableById = (id) => async (dispatch) => {
    try {
        const response = await axios.get(`${base_url}/api/tables/${id}`, {
            headers: {
                'Authorization': `Bearer ${localStorage.getItem('token')}`
            }
        });
        dispatch(changeStateValue({ name: 'tableDetail', value: response.data }));
    } catch (error) {
        console.error('Table get by id error', error);
    }
};



export const getRestaurants = () => async dispatch => {
    try {
        const response = await axios.get(`${base_url}/api/restaurants`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            dispatch(changeStateValue({ name: 'restaurants', value: response.data }));
    
    } catch (error) {
        console.log(error);
    }
}


export const addRestaurant = (data) => async dispatch => {
    try {
        await axios.post(`${base_url}/api/restaurants`,
            data,
            {
                headers: {
                    'Content-Type': 'application/json',
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            return "success"
    } catch (error) {
        return "error"
    }
}

export const getRestaurantById = (id) => async dispatch => {
    try {
        const response = await axios.get(`${base_url}/api/restaurants/${id}`,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`
                }
            });
            dispatch(changeStateValue({ name: 'restaurant', value: response.data }));
        console.log(response.data);
    } catch (error) {
        console.log(error);
    }
}


export const updateRestaurant = (id, data) => async dispatch => {
    try {
        console.log(data);
        const response = await axios.put(`${base_url}/api/restaurants/${id}`,
            data,
            {
                headers: {
                    'Authorization': `Bearer ${localStorage.getItem('token')}`,
                    'Content-Type': 'application/json'
                }
            });
            dispatch(changeStateValue({ name: 'restaurant', value: response.data }));
            return "success"
    } catch (error) {
        return "error"
    }
}

