import { Store } from "../store"
import { openCloseInvitedModal } from "../store/modals/modals.action"
import { connect } from "react-redux"
import InviteModalComponent from "../components/invite-modal.component"

const mapStateToProps = (state: Store) => ({
    ...state.modals,
})

const mapDispatchToProps = dispatch => ({
    openCloseInvited: () => dispatch(openCloseInvitedModal())
})

const InviteModalContainer = connect(mapStateToProps, mapDispatchToProps)(InviteModalComponent)
export default InviteModalContainer