import React, {useEffect, useRef, useState} from 'react';
import {
  SafeAreaView,
  StyleSheet,
  Text,
  TouchableOpacity,
  Modal,
  View,
  FlatList,
  AppState,
} from 'react-native';
import i18next, {languageResources} from './app/services/i18next';
import {useTranslation} from 'react-i18next';
import {getLocales} from 'react-native-localize';

const App = () => {
  const [visible, setVisible] = useState(false);
  const {t} = useTranslation();
  const deviceLanguage = getLocales()[0].languageCode;
  const currentLanguage = i18next.language;

  useEffect(() => {
    if (currentLanguage !== deviceLanguage) {
      i18next.changeLanguage(deviceLanguage);
    }
  }, [currentLanguage, deviceLanguage]);

  return (
    <SafeAreaView style={styles.container}>
      <Text style={styles.text}>{t('welcome', {name: 'React Native'})}</Text>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#191266',
  },
  button: {
    backgroundColor: '#6258e8',
    padding: 10,
    borderRadius: 3,
  },
  buttonText: {
    color: 'white',
    fontSize: 16,
  },
  text: {
    marginBottom: 100,
    fontSize: 18,
    color: 'white',
  },
  languagesList: {
    flex: 1,
    justifyContent: 'center',
    padding: 10,
    backgroundColor: '#6258e8',
  },

  languageButton: {
    padding: 10,
    borderBottomColor: '#dddddd',
    borderBottomWidth: 1,
  },
  lngName: {
    fontSize: 16,
    color: 'white',
  },
});

export default App;
