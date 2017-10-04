import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Images from '@assets/images';
import { NMTouchableIcon } from '../components/';


const ContactForm = ({isVisible, onClose}) => {
	return (
		<Modal
		  animationType="slide"
		  transparent={false}
		  visible={isVisible}
		>
			<View style={{flex: 1}}>
			  <NMTouchableIcon 
			  	icon={Images.greyClose} 
			  	onPress={onClose}
			  	style={styles.close}
			  />
			</View>
		</Modal>
	);
}

ContactForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
};


const styles = StyleSheet.create({
	close: {
		position: 'absolute', 
		top: 24, 
		right: 16
	}
})

export default ContactForm;
