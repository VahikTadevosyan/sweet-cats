import {CatActionTypes, FetchCatAction} from "../../types/filter";
import {Dispatch} from "redux";
import axios from "axios";
import {API_KEY} from "../../Globals";


export const fetchFilter = ( limit: number, categoryId: number | undefined) => {
    return async (dispatch: Dispatch<FetchCatAction>) =>{
        try {
           if (categoryId) {
               dispatch({type: CatActionTypes.FETCH_CATS})
               const {data} = await axios.get('https://api.thecatapi.com/v1/images/search',{
                   headers: {
                       'x-api-key' : API_KEY,
                   },
                   params:{
                       limit: limit,
                       category_ids: categoryId,
                   },
               })
               dispatch({type: CatActionTypes.FETCH_CATS_SUCCESS, payload: data})
           }
           else {
               dispatch({type: CatActionTypes.FETCH_CATS})
               const {data} = await axios.get('https://api.thecatapi.com/v1/images/search',{
                   headers: {
                       'x-api-key' : API_KEY,
                   },
                   params:{
                       limit: limit,
                   },
               })
               dispatch({type: CatActionTypes.FETCH_CATS_SUCCESS, payload: data})
           }
        } catch (e) {
            dispatch({
                type: CatActionTypes.FETCH_CATS_ERROR,
                payload: 'Something went wrong'
            })
        }
    }
}

export const setCategory = (categoryId: number): FetchCatAction => {
    return {type: CatActionTypes.SET_CATEGORY, payload: categoryId}
}

export const setLimit = (limit: number): FetchCatAction => {
    return {type: CatActionTypes.SET_LIMIT, payload: limit}
}