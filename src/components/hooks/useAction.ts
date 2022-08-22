import {useDispatch} from "react-redux";
import {bindActionCreators} from "redux";
import * as CatActionCreators from '../../store/action-creators/cat'
import * as FilterActionCreators from '../../store/action-creators/filter'

export const useAction = () => {
    const dispatch = useDispatch()
    return bindActionCreators({...CatActionCreators, ...FilterActionCreators}, dispatch )
}