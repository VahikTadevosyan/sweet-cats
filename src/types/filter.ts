export enum CatActionTypes {
    FETCH_CATS = "FETCH_CATS",
    FETCH_CATS_SUCCESS = "FETCH_CATS_SUCCESS",
    FETCH_CATS_ERROR = "FETCH_CATS_ERROR",
    SET_CATEGORY = "SET_CATEGORY",
    SET_LIMIT = "SET_LIMIT"
}

export type CatState = {
    cats: any[];
    loading: boolean;
    error: null | string,
    category?: number,
    limit: number
}

type FetchCatActon = {
    type: CatActionTypes.FETCH_CATS;
}

type FetchCatSuccessActon = {
    type: CatActionTypes.FETCH_CATS_SUCCESS;
    payload: any[];
}

type FetchCatErrorActon = {
    type: CatActionTypes.FETCH_CATS_ERROR;
    payload: string;
}

type SetCatCategoryActon = {
    type: CatActionTypes.SET_CATEGORY
    payload: number;
}

type SetCatLimitActon = {
    type: CatActionTypes.SET_LIMIT
    payload: number;
}

export type FetchCatAction =
    FetchCatActon
    | FetchCatSuccessActon
    | FetchCatErrorActon
    | SetCatCategoryActon
    | SetCatLimitActon