import React, { Component } from 'react';
import { View, ScrollView, StyleSheet, Text, Alert } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { NMContactItem } from '../components/';
import { fetchContacts } from '../actions/ContactsActions';


class ContactsList extends Component {

	componentWillReceiveProps(nextProp) {
		if(nextProp.error) {
		  Alert.alert('Oops!', 'Something went wrong fetching your contacts data. Please try again!');
		}
	}

	componentWillMount() {
		this.props.fetchContacts();

	}

	renderContacts() {
		const { allContacts } = this.props;

		return allContacts.map(contact => {
			return (
				<NMContactItem
					contact={contact}
					key={contact.recordID}
				/>
			)
		});
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Contacts List</Text>
				</View>
				
				<View style={styles.contactsWrapper}>
					{this.renderContacts()}
				</View>
			</ScrollView>
		)
	}
}


const styles = StyleSheet.create({
	container: {
		flex: 1,
	},

	header: {
		height: 74,
		backgroundColor: '#e3e3e3',
		justifyContent: 'center',
		alignItems: 'center',
	},

	headerText: {
		fontSize: 20
	},

	contactsWrapper: {
		flex: 1
	}
});


const mapStateToProps = (state) => {
	const { allContacts, error } = state.contacts;

  return {
  	allContacts,
  	error
  };
};

const mapDispatchToProps = (dispatch) => {
  return bindActionCreators({
  	fetchContacts
  }, dispatch);
};

export default connect(mapStateToProps, mapDispatchToProps)(ContactsList);
