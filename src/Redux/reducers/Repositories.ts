import { ActionType } from "../actions/actionTypes";
import { Action } from "../actions/actionTypes";

interface RepositoriesState {
    loading: Boolean;
    error: string | null;
    data: object[];
}

const initialState = {
    loading: false,
    error:  null,
    data: []
}
const repositories = (state: RepositoriesState = initialState, action: Action ): RepositoriesState => {
    switch (action.type) {
        case ActionType.SEARCH_REPOSITORIES:
            return { loading: true, error: null, data: [] }
        case ActionType.SEARCH_REPOSITORIES_SUCESS:
            return { loading: false, error: null, data: action.payload }
        case ActionType.SEARCH_REPOSITORIES_ERROR:
            return { loading: false, error: action.payload, data: [] }
        default:
            return state;
    }
};
export default repositories;