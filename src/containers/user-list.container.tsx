import UserListComponent from "../components/user-list.component"
import { Store } from "../store"
import { chooseUser } from "../store/choosen-user/choosen-user.action"
import { openCloseAcceptedModal } from "../store/modals/modals.action"
import { setDefaultValue } from "../store/filter/filter.action"
import { getAllUsers } from "../store/user-list/user-list.action"
import { connect } from "react-redux"

const mapStateToProps = (store: Store) => ({
    ...store.users
})

const mapDispatchToProps = dispatch => ({
    openCloseAccepted: (user) => {
        dispatch(chooseUser(user))
        dispatch(openCloseAcceptedModal())
    },
    tryr: () => dispatch(setDefaultValue()),
    getUserList: () => dispatch(getAllUsers())
})

const UserListContainer = connect(mapStateToProps, mapDispatchToProps)(UserListComponent)
export default UserListContainer