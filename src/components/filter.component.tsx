import React from 'react'
import {
    View,
    Text,
    StyleSheet,
    Button,
    TextInput,
    Picker,
} from 'react-native'
import { FilterState, GenderValue } from '../store/filter/filter.reducer'


interface Props {
    filter: FilterState
    find: (filterValues: FilterState) => void
    setName: (name: string) => void
    setMinAge: (minAge: number) => void
    setMaxAge: (maxAge: number) => void
    setGender: (gender: number) => void
    setToDefault: () => void
}

const FilterComponent: React.FC<Props> = (props) => {
    const {
        filter,
        setName, setMinAge, setMaxAge, setGender,
        setToDefault, find
    } = props

    return (
        <View style={styles.filterContainer}>
            <View style={styles.filter}>
                <TextInput
                style={styles.nameInput}
                onChangeText={setName}
                defaultValue={filter.name}
                placeholder="name"
                placeholderTextColor="black" />
                <View style={styles.ageContainer}>
                    <Text>Age from</Text>
                    <TextInput style={styles.ageInput}
                    defaultValue={filter.age.minAge.toString()}
                    keyboardType="phone-pad"
                    placeholderTextColor="black"
                    onChangeText={(age) => {setMinAge(+age)}}
                    />
                    <Text>to</Text>
                    <TextInput style={styles.ageInput}
                    defaultValue={filter.age.maxAge.toString()}
                    keyboardType="phone-pad"
                    placeholderTextColor="black"
                    onChangeText={(age) => {setMaxAge(+age)}}
                    />
                </View>
                <View style={styles.genderContainer}>
                    <Text>Gender</Text>
                    <Picker
                    mode="dropdown"
                    selectedValue={filter.gender}
                    onValueChange={(value) => {setGender(value)}}
                    style={styles.picker}>
                        <Picker.Item label='both' value={GenderValue.both} />
                        <Picker.Item label='male' value={GenderValue.male} />
                        <Picker.Item label='female' value={GenderValue.female} />
                    </Picker>
                </View>
            </View>
            <View style={styles.filterButton}>
                <Button title="reset" color="#865"  onPress={setToDefault}/>
                <Button title="find"  color="#385" onPress={() => find({
                    name: filter.name,
                    age: filter.age,
                    gender: filter.gender
                })} />
            </View>
        </View>
)}

const styles = StyleSheet.create({
    filterContainer: {
        width: 330,
        alignItems: 'center',
        justifyContent: 'space-between',
        flexDirection: 'row'
    },
    filter: {
        width: 250,
        height: 120,
        alignContent: 'center',
        alignItems: 'center',
        justifyContent: 'center',
    },
    nameInput: {
        textAlign: 'center',
        height: 35,
        width: 200,
        borderBottomWidth: 1,
        borderBottomColor: 'black',
    },
    ageContainer: {
        flexDirection: 'row',
        alignItems: 'center',
        justifyContent: 'space-between',
        width: 200,
        height: 35,
    },
    ageInput: {
        textAlign: 'center',
        width: 40,
        borderBottomWidth: 1
    },
    genderContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    picker: {
        width: 150,
        height: 35,
    },
    filterButton: {
        width: 80,
        height: 80,
        justifyContent: 'space-between'
    }
})

export default FilterComponent