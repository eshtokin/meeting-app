import User from "../../interfaces/user.interface";
import { CHOOSE_USER } from "./choosen-user.action";

export interface ChoosenUserState {
    user: User | null
}

export interface ChoosenUserAction {
    type: string
    payload: User
}

const initialUser: User = {
    id: "",
    first_name: "",
    last_name: "",
    gender: "",
    dob: "",
    email: "",
    phone: "",
    website: "",
    address: "",
    status: "",
    _links: {
      self: {
        href: ""
      },
      edit: {
        href: ""
      },
      avatar: {
        href: ""
      }
    }
  }

const choosenUserReducer = (
    state: ChoosenUserState = {user: initialUser},
    action: ChoosenUserAction
    ): ChoosenUserState => {
    switch(action.type) {
        case CHOOSE_USER:
            return {
                user: action.payload
            }
        default:
            return state;
    }
}

export default choosenUserReducer