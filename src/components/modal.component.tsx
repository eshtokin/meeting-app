import React from 'react'
import { connect } from 'react-redux'
import { View, Modal, Text, Image, StyleSheet, TouchableOpacity } from 'react-native'
import { Store } from './../store'
import { openCloseAcceptedModal, openCloseInvitedModal } from './../store/modals/modals.action'
import User from '../interfaces/user.interface'
import { deleteUser } from '../store/user-list/user-list.action'

interface Props {
    user: User
    acceptedModalVisible: boolean
    inviteModalVisible: boolean
    onNoButton: () => void
    onYesButton: (user: User) => void
    openCloseAccepted: () => void
    openCloseInvited: () => void
}
const AcceptModalComponent: React.FC<Props> = (props) => {
    const {
        user,
        acceptedModalVisible,
        inviteModalVisible,
        onNoButton,
        onYesButton,
        openCloseInvited
    } = props

    return (
        <View>
            <Modal
            animationType="slide"
            transparent={false}
            visible={acceptedModalVisible}
            >
                <View style={acceptedStyle.acceptedContainer}>
                    <Image
                    style={acceptedStyle.avatar}
                    source={{uri: user._links.avatar.href}}
                    />
                    <Text style={acceptedStyle.questionText}>
                        {`Are you sure you want to invite \n ${user.first_name} ${user.last_name} \n to a date?`}
                    </Text>
                    <Text>{`user id = ${user.id}`}</Text>
                    <View style={acceptedStyle.buttonsSection}>
                        <TouchableOpacity style={[acceptedStyle.button, acceptedStyle.buttonNo]}
                        onPress={onNoButton}>
                            <Text style={[acceptedStyle.buttonText, acceptedStyle.redText]}>No</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={[acceptedStyle.button, acceptedStyle.buttonYes]}
                        onPress={() => onYesButton(user)}>
                            <Text style={[acceptedStyle.buttonText, acceptedStyle.greenText]}>Yes</Text>
                        </TouchableOpacity>
                    </View>
                </View>
            </Modal>
            <Modal
            visible={inviteModalVisible}
            >
                <View style={inviteStyle.container}>
                    <Text style={inviteStyle.text}>
                        Приглашение отправленно!
                    </Text>
                    <TouchableOpacity style={inviteStyle.button} onPress={openCloseInvited}>
                        <Text style={inviteStyle.buttonText}>OK</Text>
                    </TouchableOpacity>
                </View>
            </Modal>
        </View>
    )
}

const acceptedStyle = StyleSheet.create({
    acceptedContainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-evenly'
    },
    avatar: {
        width: 300,
        height: 300,
        borderRadius: 25
    },
    questionText: {
        fontSize: 20,
        textAlign: 'center'
    },
    buttonsSection: {
        flexDirection: 'row',
        justifyContent: 'space-around',
    },
    button: {
        width: 130,
        height: 60,
        marginHorizontal: 10,
        borderWidth: 3,
        alignItems: 'center',
        justifyContent: 'center',
        borderRadius: 10,
        fontSize: 40,
    },
    buttonText: {
        fontSize: 30,
        fontStyle: 'italic'
    },
    buttonNo: {
        borderColor: 'red',
    },
    buttonYes: {
        borderColor: 'green'
    },
    redText: {
        color: 'red'
    },
    greenText: {
        color: 'green'
    }
})

const inviteStyle = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
    },
    text: {
        fontSize: 25,
        fontStyle: 'italic',
        marginVertical: 30
    },
    button: {
        width: 120,
        height: 50,
        alignItems: 'center',
        justifyContent: 'center',
        borderWidth: 3,
        borderColor: 'green',
        borderRadius: 13
    },
    buttonText: {
        fontSize: 30,
        fontStyle: 'italic',
        color: 'green'
    }
})

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
    openCloseAccepted: () => dispatch(openCloseAcceptedModal()),
    openCloseInvited: () => dispatch(openCloseInvitedModal())
})

export default connect(mapStateToProps, mapDispatchToProps)(AcceptModalComponent)