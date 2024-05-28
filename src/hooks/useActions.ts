import { useDispatch } from "react-redux";
import { bindActionCreators } from 'redux'
import { action, AppDispatch } from '../Redux'

export const useActions = () => {
    const dispatch = useDispatch<AppDispatch>();
    return bindActionCreators(action, dispatch)

}