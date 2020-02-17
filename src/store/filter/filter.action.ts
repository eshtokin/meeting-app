import store from ".."
import * as filterTypes from "./filter.types"
import { updateUserList, getAllUsers } from "../user-list/user-list.action"
import { FilterState, GenderValue, initialState } from "./filter.reducer"
import userService from "../../services/user.service"

export const filterUserList = ({name, age, gender}: FilterState) => {
    return dispatch => {
        const userList = userService.getAllUsers()
        let filteredUserList = userList
        .filter((user) => {
            return name.length > 2
            ? user.first_name.includes(name) || user.last_name.includes(name)
            : true
        })
        .filter(user => {
            const dobYear = new Date(user.dob).getFullYear()
            const currentYear = new Date().getFullYear()
            const userAge = currentYear - dobYear
            return userAge > age.minAge && userAge < age.maxAge
        })

        filteredUserList = gender === GenderValue.both
        ? filteredUserList
        : filteredUserList.filter(user => user.gender === GenderValue[gender])
        
        setTimeout(() => {
            dispatch(updateUserList(filteredUserList))
        }, 400)
    }
}

export const setDefaultValue = () => {
    return dispatch => {
        dispatch(setDefaultFilter())
        dispatch(getAllUsers())
    }
}

const setDefaultFilter = () => {
    return {
        type: filterTypes.SET_DEFAULT_VALUES,
        payload: initialState
    }
}

export const setName = (name: string) => {
    return {
        type: filterTypes.SET_NAME,
        payload: {
            name
        }
    }
}
export const setMinAge = (minAge: number) => {
    return {
        type: filterTypes.SET_MIN_AGE,
        payload: {
            age: {
                minAge
            }
        }
    }
}
export const setMaxAge = (maxAge: number) => {
    return {
        type: filterTypes.SET_MAX_AGE,
        payload: {
            age: {
                maxAge
            }
        }
    }
}
export const setGender = (gender: number) => {
    return {
        type: filterTypes.SET_GENDER,
        payload: {
            gender
        }
    }
}