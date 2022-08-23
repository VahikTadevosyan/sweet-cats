import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CategoryActionCreators from '../store/action-creators/category'
import * as FilterActionCreators from '../store/action-creators/filter'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators(
        {
            ...CategoryActionCreators,
            ...FilterActionCreators
        }, dispatch)
}