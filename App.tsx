import React from 'react';
import { StyleSheet, SafeAreaView } from 'react-native'
import { Provider } from 'react-redux'
import store from './src/store/index'
import ModalComponent from './src/components/modal.component'
import FilterContainer from './src/containers/filter.container';
import UserListContainer from './src/containers/user-list.container';

const Application = () => {
  return (
    <SafeAreaView style={styles.container}>
      <FilterContainer />
      <UserListContainer />
      <ModalComponent />
    </SafeAreaView>
  );
}

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
    <Application />
  </Provider>
)

export default App