import React from 'react'
import { TouchableOpacity, Text, StyleSheet, ScrollView } from 'react-native'
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

    return (
        <ScrollView>
        {
            users ? users.map(user => (
                <TouchableOpacity onPress={() => openCloseAccepted(user)} key={user.id}>
                    <UserComponent user={user}></UserComponent>
                </TouchableOpacity>
            )) : <TouchableOpacity style={styles.downloadButton} onPress={getUserList}>
                    <Text style={styles.buttonText}>Show users</Text>
                </TouchableOpacity>
        }
        </ScrollView>
    )
}

const styles = StyleSheet.create({
    downloadButton: {
        height: 50,
        width: 150,
        marginTop: 200,
        borderWidth: 2,
        borderRadius: 10,
        alignItems: 'center',
        justifyContent: 'center',
        borderColor: 'green',
    },
    buttonText: {
        fontSize: 20,
        fontStyle: 'italic',
        fontWeight: 'bold',
        color: 'green'
    }
})

export default UserListComponent