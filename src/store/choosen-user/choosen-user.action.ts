import User from "../../interfaces/user.interface"
import { ChoosenUserAction } from "./choosen-user.reducer"

export const CHOOSE_USER = 'CHOOSE_USER'

export const chooseUser = (user: User): ChoosenUserAction => {
    return {
        type: CHOOSE_USER,
        payload: user
    }
}