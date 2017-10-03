import React, { Component } from 'react';
import { View, StyleSheet, Text, Alert } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

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
