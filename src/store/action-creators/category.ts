import {Dispatch} from "redux";
import axios from "axios";
import {API_KEY} from "../../Globals";
import {CategoryAction, CategoryActionTypes} from "../../types/category";

export const fetchCategories = () => {
    return async (dispatch: Dispatch<CategoryAction>) =>{
        try {
            dispatch({type: CategoryActionTypes.FETCH_CATEGORY})
            const {data} = await axios.get('https://api.thecatapi.com/v1/categories',{
                headers: {
                    'x-api-key' : API_KEY,
                }
            })
            dispatch({type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: CategoryActionTypes.FETCH_CATEGORY_ERROR,
                payload: 'Something went wrong'
            })
        }
    }
}