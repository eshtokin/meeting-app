import React, { useEffect } from 'react'
import { TouchableOpacity, SectionList, Text, StyleSheet } from 'react-native'
import User from '../interfaces/user.interface'
import UserComponent from './user.component'
import { connect } from 'react-redux'
import { openCloseAcceptedModal } from './../store/modals/modals.action'
import { chooseUser } from './../store/choosen-user/choosen-user.action'
import { Store } from '../store'
import userService from '../services/user.service'
import { getAllUsers } from '../store/user-list/user-list.action'

interface Props {
    openCloseAccepted: (user: User) => void
    getUserList: () => void
}

const UserListComponent: React.FC<Props> = (props) => {
    const { openCloseAccepted, getUserList} = props
    useEffect(() => {
        setTimeout(() => {getUserList()}, 410)
    }, []);

    const section = userService.divideUserForSection()
    
    return (
        <SectionList
        sections={section}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
            <TouchableOpacity onPress={() => openCloseAccepted(item as User)} key={(item as User).id}>
                <UserComponent user={item as User}></UserComponent>
            </TouchableOpacity>
        )}
        renderSectionHeader={({ section: { title } }) => (
            <Text style={styles.sectionText}>{title}</Text>
        )}
        />
    )
}

const styles = StyleSheet.create({
    sectionText: {
        marginTop: 15,
        fontSize: 20,
        fontStyle: 'italic',
        textAlign: 'center',
    }
})

const mapStateToProps = (store: Store) => ({
   ...store.users
})

const mapDispatchToProps = dispatch => ({
    openCloseAccepted: async (user) => {
        await dispatch(chooseUser(user))
        await dispatch(openCloseAcceptedModal())
    },
    getUserList: () => dispatch(getAllUsers())
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent)