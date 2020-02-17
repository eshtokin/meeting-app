import * as modalTypes from "./modals.types"

interface Action {
    type: string
    payload?: any
}

export const openCloseAcceptedModal = (): Action => {
    return {
        type: modalTypes.OPEN_CLOSE_ACCEPTED_MODAL
    }
}

export const openCloseInvitedModal = (): Action => {
    return {
        type: modalTypes.OPEN_CLOSE_INVITE_MODAL
    }
}