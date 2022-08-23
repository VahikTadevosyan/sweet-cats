export enum CategoryActionTypes {
    FETCH_CATEGORY = "FETCH_CATEGORY",
    FETCH_CATEGORY_SUCCESS = "FETCH_CATEGORY_SUCCESS",
    FETCH_CATEGORY_ERROR = "FETCH_CATEGORY_ERROR",
}

export type CategoryState = {
    category: any[];
    loading: boolean;
    error: null | string
}

type FetchCategoryAction = {
    type: CategoryActionTypes.FETCH_CATEGORY
}
type FetchCategoryActionSuccess = {
    type: CategoryActionTypes.FETCH_CATEGORY_SUCCESS
    payload: any[];
}
type FetchCategoryActionError = {
    type: CategoryActionTypes.FETCH_CATEGORY_ERROR
    payload: string;
}
export type CategoryAction = FetchCategoryAction | FetchCategoryActionSuccess | FetchCategoryActionError