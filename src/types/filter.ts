export enum FilterActionTypes {
    FETCH_FILTER = "FETCH_FILTER",
    FETCH_FILTER_SUCCESS = "FETCH_FILTER_SUCCESS",
    FETCH_FILTER_ERROR = "FETCH_FILTER_ERROR",
}

export type FilterState = {
    filters: any[];
    loading: boolean;
    error: null | string
}

type FetchFilterAction = {
    type: FilterActionTypes.FETCH_FILTER
}
type FetchFilterActionSuccess = {
    type: FilterActionTypes.FETCH_FILTER_SUCCESS
    payload: any[];
}
type FetchFilterActionError = {
    type: FilterActionTypes.FETCH_FILTER_ERROR
    payload: string;
}
export type FilterAction = FetchFilterAction | FetchFilterActionSuccess | FetchFilterActionError