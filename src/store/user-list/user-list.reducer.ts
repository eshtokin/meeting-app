import User from "../../interfaces/user.interface"
import * as userListTypes from "./user-list.types"

interface UserListAction {
    type: string
    payload?: User[]
}

export interface UserListState {
    users: User[]
}

const userListReducer = (state: UserListState = {users: []}, action: UserListAction) => {
    switch(action.type) {
        case userListTypes.UPDATE_USER_LIST:
            return {
                ...state,
                users: action.payload
            }
        default:
            return state
    }
}

export default userListReducer