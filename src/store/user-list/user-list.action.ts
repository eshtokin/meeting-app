import store from ".."
import User from "../../interfaces/user.interface"
import * as userListTypes from "./user-list.types"
import ServerResponse from "../../services/server-response"

export const updateUserList = (userList: User[]) => {
    userList.sort((user1, user2) => {
        return user1.first_name < user2.first_name
        ? -1
        : user1.first_name > user2.first_name
        ? 1
        : 0
    })

    return async dispatch => {
        setTimeout(() => {
            dispatch({
                type: userListTypes.UPDATE_USER_LIST,
                payload: userList
            })
        }, 400)
    }
}

export const getAllUsers = () => {
    return async dispatch => {
        setTimeout(() => {
            dispatch(updateUserList(ServerResponse.result))
        }, 400)
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