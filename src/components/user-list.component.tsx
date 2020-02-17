import React, { useEffect } from 'react'
import { TouchableOpacity, SectionList, Text, StyleSheet, ScrollView } from 'react-native'
import User from '../interfaces/user.interface'
import UserComponent from './user.component'
import { connect } from 'react-redux'
import { openCloseAcceptedModal } from './../store/modals/modals.action'
import { chooseUser } from './../store/choosen-user/choosen-user.action'
import { Store } from '../store'
import { getAllUsers } from '../store/user-list/user-list.action'
import { setDefaultValue } from '../store/filter/filter.action'

interface Props {
    users: User[]
    openCloseAccepted: (user: User) => void
    getUserList: () => void
}

const UserListComponent: React.FC<Props> = (props) => {
    const { users, getUserList, openCloseAccepted } = props

    useEffect(() => {
        getUserList()
    }, [])

    return (
        <ScrollView>
        {
            users ? users.map(user => (
                <TouchableOpacity onPress={() => openCloseAccepted(user)} key={user.id}>
                    <UserComponent user={user}></UserComponent>
                </TouchableOpacity>
            )) : <Text> Click "reset" to downlad list</Text>
        }
        </ScrollView>
    )
}

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

export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent)