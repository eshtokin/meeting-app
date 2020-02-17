import store from ".."
import User from "../../interfaces/user.interface"
import * as userListTypes from "./user-list.types"
import userService from "../../services/user.service"

export const updateUserList = (userList: User[]) => {
    return async dispatch => {
        dispatch({
            type: userListTypes.UPDATE_USER_LIST,
            payload: userList
        })
    }
}

export const getAllUsers = () => {
    return dispatch => {
        dispatch(updateUserList(userService.getAllUsers()))
    }
}

export const deleteUser = (user: User) => {
    return (dispatch) => {
        let userList = store.getState().users.users.slice()
        userList = userList.filter(person => {
            return person.id !== user.id
        })
        dispatch(updateUserList(userList))
    }
}