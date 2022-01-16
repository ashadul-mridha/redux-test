import axios from 'axios';
import {users_request , get_users_success , get_users_failed } from '../types';

export const usersList = () => {
    return async (dispatch) => {

        try{
            dispatch({
                type: users_request
            })
            const res = await axios.get('https://jsonplaceholder.typicode.com/users')
            console.log(res.data);
            dispatch({
                type: get_users_success,
                payload: res.data
            })
        }catch(error){

            dispatch({
                type: get_users_failed,
                payload: error.message
            })

        }
    }
} 