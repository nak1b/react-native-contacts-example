import React from 'react';
import { View, Text, StyleSheet } from 'react-native';

const NMContactItem = ({contact}) => {
	const { givenName, familyName, phoneNumbers } = contact;
	const fullname = `${givenName} ${familyName}`;
	let number = 'Number Not Found';

	if(phoneNumbers[0] && phoneNumbers[0].number) {
		number = phoneNumbers[0].number;
	}

	return (
		<View style={styles.item}>
			<Text style={styles.name}>{fullname}</Text>
			<Text style={styles.phone}>{number}</Text>
		</View>
	);
}


NMContactItem.propTypes = {
  contact: React.PropTypes.object,
};


const styles = StyleSheet.create({
	item: {
		flex: 1,
		height: 90,
		justifyContent: 'center',
		paddingLeft: 16
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