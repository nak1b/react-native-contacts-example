import React from 'react';
import { TextInput, View, StyleSheet, Dimensions } from 'react-native';


const { width } = Dimensions.get('window');

const NMInput = ({containerStyle, autoFocus, placeholder, value, onChangeText, autoCapitalize, keyboardType, returnKeyType }) => {

  return (
    <View style={[styles.container, containerStyle && containerStyle]}>
      <TextInput
        value={value}
        onChangeText={onChangeText}
        placeholder={placeholder}
        placeholderTextColor='#e3e3e3'
        keyboardType={keyboardType}
        returnKeyType={returnKeyType}
        autoFocus={autoFocus}
        autoCapitalize={autoCapitalize}
        autoCorrect={false}
        style={styles.input}
      />
    </View>
  )
};

const styles = StyleSheet.create({
  container: {
    borderColor: '#cdcdcd',
    borderWidth: 1.5,
    marginLeft: 24,
    marginRight: 24,
    borderRadius: 4,
    marginBottom: 24
  },

  input: {
    width: null,
    height: 38,
    color: '#5d5d5d',
    fontSize: 18,
    paddingLeft: 12,
    paddingRight: 12
  }
});

export default NMInput;
