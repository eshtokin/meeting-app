import { createStore, combineReducers, applyMiddleware } from 'redux'
import thunkMiddleware from 'redux-thunk'
import filterReducer, { FilterState } from './filter/filter.reducer'
import modalReducer, { ModalsState } from './modals/modals.reducer';
import choosenUserReducer, { ChoosenUserState } from './choosen-user/choosen-user.reducer';
import userListReducer, { UserListState } from './user-list/user-list.reducer';

export interface Store {
    filter: FilterState
    modals: ModalsState
    user: ChoosenUserState
    users: UserListState
}

const middlewares = [thunkMiddleware];

const store = createStore(
    combineReducers({
        filter: filterReducer,
        modals: modalReducer,
        user: choosenUserReducer,
        users: userListReducer
    }),
    applyMiddleware(...middlewares)
)

export default store