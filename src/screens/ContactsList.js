import React, { Component } from 'react';
import { View, StyleSheet, Text } from 'react-native';

import Contacts from 'react-native-contacts';


class ContactsList extends Component {
	componentWillMount() {
		
	}

	render() {
		return (
			<View style={styles.container}>
				<Text>Contacts List</Text>
			</View>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
		backgroundColor: 'red'
	}
});


export default ContactsList;