import React from 'react';
import { View, Text, StyleSheet } from 'react-native';
import CheckBox from 'react-native-checkbox';
import PropTypes from 'prop-types';

const NMContactItem = ({contact, onChange}) => {
	const { givenName, familyName, phoneNumbers, isSelected } = contact;
	const fullname = `${givenName} ${familyName}`;
	let number = 'Number Not Found';

	if(phoneNumbers[0] && phoneNumbers[0].number) {
		number = phoneNumbers[0].number;
	}

	const selectedBg = isSelected ? {backgroundColor: '#f3f3f3'} : null;
	
	return (
		<View style={[styles.item, selectedBg]}>
			<View style={{flex: 1}}>
				<Text style={styles.name}>{fullname}</Text>
				<Text style={styles.phone}>{number}</Text>
			</View>
			<CheckBox
			  label=''
			  checked={isSelected}
			  onChange={onChange}
			/>
		</View>
	);
}


NMContactItem.propTypes = {
  contact: PropTypes.object.isRequired,
  onChange: PropTypes.func.isRequired
};


const styles = StyleSheet.create({
	item: {
		flex: 1,
		flexDirection: 'row',
		height: 80,
		alignItems: 'center',
		justifyContent: 'space-between',
		paddingLeft: 16,
		paddingRight: 16
	},

	name: {
		fontSize: 20,
		fontWeight: 'bold',
		color: '#5d5d5d'
	},

	phone: {
		fontSize: 15,
		color: '#5d5d5d'
	}
});

export default NMContactItem;