import React from 'react';
import { View, Modal, StyleSheet } from 'react-native';
import PropTypes from 'prop-types';

import Images from '@assets/images';
import { NMTouchableIcon, NMInput, NMButton } from '../components/';


const ContactForm = ({isVisible, onClose, onSave, nameValue, phoneValue, nameChanged, phoneChanged}) => {
	return (
		<Modal
		  animationType="slide"
		  transparent={false}
		  visible={isVisible}
		>
			<View style={{flex: 1, paddingTop: 75}}>
			  <NMTouchableIcon 
			  	icon={Images.greyClose} 
			  	onPress={onClose}
			  	style={styles.close}
			  />

			  <NMInput
			    value={nameValue}
			    onChangeText={nameChanged}
			    placeholder='Name'
			    autoFocus={true}
			    autoCapitalize='words'
			  />

				<NMInput
				  value={phoneValue}
				  onChangeText={phoneChanged}
				  placeholder='Phone'
				  returnKeyType={'done'}
				  keyboardType='phone-pad'
				/>

        <NMButton
        	onPress={onSave}
        	title="ADD CONTACT"
        />
			</View>
		</Modal>
	);
}

ContactForm.propTypes = {
  isVisible: PropTypes.bool.isRequired,
  onClose: PropTypes.func.isRequired,
  onSave: PropTypes.func.isRequired
};


const styles = StyleSheet.create({
	close: {
		position: 'absolute', 
		top: 30, 
		right: 16
	}
})

export default ContactForm;
