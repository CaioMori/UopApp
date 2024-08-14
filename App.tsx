import React from 'react';
import {
  SafeAreaView,
  StatusBar,
  StyleSheet,
  Text,
  View,
} from 'react-native';

const styles = StyleSheet.create({
  mainContainer: {backgroundColor: 'gray', flex: 1},
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
  },
  mainView: {
    backgroundColor: 'white',
    flex: 1,
  },
});

function App(): React.JSX.Element {
  return (
    <SafeAreaView style={styles.mainContainer}>
      <StatusBar barStyle="light-content" />
        <View
          style={styles.mainView}>
          <Text>Olá Mundo</Text>
        </View>
    </SafeAreaView>
  );
}

export default App;
