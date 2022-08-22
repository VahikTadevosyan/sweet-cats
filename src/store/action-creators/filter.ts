import {Dispatch} from "redux";
import axios from "axios";
import {API_KEY} from "../../Globals";
import {FilterAction, FilterActionTypes} from "../../types/filter";

export const fetchFilters = () => {
    return async (dispatch: Dispatch<FilterAction>) =>{
        try {
            dispatch({type: FilterActionTypes.FETCH_FILTER})
            const {data} = await axios.get('https://api.thecatapi.com/v1/categories',{
                headers: {
                    'x-api-key' : API_KEY,
                }
            })
            dispatch({type: FilterActionTypes.FETCH_FILTER_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: FilterActionTypes.FETCH_FILTER_ERROR,
                payload: 'Something went wrong'
            })
        }
    }
}