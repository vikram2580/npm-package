import { combineReducers } from "redux";
import repositories from "./Repositories";

const reducers = combineReducers({
    repositories: repositories
})
export default reducers;

export type RootState = ReturnType<typeof reducers>;