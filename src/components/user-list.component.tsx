import React from 'react'
import { TouchableOpacity, SectionList, Text, StyleSheet } from 'react-native'
import User from '../interfaces/user.interface'
import UserComponent from './user.component'
import { connect } from 'react-redux'
import { openCloseAcceptedModal } from './../store/modals/modals.action'
import { chooseUser } from './../store/choosen-user/choosen-user.action'
import { Store } from '../store'

interface Props {
    users: User[]
    openCloseAccepted: (user: User) => void
}

const UserListComponent: React.FC<Props> = (props) => {
    const {users, openCloseAccepted} = props
    
    const sectionName = new Set()
    let section = [];
    if (users.length > 0) {
        users.forEach(user => {
            sectionName.add(user.first_name.charAt(0))  
        })
        sectionName.forEach(l => {
            section.push({
                title: l,
                data: users.map(user => {
                    return user.first_name.charAt(0) === l ? user : null
                }).filter(user => user !== null)
            })
        })
    }

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
    }
})

export default connect(mapStateToProps, mapDispatchToProps)(UserListComponent)