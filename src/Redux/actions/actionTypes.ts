export enum ActionType {
    SEARCH_REPOSITORIES = 'search_repositories',
    SEARCH_REPOSITORIES_SUCESS = 'search_repositories_sucess',
    SEARCH_REPOSITORIES_ERROR = 'search_repositories_error'
}

interface SearchRepositoriesAction {
    type: ActionType.SEARCH_REPOSITORIES;
}
interface SearchRepositoriesSucessAction {
    type: ActionType.SEARCH_REPOSITORIES_SUCESS;
    payload: object[];
}
interface SearchRepositoriesErrorAction {
    type: ActionType.SEARCH_REPOSITORIES_ERROR;
    payload: string;
}

export type Action = | SearchRepositoriesAction | SearchRepositoriesSucessAction | SearchRepositoriesErrorAction;
