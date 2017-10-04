import React, { Component } from 'react';
import { View, ListView, StyleSheet, Text, Alert } from 'react-native';

import { bindActionCreators } from 'redux'
import { connect } from 'react-redux';

import { NMContactItem } from '../components/';
import { fetchContacts } from '../actions/ContactsActions';


class ContactsList extends Component {
	constructor() {
    super();

    this.dataSource = [];
  }

	componentWillReceiveProps(nextProp) {
		if(nextProp.error) {
		  Alert.alert('Oops!', 'Something went wrong fetching your contacts data. Please try again!');
		}

		//setup up contacts datasource
		this.createDataSource(nextProp);
	}

	componentWillMount() {
		this.props.fetchContacts();

		//setup up contacts datasource
    this.createDataSource(this.props);
	}

	createDataSource({allContacts}) {
    const ds = new ListView.DataSource({rowHasChanged: (r1, r2) => r1 !== r2});
    this.dataSource = ds.cloneWithRows(allContacts);
  }

	renderContact(contact) {
		return (
			<NMContactItem
				contact={contact}
			/>
		);
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.header}>
					<Text style={styles.headerText}>Contacts List</Text>
				</View>

				<ListView
					enableEmptySections
					dataSource={this.dataSource}
					renderRow={(data) => this.renderContact(data)}
				/>
			</View>
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
