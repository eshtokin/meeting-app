import * as modalTypes from "./modals.types"

export interface ModalsState {
    acceptedModalVisible: boolean
    inviteModalVisible: boolean
}

const initialState: ModalsState = {
    acceptedModalVisible: false,
    inviteModalVisible: false
}

export interface Action {
    type: string
    payload: any
}

const modalReducer = (state = initialState, action: Action): ModalsState => {
    switch (action.type) {
        case modalTypes.OPEN_CLOSE_ACCEPTED_MODAL:
            return {
                ...state,
                acceptedModalVisible: !state.acceptedModalVisible
            }
        case modalTypes.OPEN_CLOSE_INVITE_MODAL:
            return {
                ...state,
                inviteModalVisible: !state.inviteModalVisible
            }
        default:
            return state;
    }
}

export default modalReducer