import React from 'react'
import { View, Text, Image, StyleSheet} from 'react-native'
import User from '../interfaces/user.interface'

interface UserProps {
    user: User;
}

const UserComponent: React.FC<UserProps> = ({user}) => {

    const calculateYears = () => {
        const today = new Date().getFullYear();
        const dob = new Date(user.dob).getFullYear();
        const difference = today - dob
        return difference
    }

    return (
        <View style={styles.userContainer}>
            <Text style={user.status === 'active' ? styles.textForActive : styles.textForInactive}>
                {`#${user.id} - ${user.first_name} ${user.last_name} - ${calculateYears()} year old - ${user.gender}`}
            </Text>
        </View>
    )
}

const styles = StyleSheet.create({
    userContainer: {
        width: 350,
        height: 50,
        justifyContent: 'center',
        marginTop: 1,
        paddingLeft: 20,
        backgroundColor: '#eee',
        borderRadius: 5
    },
    textForActive: {
        color: 'black',
    },
    textForInactive: {
        color: 'grey',
    }
})

export default UserComponent