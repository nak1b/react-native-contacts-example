import React from 'react';
import { TouchableOpacity, View, Image, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';


const NMTouchableIcon = ({icon, onPress, style}) => {
  return (
    <TouchableOpacity onPress={onPress} style={[styles.button, style]}>
      <Image
        style={styles.icon}
        source={icon} />
    </TouchableOpacity>
  )
};


NMTouchableIcon.propTypes = {
  icon: PropTypes.number.isRequired,
  onPress: PropTypes.func.isRequired,
  style: View.propTypes.style
};


const styles = StyleSheet.create({
  button: {
    width: 26,
    height: 26,
    padding: 4
  },

  icon: {
    flex: 1,
    resizeMode: 'contain',
    alignSelf: 'center'
  }
});

export default NMTouchableIcon;
