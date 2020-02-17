import { Modal, View, TouchableOpacity, Image, Text, StyleSheet } from "react-native"
import React from 'react'
import User from "../interfaces/user.interface"

interface Props {
    user: User
    acceptedModalVisible: boolean
    onNoButton: () => void
    onYesButton: (user: User) => void
}

const AcceptModalComponent: React.FC<Props> = ({user, acceptedModalVisible, onNoButton, onYesButton}) => {
    return (
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

export default AcceptModalComponent