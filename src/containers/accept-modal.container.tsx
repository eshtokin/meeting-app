import { Store } from "../store"
import { openCloseAcceptedModal, openCloseInvitedModal } from "../store/modals/modals.action"
import User from "../interfaces/user.interface"
import { deleteUser } from "../store/user-list/user-list.action"
import { connect } from "react-redux"
import AcceptModalComponent from "../components/accept-modal.component"

const mapStateToProps = (state: Store) => ({
    ...state.modals,
    ...state.user
})
const mapDispatchToProps = dispatch => ({
    onNoButton: () => {
        dispatch(openCloseAcceptedModal())
    },
    onYesButton: (user: User) => {
        dispatch(openCloseAcceptedModal())
        dispatch(deleteUser(user))
        dispatch(openCloseInvitedModal())
    },
    openCloseAccepted: () => dispatch(openCloseAcceptedModal())
})

const AcceptModalContainer = connect(mapStateToProps, mapDispatchToProps)(AcceptModalComponent)
export default AcceptModalContainer