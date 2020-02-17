import { Modal, View, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import React from 'react'

interface Props {
    inviteModalVisible: boolean
    openCloseInvited: () => void
}

const InviteModalComponent: React.FC<Props> = ({inviteModalVisible, openCloseInvited}) => {
    return (
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
    )
}


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

export default InviteModalComponent