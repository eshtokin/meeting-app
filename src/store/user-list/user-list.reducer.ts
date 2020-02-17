import User from "../../interfaces/user.interface"
import * as userListTypes from "./user-list.types"
import userService from "../../services/user.service"

interface UserListAction {
    type: string
    payload?: User[]
}

export interface UserListState {
    users: User[]
}

const initialState = {
    users: []
}

const userListReducer = (state: UserListState = initialState, action: UserListAction) => {
    switch(action.type) {
        case userListTypes.UPDATE_USER_LIST:
            return {
                ...state,
                users: action.payload
            }
        case userListTypes.UPDATE_SECTION_LIST:
            return {
                ...state,
                sectionList: action.payload
            }
        default:
            return state
    }
}

export default userListReducer