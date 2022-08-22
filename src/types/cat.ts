export enum CatActionTypes {
    FETCH_CATS = "FETCH_CATS",
    FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS",
    FETCH_CATS_ERROR = "FETCH_CATS_ERROR",
}

export type CatState = {
    cats: any[];
    loading: boolean;
    error: null | string
}

type FetchCatAction = {
    type: CatActionTypes.FETCH_CATS
}
type FetchCatActionSuccess = {
    type: CatActionTypes.FETCH_CATS_SUCCESS
    payload: any[];
}
type FetchCatActionError = {
    type: CatActionTypes.FETCH_CATS_ERROR
    payload: string;
}
export type CatAction = FetchCatAction | FetchCatActionSuccess | FetchCatActionError