import * as React from 'react';
import {
  SafeAreaView,
  StyleSheet,
  ScrollView,
  View,
  Text,
  StatusBar,
  TouchableOpacity,
} from 'react-native';
import {
  Header,
  Colors,
} from 'react-native/Libraries/NewAppScreen';

const App = () => {
  const onPress = React.useCallback(() => {
    blah;
  }, []);
  return (
    <>
      <StatusBar barStyle="dark-content" />
      <SafeAreaView>
        <ScrollView
          contentInsetAdjustmentBehavior="automatic"
          style={styles.scrollView}
        >
          <Header />
          <View style={styles.body}>
            <View style={styles.sectionContainer}>
              <Text style={styles.sectionTitle}>Test LogBox</Text>
              <Text style={styles.sectionDescription}>
                Press this button to crash the app and trigger LogBox.
              </Text>
              <TouchableOpacity onPress={onPress} activeOpacity={0.7}>
                <View style={styles.button}>
                  <Text style={styles.buttonText}>Crash</Text>
                </View>
              </TouchableOpacity>
            </View>
          </View>
        </ScrollView>
      </SafeAreaView>
    </>
  );
};

const styles = StyleSheet.create({
  scrollView: {
    backgroundColor: Colors.lighter,
  },
  body: {
    backgroundColor: Colors.white,
  },
  sectionContainer: {
    marginTop: 32,
    paddingHorizontal: 24,
  },
  sectionTitle: {
    fontSize: 24,
    fontWeight: '600',
    color: Colors.black,
    textAlign: 'center',
  },
  sectionDescription: {
    marginTop: 8,
    fontSize: 18,
    fontWeight: '400',
    color: Colors.dark,
    textAlign: 'center',
  },
  button: {
    borderRadius: 4,
    backgroundColor: '#FF6666AA',
    alignSelf: 'center',
    marginTop: 40,
    paddingTop: 10,
    paddingBottom: 15,
    paddingHorizontal: 60,
  },
  buttonText: {
    textAlign: 'center',
    color: 'white',
    fontSize: 20,
  },
});

export default App;
