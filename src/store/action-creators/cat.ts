import {CatAction, CatActionTypes} from "../../types/cat";
import {Dispatch} from "redux";
import axios from "axios";
import {API_KEY} from "../../Globals";
import {FilterAction} from "../../types/filter";


export const fetchCats = (filter: number) => {
    return async (dispatch: Dispatch<CatAction>) =>{
        try {
            dispatch({type: CatActionTypes.FETCH_CATS})
            const {data} = await axios.get('https://api.thecatapi.com/v1/images/search',{
                headers: {
                    'x-api-key' : API_KEY,
                },
                params:{
                    limit: 10,
                    category_ids: filter
                },
            })
            dispatch({type: CatActionTypes.FETCH_CATS_SUCCESS, payload: data})
        } catch (e) {
            dispatch({
                type: CatActionTypes.FETCH_CATS_ERROR,
                payload: 'Something went wrong'
            })
        }
    }
}