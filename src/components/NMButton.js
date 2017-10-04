import React from 'react';
import { TouchableOpacity, View, Text, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const NMButton = ({title, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Text style={styles.label}>{title}</Text>
    </TouchableOpacity>
  )
};


NMButton.propTypes = {
  title: PropTypes.string.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style
};


const styles = StyleSheet.create({
  button: {
    width: null,
    height: 44,
    backgroundColor: '#5fb7e4',
    marginLeft: 24,
    marginRight: 24,
    alignItems: 'center',
    justifyContent: 'center',
    borderRadius: 4
  },

  label: {
    color: '#fff',
    fontWeight: '500',
    fontSize: 17
  }
});

export default NMButton;
