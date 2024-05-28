import axios from 'axios';
import { ActionType } from './actionTypes';
import { AppDispatch } from '../store';

export const searchRepositories = (term: string) => {
    return async (dispatch: AppDispatch) => {
        dispatch({
            type: ActionType.SEARCH_REPOSITORIES
        });
        try {
            const { data } = await axios.get('https://registry.npmjs.org/-/v1/search', {
                params: {
                    text: term
                }
            });
            const names = data.objects.map((result: any) => {
                return result.package;
            })

            dispatch({ type: ActionType.SEARCH_REPOSITORIES_SUCESS, payload: names })
        } catch (err: any) {
            dispatch({
                type: ActionType.SEARCH_REPOSITORIES_ERROR,
                payload: err.message,
            })
        }
    }
}