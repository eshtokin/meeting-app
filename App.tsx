import React, { useState, useEffect } from 'react';
import { StyleSheet, SafeAreaView, Modal, Text, Alert, Button, TouchableOpacity } from 'react-native'
import UserListComponent from './src/components/user-list.component'
import FilterComponent from './src/components/filter.component';
import { Provider, connect } from 'react-redux'
import store from './src/store/index'
import AcceptModalComponent from './src/components/modal.component'
import { getAllUsers } from './src/store/user-list/user-list.action';

const Application = ({getUserList}) => {
  useEffect(() => {
    getUserList()
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <FilterComponent />
      <UserListComponent />
      <AcceptModalComponent />
    </SafeAreaView>
  );
}

const mapDispatchToProps = (dispatch) => ({
  getUserList: () => dispatch(getAllUsers())
})

const ApplicationWithDispatch = connect(null, mapDispatchToProps)(Application)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

const  App = () => (
  <Provider store={store}>
    <ApplicationWithDispatch />
  </Provider>
)

export default App